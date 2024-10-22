import BorderlessButton from "../Buttons/borderlessButton";
import AdvocacyComponent from "../Icons/advocacy";
import CounsellingComponent from "../Icons/counselling";
import LegalComponent from "../Icons/legal";

type ObjectiveCardProps = {
  icon: string,
  objective: string,
}

export default function ObjectiveCard({icon, objective}:ObjectiveCardProps) {
  return (
    <div className="flex flex-col items-center max-h-80 max-w-72 py-4 px-6 text-background font-semibold rounded-md">
      <p>{icon}</p>
     
      <p className="text-center text-gray-800 font-normal pb-2">{objective}</p>
    </div>
  )}