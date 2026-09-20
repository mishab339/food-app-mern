## Live Applications

Customer App: [https://your-user-frontend.vercel.app](https://food-app-mern-omega.vercel.app/)

Admin Panel: [https://your-admin-frontend.vercel.app](https://food-app-mern-y9du.vercel.app/)

## 💳 Stripe Test Payment

MealPulse uses Stripe Checkout for payment processing.

The application is configured to use **Stripe Test Mode**. No real payments will be processed.

### Test Card

Use the following card details when testing the checkout:

| Field | Value |
|---|---|
| Card Number | `4242 4242 4242 4242` |
| Expiry Date | Any future date |
| CVC | Any 3 digits |
| ZIP / Postal Code | Any valid value |

> **Note:** Use Stripe test mode when entering these details. Do not use real card information.

### Stripe Test Credentials

The project requires the following environment variables:

```env
STRIPE_SECRET_KEY=your_stripe_test_secret_key
FRONTEND_URL=https://your-frontend-url.vercel.app
