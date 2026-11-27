import { Header } from "@/components/layout/header";
import { InnerFooter } from "@/components/layout/inner-footer";
import { ConsultationBanner } from "@/components/shared/consultation-banner";

export default function InnerLayout({ children }: { children: React.ReactNode }) {
  return <div id="page-top"><Header /><main id="main-content">{children}</main><ConsultationBanner /><InnerFooter /></div>;
}
