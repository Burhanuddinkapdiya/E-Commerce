// const router = require("express").Router();
// const stripe = require("stripe")(
//   "sk_test_51NNwOOSJkrDmXNbHV0Jfw6cD1kLiW4YPwZ29mtInWk8nqDDDEeAQMERVX9nMhmV3yhg1IYUeoTzHsHjnPhtAbx3S00IV5zSk34"
// );

// router.post("/payment", async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     line_item: [
//       {
//         source: req.body.tokenId,
//         price: req.body.amount,
//       },
//     ],
//     mode: "payment",
//     success_url: "http://localhost:3000/success",
//     cancel_url: "http://localhost:3000/cancel",
//   });
//   res.send({url: session.url});
// });

// module.exports = router;
const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51NNwOOSJkrDmXNbHV0Jfw6cD1kLiW4YPwZ29mtInWk8nqDDDEeAQMERVX9nMhmV3yhg1IYUeoTzHsHjnPhtAbx3S00IV5zSk34"
);

router.post("/payment", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd", // or your preferred currency
            product: req.body.productId, // This should be a valid Stripe Product ID
          },
          quantity: 1, // You can adjust the quantity if needed
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).send("Payment session creation failed.");
  }
});

module.exports = router;