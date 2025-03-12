"use client";

import React from "react";
import { motion } from "framer-motion";

export const SliderDate = () => {
  const year = 1932;
  return (
    <div className="flex flex-col items-center w-full justify-center text-center">
      {/* Line */}
      <div className="relative w-full h-[1px] bg-black mex-auto">
        {/* Animated Dot */}
        <motion.div
          className="absolute w-[10px] h-[10px] bg-black rounded-full top-1/2 -translate-y-1/2"
          initial={{ left: "0%" }}
          animate={{ left: "50%" }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        />
      </div>

      {/* Static Year Display */}
      <motion.p
        className="mt-4 ml-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {year}
      </motion.p>
    </div>
  );
};
