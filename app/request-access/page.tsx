import RequestAccessFormSection from "@/components/request-access/request-access-form-section";
import RequestAccessSection from "@/components/request-access/request-access-section";
import BorderGrid from "@/components/shared/border-grid";
import { SITE_CONFIG } from "@/constants/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Request Access | ${SITE_CONFIG.name}`,
};

const RequestAccess = () => {
  return (
    <>
      <section className="relative bg-brown-100 py-11">
        <BorderGrid />
        <RequestAccessSection />
      </section>
      <section className="relative bg-gold-40 pt-11 md:py-20">
        <BorderGrid />
        <RequestAccessFormSection />
      </section>
    </>
  );
};

export default RequestAccess;
