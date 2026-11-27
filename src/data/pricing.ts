export const pricingPlans = [
  { id: "basic", name: "Basic Plan", price: "$120.25", light: false, features: ["30-min consultation", "Initial case review", "Document checklist", "Email support"] },
  { id: "standard", name: "Standard Rate", price: "$230.45", light: true, features: ["60-min consultation", "Full case strategy", "Document drafting", "Priority email & phone"] },
  { id: "premium", name: "Premium Rate", price: "$500.00", light: false, features: ["Unlimited consultation", "Full representation", "Court appearances", "Dedicated attorney"] },
] as const;

export type PricingPlan = (typeof pricingPlans)[number];
export const clientBenefits = ["Free Initial Consultation", "No Win, No Fee Options", "24/7 Client Support"] as const;
