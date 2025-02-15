"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import Image from "next/image";
import logo from "@/../public/images/Logo_Horizontal.png";
import PhoneOutlineComponent from "./Icons/phone-outline";
import PhoneComponent from "./Icons/phone";
import { gql } from "@apollo/client";
import Link from "next/link";
import DonateButton from "./Buttons/donateButton";
import { MenuItem } from "@/interfaces/menu.interface";
import client from "@/lib/ApolloClient";

export default function Header() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        if (!client) return;
        const result = await client.query({
          query: gql`
            query Menu {
              menusMenu(id: 1) {
                data {
                  id
                  attributes {
                    items {
                      data {
                        attributes {
                          title
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          `,
        });
        setMenuItems(result.data.menusMenu.data.attributes.items.data.map((item: { attributes: MenuItem }) => item.attributes));
        setLoading(result.loading);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenu();
  }, []);

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  if (isLoading) return <p>Loading...</p>;
  if (!menuItems) return <p>Loading...</p>;

  return (
    <header className="bg-foreground shadow-md text-center text-surface/75 text-white/75 lg:text-left sticky top-0 z-20">
      <div className="px-4 lg:px-20">
        <ul className="flex justify-between">
          <a href="tel:+000">
            <li className="flex items-center py-1">
              <PhoneOutlineComponent />
              000
            </li>
          </a>
          <a href="tel:+1800363228">
            <li className="flex items-center py-1">
              <PhoneComponent />
              1800 End Abuse
            </li>
          </a>
          <a href="tel:+1800363228">
            <li className="flex items-center py-1">
              <PhoneComponent />
              1800 363 228
            </li>
          </a>
        </ul>
      </div>
      <div id="main-menu" className="flex justify-between items-center bg-white py-2 p-4 lg:px-20 text-center text-surface/75 text-white/75 lg:text-left">
        <Link href="/" className="w-[90px] lg:w-fit">
          <Image src={logo} alt="Logo Torchlight Foundation" className="lazyload pb-2 pr-1" width={150} />
        </Link>

        {/* Navigation Menu */}
        <nav className={`${menuOpen ? "fixed top-0 left-0 w-full h-full bg-white flex flex-col justify-center items-center" : "hidden"} lg:flex w-full p-4 lg:px-20 lg:w-3/5 flex-col lg:flex-row items-center`}>
          <ul className="w-full lg:flex justify-between items-center text-background font-semibold">
            <AnimatePresence>
              {menuItems.map((menuItem, index) => (
                <Link href={menuItem.url} key={menuItem.url}>
                  <motion.li
                    className="cursor-pointer group relative py-2 lg:py-0 w-fit m-auto"
                    onClick={handleMenuItemClick}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }} // Staggered fade-in
                  >
                    {menuItem.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-background transition-all group-hover:w-full"></span>
                  </motion.li>
                </Link>
              ))}
            </AnimatePresence>
          </ul>
        </nav>
        <a href="https://www.torchlight.org.au/donation" target="_blank">
          <DonateButton label="Donate Now" beforeIcon="yes" />
        </a>

        {/* Burger Menu Button */}
        <button
          className="lg:hidden block focus:outline-none z-10"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <div className="flex flex-col justify-between">
              <span className="block w-8 h-0.5 bg-background origin-center rotate-[42deg] translate-y-[2px]"></span>
              <span className="block w-8 h-0.5 bg-background origin-center -rotate-[42deg]"></span>
            </div>
          ) : (
            <div className="space-y-2">
              <span className="block w-8 h-0.5 bg-background"></span>
              <span className="block w-8 h-0.5 bg-background"></span>
              <span className="block w-8 h-0.5 bg-background"></span>
            </div>
          )}
        </button>
      </div>
    </header>
  );
}
