const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HX4uhLnaJQDbJfvaf2cWj46jZJFptN3hw6hKZs8T85fe61EYyQ3WCllt9ZXZ82m0HTDgm6TKqrEQYKFNdEXnqgO00x7EFxXSX"
);
//firebase deploy --only functions
//it is incomplete for now
//API

//Appconfig
const app = express();
//middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//api routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request recevied", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-7027c/us-central1/api
