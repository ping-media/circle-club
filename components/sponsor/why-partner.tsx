"use client";

import { PARTNER_LIST, PartnerList } from "@/constants/partner";
import Container from "../shared/container";
import SectionLabel from "../shared/section-label";
import SectionTitle from "../shared/section-title";
import Image from "next/image";

const WhyPartner = () => {
  return (
    <Container className="relative z-50">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-7 flex flex-col gap-44">
          <div className="flex flex-col gap-4">
            <SectionLabel number="002" label="Why Partner" />
            <SectionTitle
              title="circle club provides access to:"
              colorClassName="font-bold! md:text-[56px]!"
            />
            <div className="border-b border-[#0000002E]" />
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
      colorClassName="tracking-tight! text-sm!"
      labelClassName="text-foreground! font-semibold!"
      squareClassName="bg-brown-100!"
    />

    <p className="text-[#000000CC] md:w-2/3 font-normal leading-6">
      {item.description}
    </p>
  </div>
);
