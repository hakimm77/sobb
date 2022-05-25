import express from "express";
import Stripe from "stripe";

const app = express();
const PORT = 3000;
const PUBLISHABLE_KEY =
  "pk_live_51JtocOIs7Jyt1o1UUXsbOvBuE6XCCYSPMFxmzedzLs7zg0jOHX8phdR0hudnnVr8oMI9rXT3MUTOAoWuNZehIB4S00B6FVjeaA";
const SECRET_KEY =
  "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";

const stripe = new Stripe(SECRET_KEY, { apiVersion: "2020-08-27" });

app.post("/payment", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 5000,
      currency: "sek",
      payment_method_types: ["card"],
    });

    const clientSecret = paymentIntent.client_secret;

    res.json({
      clientSecret: clientSecret,
    });
  } catch (e: any) {
    console.log(e);
    res.json({
      error: e.messsage,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
