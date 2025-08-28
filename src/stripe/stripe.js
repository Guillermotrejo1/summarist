import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Ensure you use your secret key from environment variables

export default async function handler(req, res) {
  if (req.method === 'POST') { // Ensure this endpoint only handles POST requests
    try {
      const { amount, currency = 'usd' } = req.body; // Get amount and currency from the request body

      // Create a payment intent
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
        payment_method_types: ['card'],
      });

      // Respond with the client secret
      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
