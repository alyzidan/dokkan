// components/Motion.tsx
"use client";

import { motion } from "framer-motion";
import { ComponentProps } from "react";

type MotionProps = ComponentProps<typeof motion.div>;

export const MotionDiv = (props: MotionProps) => {
  return <motion.div {...props} />;
};
