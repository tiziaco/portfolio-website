"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = resolvedTheme === "dark"

  return (
    <div
      onClick={toggleTheme}
      className="relative flex h-8 w-16 cursor-pointer items-center rounded-full bg-gray-200 p-1"
    >
      {/* Sun and Moon icons in background */}
      <div className="absolute left-2">
        <Sun className="h-4 w-4 text-gray-400" />
      </div>
      <div className="absolute right-2">
        <Moon className="h-4 w-4 text-gray-400" />
      </div>

      {/* Toggle circle with icon */}
      <motion.div
        className="absolute flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md"
        animate={{
          x: isDark ? 33 : 1,
        }}
        initial={false}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {isDark ? (
          <Moon className="h-4 w-4 text-gray-700" />
        ) : (
          <Sun className="h-4 w-4 text-amber-500" />
        )}
      </motion.div>
    </div>
  )
}

