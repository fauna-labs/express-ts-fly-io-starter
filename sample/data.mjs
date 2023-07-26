// Copyright Fauna, Inc.
// SPDX-License-Identifier: MIT-0

import { fql } from "fauna";

const customers = {
  coll: fql`customer`,
  data: [
  {
    id: "101",
    firstName: "Alice",
    lastName: "Appleseed",
    address: {
      street: "87856 Mendota Court",
      city: "Washington",
      state: "DC",
      zipCode: "20220"
    },
    telephone: "208-346-0715",
    creditCard: {
      network: "Visa",
      number: "4556781272473393"
    }
  },
  {
    id: "102",
    firstName: "Bob",
    lastName: "Brown",
    address: {
      street: "72 Waxwing Terrace",
      city: "Washington",
      state: "DC",
      zipCode: "20002"
    },
    telephone: "719-872-8799",
    creditCard: {
      network: "Visa",
      number: "4916112310613672"
    }
  },
  {
    id: "103",
    firstName: "Carol",
    lastName: "Clark",
    address: {
      street: "5 Troy Trail",
      city: "Washington",
      state: "DC",
      zipCode: "20220"
    },
    telephone: "907-949-4470",
    creditCard: {
      network: "Amex",
      number: "4532636730015542"
    }
  }
]}


const stores = {
  coll: fql`store`,
  data: [
  {
    id: "301",
    name: "DC Fruits",
    address: {
      street: "13 Pierstorff Drive",
      city: "Washington",
      state: "DC",
      zipCode: "20220"
    }
  },
  {
    id: "302",
    name: "Party Supplies",
    address: {
      street: "7529 Capitalsaurus Court",
      city: "Washington",
      state: "DC",
      zipCode: "20002"
    }
  },
  {
    id: "303",
    name: "Foggy Bottom Market",
    address: {
      street: "4 Florida Ave",
      city: "Washington",
      state: "DC",
      zipCode: "20037"
    }
  }
]}

const products = {
  coll: fql`product`,
  data: [
  {
    id: "201",
    name: "cups",
    description: "Translucent 9 Oz, 100 ct",
    price: 6.98,
    quantity: 100,
    store: "302",
    backorderedLimit: 5,
    backordered: false
  },
  {
    id: "202",
    name: "pinata",
    description: "Original Classic Donkey Pinata",
    price: 24.99,
    quantity: 20,
    store: "302",
    backorderedLimit: 10,
    backordered: false
  },
  {
    id: "203",
    name: "pizza",
    description: "Frozen Cheese",
    price: 4.99,
    quantity: 100,
    store: "303",
    backorderedLimit: 15,
    backordered: false
  },
  {
    id: "204",
    name: "avocados",
    description: "Conventional Hass, 4ct bag",
    price: 3.99,
    quantity: 1000,
    store: "301",
    backorderedLimit: 15,
    backordered: false
  },
  {
    id: "205",
    name: "limes",
    description: "Conventional, 1 ct",
    price: 0.35,
    quantity: 1000,
    store: "301",
    backorderedLimit: 15,
    backordered: false
  },
  {
    id: "206",
    name: "limes",
    description: "Organic, 16 oz bag",
    price: 3.49,
    quantity: 50,
    store: "301",
    backorderedLimit: 15,
    backordered: false
  },
  {
    id: "207",
    name: "limes",
    description: "Conventional, 16 oz bag",
    price: 2.99,
    quantity: 30,
    store: "303",
    backorderedLimit: 15,
    backordered: false
  },
  {
    id: "208",
    name: "cilantro",
    description: "Organic, 1 bunch",
    price: 1.49,
    quantity: 100,
    store: "301",
    backorderedLimit: 15,
    backordered: false
  },
  {
    id: "209",
    name: "pinata",
    description: "Giant Taco Pinata",
    price: 23.99,
    quantity: 10,
    store: "302",
    backorderedLimit: 10,
    backordered: false
  }
]}

const orders = {
  coll: fql`order`,
  data: [
  {
    id: "1001",
    name: "Order 1001",
    customer: "103",
    orderProducts: [
      {
        product: "201",
        quantity: 25,
        price: 6.98
      },
      {
        product: "203",
        quantity: 10,
        price: 4.99
      }
    ],
    status: "complete",
    creationDate: "2022-06-08T16:24:53.202530Z",
    deliveryAddress: {
      street: "5 Troy Trail",
      city: "Washington",
      state: "DC",
      zipCode: "20220"
    },
    creditCard: {
      network: "Visa",
      number: "4532636730015542"
    }
  },
  {
    id: "1002",
    name: "Order 1002",
    customer: "102",
    orderProducts: [
      {
        product: "203",
        quantity: 15,
        price: 4.99
      },
      {
        product: "202",
        quantity: 45,
        price: 24.99
      }
    ],
    status: "processing",
    creationDate: "2022-06-08T16:24:53.202530Z",
    deliveryAddress: {
      street: "72 Waxwing Terrace",
      city: "Washington",
      state: "DC",
      zipCode: "20002"
    },
    creditCard: {
      network: "Visa",
      number: "4916112310613672"
    }
  },
  {
    id: "1003",
    name: "Order 1003",
    customer: "101",
    orderProducts: [
      {
        product: "204",
        quantity: 10,
        price: 3.99
      },
      {
        product: "206",
        quantity: 5,
        price: 3.49
      },
      {
        product: "208",
        quantity: 20,
        price: 1.49
      }
    ],
    status: "processing",
    creationDate: "2022-06-08T16:24:53.202530Z",
    deliveryAddress: {
      street: "87856 Mendota Court",
      city: "Washington",
      state: "DC",
      zipCode: "20220"
    },
    creditCard: {
      network: "Visa",
      number: "4556781272473393"
    }
  }      
]}

export { customers, stores, products, orders}