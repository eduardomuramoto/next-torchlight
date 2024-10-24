import Image, { StaticImageData } from "next/image"

type ProjectCardProps = {
  imageUrl: StaticImageData,
  title: string,
  description: string,
}

export default function ProjectCard({imageUrl,title, description}:ProjectCardProps) {
  return (
    <div className="flex flex-col items-center w-full lg:w-1/2 lg:float-start py-4 px-6 text-background font-semibold rounded-md">
       <Image
                  src={imageUrl}
                  alt="Project photo"
                  className="lazyload rounded-lg"
                  width={1200}
                />
      <p className="mt-4 font-teko uppercase text-3xl">{title}</p>
     
      <p className="text-center text-gray-800 font-normal pb-2">{description}</p>
    </div>
  )}