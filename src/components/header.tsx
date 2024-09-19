import Image from "next/image";
import logo from "@/../public/images/Logo_Horizontal.png"

export default function Header() {
  return (
    <header className="bg-foreground text-center text-surface/75 text-white/75 lg:text-left sticky top-0 z-10">
      <div className="px-20">
        <ul className="flex justify-between">
          <li>000</li>
          <li>1800 End Abuse</li>
          <li>1800 363 228</li>
        </ul>
        </div>
      <div className="bg-white px-20 text-center text-surface/75 text-white/75 lg:text-left">
        <Image
                  src={logo}
                  alt="Logo Torchlight Foundation"
                  className="lazyload pb-2 pr-1"
                  width={100}
                />
                <nav>
                  <ul className="flex justify-between">
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                  </ul>
                </nav>
      </div>
      
      </header>
  );
}
