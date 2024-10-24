"use client";
import { useRouter } from "next/navigation"
import ArrowComponent from "../Icons/arrow"
import MiniLogoComponent from "../Icons/miniLogo"

export default function BlueOutlineButton({label, beforeIcon, afterIcon , url="#",isSubmit=false}:{ label:string, beforeIcon?: string, afterIcon?:string, url?:string, isSubmit?:boolean}) {
  const router = useRouter()
  return (
    <button 
    type={isSubmit?"submit":"button"}
    className="group flex items-center text-nowrap justify-center bg-white transition-all duration-150 ease-in-out hover:bg-background border-2 border-background text-background font-semibold hover:text-white py-2 px-4 rounded"
    onClick={() => isSubmit?null:router.push(url)}
    >
      {beforeIcon?<MiniLogoComponent className="mr-1" color="blue"/> :""}
        {label}
      {afterIcon?<ArrowComponent className="transition-all duration-150 ease-in-out group-hover:translate-x-1 ml-1"/>:""}
    </button>
  )}