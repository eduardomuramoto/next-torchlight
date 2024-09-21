"use client";
import Image from "next/image";
import logo from "@/../public/images/Logo_Horizontal.png"
import OutlineButton from "./Buttons/outlineButton";
import PhoneOutlineComponent from "./Icons/phone-outline";
import PhoneComponent from "./Icons/phone";
import { gql, useQuery } from '@apollo/client';





// export async function getStaticProps() {
//   const res = await fetch('http://localhost:1337/api/menus/1?nested&populate=*',{
//     method: "GET",
//     headers: {
//       "X-Auth-Token": "ef72570ff371408f9668e414353b7b2e",
//       "Content-Type": "application/json"
//     }});
//   const mainMenu = await res.json();
//   console.log(mainMenu);
//   return { props: { mainMenu } };
// }

// getStaticProps();
// console.log(props);

export default function Header() {
  const GET_MENU = gql`
  query GetMenu {
    menus {
      id
    }
  }
`;
  const { data, loading, error } = useQuery(GET_MENU, { 
    variables: { id: 1 }
  });
  console.log(data);
  return (
    <header className="bg-foreground text-center text-surface/75 text-white/75 lg:text-left sticky top-0 z-10">
      <div className="px-20">
        <ul className="flex justify-between">
          <li className="flex items-center py-1"><PhoneOutlineComponent/>000</li>
          <li className="flex items-center py-1"><PhoneComponent/>1800 End Abuse</li>
          <li className="flex items-center py-1"><PhoneComponent/>1800 363 228</li>
        </ul>
        </div>
      <div className="flex justify-between items-center bg-white py-2 px-20 text-center text-surface/75 text-white/75 lg:text-left">
        <Image
                  src={logo}
                  alt="Logo Torchlight Foundation"
                  className="lazyload pb-2 pr-1"
                  width={150}
                />
                <nav className="w-3/5 px-20 flex items-center">
                  <ul className="w-full flex justify-between items-center text-background font-semibold">
                    <li className="cursor-pointer group relative">About Us
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-background transition-all group-hover:w-full"></span>
                    </li>
                    <li className="cursor-pointer group relative">Get Support
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-background transition-all group-hover:w-full"></span>
                    </li>
                    <li className="cursor-pointer group relative">Our Projects
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-background transition-all group-hover:w-full"></span>
                    </li>
                    <li className="cursor-pointer group relative">Get Involved
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-background transition-all group-hover:w-full"></span>
                    </li>
                  </ul>
                </nav>
                <OutlineButton label="Donate Now" beforeIcon="yes"/>
      </div>
      
      </header>
  );
}
