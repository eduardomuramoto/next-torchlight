import ArrowComponent from "../Icons/arrow"
import MiniLogoComponent from "../Icons/miniLogo"

export default function BlueButton({label, beforeIcon, afterIcon, className }:{ label:string, beforeIcon?: string, afterIcon?:string, className?: string}) {
  return (
    <button className={className+" group flex items-center bg-background text-nowrap transition-all duration-150 ease-in-out hover:bg-blue-800 text-white font-semibold hover:text-white py-2 px-8 rounded"}>
           {beforeIcon?<MiniLogoComponent className="mr-1" color="blue"/> :""}  
              {label}
            {afterIcon?<ArrowComponent color="stroke-white" className="transition-all duration-150 ease-in-out group-hover:translate-x-1 ml-1"/>:""}
    </button>
  )}