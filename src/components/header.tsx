import Image from "next/image";
import logo from "@/../public/images/Logo_Horizontal.png"
import OutlineButton from "./Buttons/outlineButton";
import PhoneOutlineComponent from "./Icons/phone-outline";
import PhoneComponent from "./Icons/phone";

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: `${process.env.CMS_GRAPHQL}`,
  cache: new InMemoryCache(),
});
let menuArr: [];
client
  .query({
    query: gql`query Menu {
      menusMenu(id: 1) {
  data {
    id
    attributes {
     items{
      data{
        attributes{
          title
          url
        }
      }
    }
    }
  }
}
    }`,
  })
  .then((result) => {menuArr = result.data.menusMenu.data.attributes.items.data});


export default function Header() {
  return (
    <header className="bg-foreground shadow-md text-center text-surface/75 text-white/75 lg:text-left sticky top-0 z-10">
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
                    {menuArr?.map((menuItem)=>{
                      return(<li className="cursor-pointer group relative" key={menuItem.attributes.url}>{menuItem.attributes.title}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-background transition-all group-hover:w-full"></span>
                      </li>)
                    })}
                  </ul>
                </nav>
                <OutlineButton label="Donate Now" beforeIcon="yes"/>
      </div>
      
      </header>
  );
}
