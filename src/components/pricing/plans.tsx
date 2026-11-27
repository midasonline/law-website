import { pricingPlans } from "@/data/pricing";
import { PackageCard } from "./package-card";

export function Plans() { return <section aria-label="Consultation packages" className="inner-container grid items-stretch gap-6 pb-24 lg:grid-cols-3">{pricingPlans.map((plan, index) => <PackageCard key={plan.id} plan={plan} index={index} />)}</section>; }
