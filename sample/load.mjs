// Copyright Fauna, Inc.
// SPDX-License-Identifier: MIT-0

import { Client, fql } from "fauna";
import 'dotenv/config';
import { customers, stores, products, orders} from './data.mjs';

const client = new Client({
  secret: process.env.FAUNA_SECRET_KEY
});

async function createDocument(collection, data) {  
  try {
    let res = await client.query(fql`
      let createColl = Collection.byName(${collection}) == null
      if (createColl) {
        Collection.create({
          name: ${collection}
        })
      }
    `)

    let postProcess = fql`newdoc.id`;

    if (collection == 'product') {
      postProcess = fql`
        ${data.coll}.byId(newdoc.id).update({
          store: store.byId(newdoc.store)
        })
      `
    }
    else if (collection == 'order') {
      postProcess = fql`
        ${data.coll}.byId(newdoc.id).update({
          customer: customer.byId(newdoc.customer),
          creationDate: Time(newdoc.creationDate),
          orderProducts: newdoc.orderProducts.map(x=>{
            Object.assign(x, { product: product.byId(x.product) })
          })
        })
      `
    }

    res = await client.query(fql`
      ${data.data}.map(x=>{
        if (!${data.coll}.byId(x.id).exists()) {
          let newdoc = ${data.coll}.create(x)
          ${postProcess}
        }
      })
    `)
    console.log(res.data)
  } catch(err) {
    console.log(err)
  }
}



await createDocument("customer", customers);
await createDocument("store", stores);
await createDocument("product", products);
await createDocument("order", orders);


