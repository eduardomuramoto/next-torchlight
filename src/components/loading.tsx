"use client";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.svg
        width="40"
        height="59"
        viewBox="0 0 40 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ strokeDashoffset: 200, fillOpacity: 0 }} // Initial state: path hidden and invisible fill
        animate={{
          strokeDashoffset: [200, 0, 0, 0, 200], // Draw, then erase the stroke
          fillOpacity: [0, 0, 1, 1, 0], // Fade in, then fade out the fill
        }}
        transition={{
          strokeDashoffset: {
            duration: 3, // Duration for stroke drawing
            ease: "easeInOut",
            repeat: Infinity, // Repeat infinitely
            repeatType: "mirror",
          },
          fillOpacity: {
            duration: 3, // Duration for fade-in and fade-out
            ease: "easeInOut",
            repeat: Infinity, // Repeat infinitely
            repeatType: "reverse",
          },
        }}
      >
        <path
          d="M3.06197 39.7436C3.22397 39.9765 3.45796 40.1826 3.45796 40.1826H3.51197C3.51197 40.1826 3.45796 38.8656 3.61996 38.0951C4.04296 36.0613 4.56497 35.5506 5.27597 34.3411C7.01297 31.4024 11.612 29.3059 13.691 28.858C16.589 28.2398 21.737 27.4603 24.275 26.5913C32.123 23.9214 39.566 19.1281 39.818 9.40726C39.89 6.53131 39.755 0.851087 39.728 0.0447462C39.728 0.0268275 39.557 -0.00900987 39.548 -5.05364e-05C39.413 0.564388 39.053 3.70016 35.579 6.71049C33.428 8.583 30.098 10.7332 24.932 11.7904C22.493 12.2922 14.546 13.5733 14.537 13.5733C14.321 13.6271 10.127 14.4514 7.84997 15.8669C5.27597 17.4707 2.41396 19.9793 0.802964 25.0144C-0.160036 28.0337 -0.160034 32.1102 1.44197 36.2226C2.01797 37.6919 2.37796 38.8028 3.05296 39.7436H3.06197Z"
          fill="url(#paint0_linear_1360_615)"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="200"
        />
        <path
          d="M8.69602 47.8879C8.69602 47.8879 9.33503 46.6067 10.307 45.648C11.279 44.6894 12.881 43.7307 13.844 43.4082C14.807 43.0857 16.706 42.6466 17.705 42.4495C18.425 42.3062 19.127 42.3062 19.793 42.3062C20.117 42.3062 20.135 42.1808 20.387 42.1449C25.877 41.4282 33.842 36.5274 34.697 30.1842C35.003 27.9444 34.859 22.8823 34.859 22.5777C34.859 22.5688 34.841 22.5598 34.841 22.5777C34.706 22.9451 33.23 28.1594 25.868 30.0767C24.347 30.4709 21.899 30.9816 19.298 31.2504C16.697 31.5191 14.861 31.7879 12.35 32.7914C9.83903 33.7948 7.14803 36.3841 5.92403 40.586C4.52903 45.3613 7.87702 50.9967 7.87702 50.9967L8.70503 47.8879H8.69602Z"
          fill="url(#paint1_linear_1360_615)"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="200"
        />
        <path
          d="M14.9237 58.9347C15.0227 59.0063 15.1127 58.8272 15.0047 58.5494C14.3657 56.9995 13.8887 53.577 14.3387 50.9788C15.3827 44.9402 20.1077 42.3151 20.3777 42.1628C20.3957 42.1538 20.3867 42.127 20.3777 42.127C20.0807 42.1449 12.0797 42.3061 9.19074 46.7858C8.02074 48.5956 7.88574 50.9967 7.88574 50.9967C7.88574 50.9967 8.17374 51.7045 8.81274 52.6631C9.45174 53.6218 10.7927 55.1001 11.4317 55.7451C13.0427 57.3489 14.9147 58.9167 14.9237 58.9257V58.9347Z"
          fill="url(#paint2_linear_1360_615)"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="200"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1360_615"
            x1="0.154965"
            y1="20.0957"
            x2="39.845"
            y2="20.0957"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF0161" />
            <stop offset="0.27" stop-color="#FB0060" />
            <stop offset="0.48" stop-color="#F20060" />
            <stop offset="0.67" stop-color="#E1005F" />
            <stop offset="0.85" stop-color="#CB005D" />
            <stop offset="1" stop-color="#B0005C" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1360_615"
            x1="5.57303"
            y1="36.7872"
            x2="34.895"
            y2="36.7872"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF7F13" />
            <stop offset="0.22" stop-color="#FE7517" />
            <stop offset="0.59" stop-color="#FD5B22" />
            <stop offset="1" stop-color="#FC3733" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1360_615"
            x1="7.95774"
            y1="51.6866"
            x2="21.3569"
            y2="50.0323"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15F00" />
            <stop offset="0.76" stop-color="#D93A21" />
            <stop offset="1" stop-color="#D12E2D" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
};

export default Loading
