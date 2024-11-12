"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import photo from "@/../../public/images/Lisa.png";
import Bg from "@images/section_bg.svg";
import Link from "next/link";
import BlueButton from "../Buttons/blueButton";

export default function HomeJumboHeader() {
  // Define animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="w-full bg-gradient-to-l from-orange-50 via-orange-50 to-orange-200 grid md:grid-cols-5 gap-20 p-16 px-6 lg:px-36 pb-0 relative">

      <Image
        src={Bg}
        alt="Background"
        className="lazyload absolute w-full max-h-1/2 bottom-0 left-0"
        width={300}
      />

      {/* Animated Text Section */}
      <motion.div
        className="z-10 col-span-3 pb-20"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
      >
        <motion.h1
          className="text-2xl pb-6 font-semibold"
          variants={fadeInUp}
        >
          Welcome to Torchlight Foundation
        </motion.h1>
        <motion.p
          className="font-teko text-6xl text-background uppercase font-semibold pb-6"
          variants={fadeInUp}
        >
          We’re with you<br />every step of the way…
        </motion.p>
        <motion.p className="text-gray-800 pb-4" variants={fadeInUp}>
          We are a nonprofit organization providing support to victims of
          domestic violence. We are also dedicated to empowering communities
          through education, services and resources for those who may be
          experiencing a family crisis.
        </motion.p>

        <Link href="/about-us">
          <motion.div variants={fadeInUp}>
            <BlueButton label="About Us" afterIcon="yes" url="/about-us" />
          </motion.div>
        </Link>
      </motion.div>

      {/* Animated Image and Text Block */}
      <motion.div
        className="z-10 col-span-2 flex items-end"
        initial="hidden"
        animate="visible"
        variants={fadeInLeft}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src={photo}
          alt="Lisa Cotton photo"
          className="lazyload aspect-auto max-w-[70%] lg:max-w-full object-contain"
          width={1200}
        />
        <motion.div className="flex-col pb-4" variants={fadeInUp}>
          <p className="text-gray-800 text-xs text-nowrap">Lisa Cotton</p>
          <p className="text-background text-xs text-nowrap">CEO & Founder</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
