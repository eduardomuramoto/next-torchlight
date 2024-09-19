import SimpleArrowComponent from "../Icons/simpleArrow"

export default function BorderlessButton({label, afterIcon }:{ label:string, afterIcon?:string}) {
  return (
    <button className="group flex items-center justify-center transition-all duration-150 ease-in-out font-semibold hover:font-bold  text-background py-2 pl-4 rounded">
        {label}
      {afterIcon?<SimpleArrowComponent className="transition-all duration-150 ease-in-out group-hover:translate-x-0.5 ml-2"/>:""}
    </button>
  )}