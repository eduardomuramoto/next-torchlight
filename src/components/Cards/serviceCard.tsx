import BorderlessButton from "../Buttons/borderlessButton";
import AdvocacyComponent from "../Icons/advocacy";
import CounsellingComponent from "../Icons/counselling";
import LegalComponent from "../Icons/legal";

type ServiceCardProps = {
  title: string,
  description: string,
}

export default function ServiceCard({title, description}:ServiceCardProps) {
  return (
    <div className="flex flex-col items-center max-h-80 max-w-72 py-4 px-6 bg-lightForeground border-[3px] border-background text-background font-semibold rounded-md">
      <AdvocacyComponent/>
      <h3 className="font-teko text-3xl uppercase font-medium py-2">{title}</h3>
     
      <p className="text-center text-gray-800 font-normal pb-2">{description}</p>
      <div className="flex w-full justify-end">
      <BorderlessButton label="View Service" afterIcon="yes"/>
      </div>
    </div>
  )}