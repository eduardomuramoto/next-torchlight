"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/Cards/projectCard";
import CafePhoto from "@images/CAFE_Project.jpg";
import DandelionPhoto from "@images/Dandelion_Project.jpg";

export default function ProjectsHeader() {

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-lightForeground w-full flex flex-wrap lg:flex-nowrap gap-10 lg:gap-20 p-16 px-6 lg:px-36">
      <div className="w-full mx-auto">
        <div className="w-full items-center flex flex-col mx-auto">

          {/* Animated Title */}
          <motion.h1
            className="font-teko text-6xl text-center uppercase font-semibold pb-6 text-background lg:w-2/3"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Our Projects
          </motion.h1>

          {/* Animated Description */}
          <motion.p
            className="text-gray-900 text-center lg:w-2/3"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Torchlight Foundation is actively involved in raising awareness, providing support, and advocating for systemic changes to combat domestic violence. Through our various projects, including the CAFE Project, The Dandelion Project and Justice Radio, we aim to make a tangible impact on the lives of those affected.
          </motion.p>

          <div className="gap-8 mt-6">

            {/* Animated Project Cards */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <ProjectCard
                imageUrl={CafePhoto}
                title="The CAFE Project"
                description="The CAFE Project creates a welcoming space for individuals to connect, share stories, and find support, mirroring the warmth and comfort of a cafe. It fosters meaningful conversations that contribute to a community where everyone feels heard and empowered."
              />
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              <ProjectCard
                imageUrl={DandelionPhoto}
                title="The Dandelion Project"
                description="The Dandelion Project, with its tender care, nurtures the resilience of children affected by domestic violence, aiming to cultivate a future free from the shadows of abuse. We support and help kids to rebuild themselves and their lives."
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>



  );
}
