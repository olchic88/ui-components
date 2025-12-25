export const plan = {
  basic: {
    title: "Basic Plan",
    description: "Access to a curated selection of abstract images",
    features: [
      "Standard quality images",
      "Limited to personal use",
      "Email support",
    ],
  },
  standard: {
    title: "Standard Plan",
    description: "Next-level Integrations, priced economically",
    features: [
      "Expanded library with more diverse abstract images",
      "High-resolution images available",
      "Suitable for commercial use",
      "Priority email support",
      "Advanced analytics",
    ],
  },
  premium: {
    title: "Premium Plan",
    description: "Experience limitless living for power users",
    features: [
      "Full access to the entire image library, including exclusive content",
      "Highest quality images, including premium collections",
      "Commercial and resale rights",
      "Dedicated customer support line",
      "24/7 support response time",
      "Advanced analytics and insights",
    ],
  },
};

export const pricingSectionTiersData = {
  monthly: [
    {
      plan: "basic",
      price: 9.99,
      currency: "USD",
      popular: false,
    },
    {
      plan: "standard",
      price: 19.99,
      currency: "USD",
      popular: true,
    },
    {
      plan: "premium",
      price: 29.99,
      currency: "USD",
      popular: false,
    },
  ],
  annually: [
    {
      plan: "basic",
      price: 6.99,
      currency: "USD",
      popular: false,
    },
    {
      plan: "standard",
      price: 15.99,
      currency: "USD",
      popular: true,
    },
    {
      plan: "premium",
      price: 25.99,
      currency: "USD",
      popular: false,
    },
  ],
};
