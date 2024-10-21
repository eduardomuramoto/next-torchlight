import Image from "next/image"
import icon from "@/../../public/images/icons/exit-icon.png"

export default function ExitButton() {
  return (
    <a href="https://www.google.com">
    <button className="fixed bottom-20 right-0 flex items-center text-nowrap bg-exitRed transition-all duration-150 ease-in-out hover:bg-red-500 text-white font-semibold hover:text-white py-2 px-4 rounded-l-md">
      <Image
                  src={icon}
                  alt="exit icon"
                  className="lazyload pr-1"
                  width={30}
                />Quick Exit
    </button>
    </a>
  )}