import ArrowComponent from "../Icons/arrow"
import MiniLogoComponent from "../Icons/miniLogo"

export default function DonateButton({label, beforeIcon, afterIcon }:{ label:string, beforeIcon?: string, afterIcon?:string}) {
  return (
    <button className="group max-h-14 flex font-teko lg:text-2xl text-lg uppercase text-nowrap items-center justify-center bg-white transition-all duration-150 ease-in-out hover:bg-foreground border-2 border-foreground text-foreground font-semibold hover:text-white py-4 px-2 lg:px-8 rounded">
      {beforeIcon?<MiniLogoComponent className="mr-1" color="blue"/> :""}
        {label}
      {afterIcon?<ArrowComponent className="transition-all duration-150 ease-in-out group-hover:translate-x-1 ml-1"/>:""}
    </button>
  )}