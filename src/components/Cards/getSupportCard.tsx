"use client"
import { useRouter } from "next/navigation";
import BorderlessButton from "../Buttons/borderlessButton";
import { SyntheticEvent } from "react";


type GetSupportCardProps = {
  slug: string,
  title: string,
  description: string,
}

export default function GetSupportCard({ slug, title, description }: GetSupportCardProps) {
  const router = useRouter();


  // Handle form submission
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    router.push(`${slug}`);
  };

  return (
    <div className="flex flex-col py-4 px-6 bg-redBackground border-[3px] border-background text-background font-semibold rounded-md">
      <h3 className="font-teko text-3xl uppercase font-medium py-2">{title}</h3>

      <p className="text-gray-800 font-normal pb-6">{description}</p>
      <div className="flex w-full justify-end mt-auto">
        <form onSubmit={handleSubmit}>
          <BorderlessButton label="Learn More" afterIcon="yes" isSubmit={true} />
        </form>
      </div>
    </div>
  )
}