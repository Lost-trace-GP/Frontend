"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import slider2 from "@/assets/images/slider2.png"; // Adjust path accordingly
import eyes from "@/assets/images/eyes.png"; // Adjust path accordingly

export default function EyeTrackingImage() {
  const [eyePosition, setEyePosition] = useState({ x: "80%", y: "60%" }); // Default position
  const [, setHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100; // Convert to percentage
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setEyePosition({ x: `${x}%`, y: `${y}%` });
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setEyePosition({ x: "80%", y: "60%" }); // Return to default position
    setHovering(false);
  };

  return (
    <div
      className="relative col-sm-7 h-[600px] overflow-hidden rounded-3xl hidden sm:block"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Image */}
      <Image
        src={slider2}
        alt="Main Image"
        className="w-full h-full object-cover rounded-3xl"
      />

      {/* Eyes (Track Mouse + Stay in Place) */}
      <motion.div
        animate={{ left: eyePosition.x, top: eyePosition.y }}
        transition={{ duration: 0.3 }}
        className="absolute w-20 h-10 -translate-x-1/2 -translate-y-1/2"
      >
        <Image src={eyes} alt="Eyes" width={80} height={40} />
      </motion.div>
    </div>
  );
}
