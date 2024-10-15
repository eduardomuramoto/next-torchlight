"use client";
import { useRouter } from "next/navigation"
import ArrowComponent from "../Icons/arrow"
import MiniLogoComponent from "../Icons/miniLogo"


export default function OrangeButton({label, beforeIcon, afterIcon, className,url='#' }:{ label:string, beforeIcon?: string, afterIcon?:string, className?: string, url?:string}) {
  const router = useRouter()
  return (
    <button 
    className={className+" group flex items-center bg-foreground text-nowrap transition-all duration-150 ease-in-out hover:bg-orange-800 text-white font-semibold hover:text-white py-2 px-8 rounded"}
    onClick={() => router.push(url)}
    >
           {beforeIcon?<MiniLogoComponent className="mr-1" color="orange"/> :""}  
              {label}
            {afterIcon?<ArrowComponent color="stroke-white" className="transition-all duration-150 ease-in-out group-hover:translate-x-1 ml-1"/>:""}
    </button>
  )}