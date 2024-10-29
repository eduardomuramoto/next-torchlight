import SimpleArrowComponent from "../Icons/simpleArrow"

export default function BorderlessButton({label, afterIcon, isSubmit=false }:{ label:string, afterIcon?:string, isSubmit?:boolean}) {
  return (
    <button 
    type={isSubmit?"submit":"button"}
    className="group flex items-center text-nowrap justify-center transition-all duration-150 ease-in-out font-semibold hover:font-bold  text-background py-2 pl-4 rounded">
        <span className="relative">
          {label}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-background transition-all group-hover:w-full"></span>
        </span>
      {afterIcon?<SimpleArrowComponent className="transition-all duration-150 ease-in-out group-hover:translate-x-0.5 ml-2"/>:""}
    </button>
  )}