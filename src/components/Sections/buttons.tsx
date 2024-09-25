import BlueButton from "../Buttons/blueButton";
import BlueOutlineButton from "../Buttons/blueOutlineButton";
import OrangeButton from "../Buttons/orangeButton";
import OutlineButton from "../Buttons/outlineButton";


export default function ButtonsTestSection() {
  return (
    <div className="bg-lightBackground w-full p-10 flex gap-2">
          <h2>Buttons</h2>
          <BlueButton label="Button"/>
          <OrangeButton/>
          <BlueOutlineButton label="Arrow Button" afterIcon="yes"/>
          <BlueOutlineButton label="Arrow Button" beforeIcon="yes"/>
          <OutlineButton label="Button"/>
        </div>
  )}