import type { Metadata } from "next";
import { CheckoutContent } from "./CheckoutContent";

export const metadata: Metadata = {
  title: "Checkout | Afterhours Collective",
  description:
    "Complete your order — shipping details for your Afterhours Collective collectibles.",
};

export default function CheckoutPage() {
  return <CheckoutContent />;
}
