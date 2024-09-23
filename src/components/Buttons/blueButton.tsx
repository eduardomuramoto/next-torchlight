import Image from "next/image"

export default function BlueButton({label, beforeIcon, afterIcon }:{ label:string, beforeIcon?: string, afterIcon?:string}) {
  return (
    <button className="flex items-center bg-background text-nowrap transition-all duration-150 ease-in-out hover:bg-blue-800 text-white font-semibold hover:text-white py-2 px-4 rounded">
      {beforeIcon?<Image src={beforeIcon}
                  alt="Logo Torchlight Foundation"
                  className="lazyload pb-2 pr-1"
                  width={50}/> :""}
                  {label}
                  {afterIcon?<Image src={afterIcon}
                  alt="Logo Torchlight Foundation"
                  className="lazyload pb-2 pr-1"
                  width={50}/>:""}
    </button>
  )}