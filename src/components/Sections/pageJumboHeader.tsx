"use client"
import Image, { StaticImageData } from "next/image";
import photo from "@/../../public/images/Get_Support.jpg";
import BlueButton from "../Buttons/blueButton";
import { motion } from "framer-motion";

export default function JumboHeader({
  title,
  subTitle,
  paragraphs,
  imgUrl,
  style = "orange",
  idName,
  button,
  alignTop = true,
  reverse = false,
  blueTitle = false,
  bgWhite = false,
}: {
  title: string;
  subTitle?: string;
  paragraphs: string[];
  imgUrl?: StaticImageData;
  style?: string;
  idName?: string;
  button?: { url: string; label: string };
  alignTop?: boolean;
  reverse?: boolean;
  blueTitle?: boolean;
  bgWhite?: boolean;
}) {
  const bgColor = style === "orange" ? (bgWhite ? "bg-white" : "bg-lightForeground") : "bg-redBackground";
  const titleColor = style === "orange" ? (blueTitle ? "text-background" : "text-foreground") : "text-background";
  const marginTop = alignTop ? "" : "mt-auto";

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
    <div
      id={idName ? idName : ""}
      className={
        (reverse ? "flex-row-reverse " : "") +
        bgColor +
        " w-full flex flex-wrap lg:flex-nowrap gap-10 lg:gap-20 p-16 px-6 lg:px-36"
      }
    >
      {/* Animated Image */}
      <motion.div
        className="w-full lg:w-1/2 h-1/3"
        initial="hidden"
        animate="visible"
        variants={fadeInLeft}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src={imgUrl ? imgUrl : photo}
          alt="Get Support photo"
          className="lazyload rounded-lg overflow-hidden"
          width={1200}
        />
      </motion.div>

      {/* Animated Text */}
      <motion.div
        className={marginTop + " w-full lg:w-1/2"}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.15 }}
      >
        {subTitle && (
          <motion.p
            className="text-background text-2xl pb-6 font-semibold"
            variants={fadeInUp}
          >
            {subTitle}
          </motion.p>
        )}
        <motion.h1
          className={titleColor + " font-teko text-6xl uppercase font-semibold pb-6"}
          variants={fadeInUp}
        >
          {title}
        </motion.h1>
        {paragraphs &&
          paragraphs.map((paragraph) => (
            <motion.p
              className="text-gray-800 pb-4"
              key={paragraph}
              variants={fadeInUp}
            >
              {paragraph}
            </motion.p>
          ))}
        {button && (
          <motion.div variants={fadeInUp}>
            <BlueButton label={button.label} url={button.url} />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
