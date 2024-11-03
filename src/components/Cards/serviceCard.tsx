"use client"
import { useRouter } from "next/navigation";
import BorderlessButton from "../Buttons/borderlessButton";
import AdvocacyComponent from "../Icons/advocacy";
import CounsellingComponent from "../Icons/counselling";
import LegalComponent from "../Icons/legal";
import { SyntheticEvent } from "react";

type ServiceCardProps = {
  slug: string,
  title: string,
  description: string,
  icon: string,
  price: number,
}

export default function ServiceCard({ slug, title, description, icon }: ServiceCardProps) {
  const router = useRouter();


  // Handle form submission
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    router.push(`/get-support/services/booking/${slug}`);
  };

  return (
    <div className="flex flex-col items-center max-h-80 max-w-72 py-4 px-6 bg-lightForeground border-[3px] border-background text-background font-semibold rounded-md">
      {icon === "advocacy" ? <AdvocacyComponent className="max-h-20" /> : ""}
      {icon === "counselling" ? <CounsellingComponent className="max-h-20" /> : ""}
      {icon === "legal" ? <LegalComponent className="max-h-20" /> : ""}
      <h3 className="font-teko text-3xl uppercase font-medium py-2">{title}</h3>

      <p className="text-center text-gray-800 font-normal pb-2">{description}</p>
      <div className="flex w-full justify-end mt-auto">
        <form onSubmit={handleSubmit}>

          <BorderlessButton label="Book Service" afterIcon="yes" isSubmit={true} />
        </form>
      </div>
    </div>
  )
}