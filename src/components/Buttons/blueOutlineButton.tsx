import ArrowComponent from "../Icons/arrow"
import MiniLogoComponent from "../Icons/miniLogo"

export default function BlueOutlineButton({label, beforeIcon, afterIcon }:{ label:string, beforeIcon?: string, afterIcon?:string}) {
  return (
    <button className="group flex items-center justify-center bg-white transition-all duration-150 ease-in-out hover:bg-background border-2 border-background text-background font-semibold hover:text-white py-2 px-4 rounded">
      {beforeIcon?<MiniLogoComponent className="mr-1" color="blue"/> :""}
        {label}
      {afterIcon?<ArrowComponent className="transition-all duration-150 ease-in-out group-hover:translate-x-1 ml-1"/>:""}
    </button>
  )}