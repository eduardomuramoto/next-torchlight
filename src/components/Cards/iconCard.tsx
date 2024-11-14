"use client"
import Image, { StaticImageData } from "next/image";
import iconImage from "@images/icons/course/understand.png"
import { getStaticImage } from "@/lib/getStaticImage";
import { useState, useEffect } from "react";


type IconCardProps = {
  icon: string,
  objective: string,
  folder?: string,
  isBold?: boolean
}

export default function IconCard({ icon, objective, folder = "course", isBold = true }: IconCardProps) {
  const [imageData, setImageData] = useState<StaticImageData | null>(null);
  useEffect(() => {
    async function fetchImage() {
      const img = await getStaticImage(icon, folder);
      setImageData(img);
    }
    fetchImage();
  }, [icon, folder]);

  return (
    <div className="flex flex-col items-center max-h-80 max-w-72 py-4 px-6 text-background font-semibold rounded-md">
      <Image
        src={imageData ? imageData : iconImage}
        alt="icon image"
        className="lazyload w-[100px]"
        height={300}
        width={300}
      />

      <p className={isBold ? "font-bold text-background " : "text-gray-800 " + "text-center font-normal pb-2"}>{objective}</p>
    </div>
  )
}