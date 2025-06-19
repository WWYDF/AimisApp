"use client"

import { cn } from "@/core/utils/clsx"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface LiftedButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: "accent" | "primary" | "secondary" | "success" | "danger" | "warning" | "info"
  size?: "sm" | "md" | "lg" | "xl"
  strokeWidth?: number
  disabled?: boolean
  className?: string
  shadowColor?: string
  shadowOffset?: number
}

const variantStyles = {
  accent: {
    bg: "bg-accent/70",
    hover: "hover:bg-accent-muted",
    text: "text-white",
    shadow: "bg-pink-900",
  },
  primary: {
    bg: "bg-blue-500",
    hover: "hover:bg-blue-600",
    text: "text-white",
    shadow: "bg-blue-700",
  },
  secondary: {
    bg: "bg-zinc-500",
    hover: "hover:bg-zinc-600",
    text: "text-white",
    shadow: "bg-zinc-700",
  },
  success: {
    bg: "bg-green-500",
    hover: "hover:bg-green-600",
    text: "text-white",
    shadow: "bg-green-700",
  },
  danger: {
    bg: "bg-red-500",
    hover: "hover:bg-red-600",
    text: "text-white",
    shadow: "bg-red-700",
  },
  warning: {
    bg: "bg-yellow-500",
    hover: "hover:bg-yellow-600",
    text: "text-white",
    shadow: "bg-yellow-700",
  },
  info: {
    bg: "bg-cyan-500",
    hover: "hover:bg-cyan-600",
    text: "text-white",
    shadow: "bg-cyan-700",
  },
}

const sizeStyles = {
  sm: {
    padding: "px-3 py-1.5",
    text: "text-sm",
    rounded: "rounded-md",
  },
  md: {
    padding: "px-4 py-2",
    text: "text-base",
    rounded: "rounded-lg",
  },
  lg: {
    padding: "px-6 py-3",
    text: "text-lg",
    rounded: "rounded-lg",
  },
  xl: {
    padding: "px-8 py-4",
    text: "text-xl",
    rounded: "rounded-xl",
  },
}

export default function LiftedButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  strokeWidth = 2,
  disabled = false,
  className,
  shadowColor,
  shadowOffset = 4,
  ...props
}: LiftedButtonProps) {
  const variantStyle = variantStyles[variant]
  const sizeStyle = sizeStyles[size]

  const customShadowColor = shadowColor || variantStyle.shadow

  return (
    <div className="relative inline-block">
      {/* Shadow/Base Layer */}
      <motion.div
        className={cn("absolute inset-0 rounded-lg", customShadowColor, sizeStyle.rounded)}
        style={{
          transform: `translate(0px, ${shadowOffset}px)`,
        }}
        animate={{
          transform: `translate(0px, ${shadowOffset}px)`,
        }}
      />

      {/* Main Button */}
      <motion.button
        className={cn(
          "relative font-semibold transition-colors cursor-pointer duration-200",
          variantStyle.bg,
          variantStyle.hover,
          variantStyle.text,
          sizeStyle.padding,
          sizeStyle.text,
          sizeStyle.rounded,
          disabled && "opacity-50 cursor-not-allowed",
          className,
        )}
        onClick={onClick}
        disabled={disabled}
        whileTap={{
          // scale: 0.98,
          y: shadowOffset * 0.7,
        }}
        // whileHover={{
        //   scale: 1.02,
        // }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20,
          duration: 0.1
        }}
        {...props}
      >
        {children}
      </motion.button>
    </div>
  )
}
