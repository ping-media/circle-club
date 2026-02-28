"use client";

import { PARTNER_LIST, PartnerList } from "@/constants/partner";
import Container from "../shared/container";
import SectionLabel from "../shared/section-label";
import SectionTitle from "../shared/section-title";
import Image from "next/image";

const WhyPartner = () => {
  return (
    <Container>
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-7 flex flex-col gap-44">
          <div className="flex flex-col gap-4">
            <SectionLabel number="002" label="Why Partner" />
            <SectionTitle
              title="circle club provides access to:"
              colorClassName="font-bold! md:text-[56px]!"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {PARTNER_LIST.map((item) => (
              <PartnerCard item={item} key={item.title} />
            ))}
          </div>
        </div>
        <div className="md:col-span-5">
          <Image
            width={515}
            height={620}
            className="w-full aspect-2/3 object-cover"
            src="/images/partner/partner.webp"
            alt="why partner"
          />
        </div>
      </div>
    </Container>
  );
};

export default WhyPartner;

const PartnerCard = ({ item }: { item: PartnerList }) => (
  <div className="flex flex-col gap-4">
    <SectionLabel
      label={item.title}
      colorClassName="text-foreground! font-semibold! font-base!"
      squareClassName="text-brown-100!"
    />

    <p>{item.description}</p>
  </div>
);
