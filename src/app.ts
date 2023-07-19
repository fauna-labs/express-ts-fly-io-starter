// Copyright Fauna, Inc.
// SPDX-License-Identifier: MIT-0

import express, { Application, NextFunction, Request, Response } from 'express';
import { Client, fql } from 'fauna';
import 'dotenv/config';

const port = process.env.PORT || 3000;

const secret = process.env.FAUNA_SECRET_KEY || "";
const client = new Client({
  secret
});  

const app: Application = express();

app.get('/', (req:Request, res: Response) => {
  res.send('Hello express-ts-fly-io-starter');
})

app.get('/read', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const r: any = await client.query(fql`
        order.all() {
          orderName: .name,
          customer: .customer.firstName + " " + .customer.lastName,
          orderProducts {
            product: .product.name,
            price,
            quantity
          }
        }
      `);

      res.json({
        flyStats: {
          usingFlyRegion: process.env.FLY_REGION ? process.env.FLY_REGION : "unknown"
        },
        faunaStats: {
          ...r.stats
        },
        data: {
          orders: r.data['data']
        }        
      })
    } catch (err) {
      return next(err);
    }
})

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`);
})