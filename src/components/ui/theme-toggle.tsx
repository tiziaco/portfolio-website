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
      className={`relative flex h-6 w-12 cursor-pointer items-center rounded-full p-1 transition-colors ${
        isDark ? 'dark:bg-gray-700' : 'bg-gray-200'
      }`}
    >
      {/* Sun and Moon icons in background */}
      <div className="absolute left-1.5">
        <Sun className="h-3.5 w-3.5 text-gray-400" />
      </div>
      <div className="absolute right-1.5">
        <Moon className="h-3.5 w-3.5 text-gray-400" />
      </div>

      {/* Toggle circle with icon */}
      <motion.div
        className="absolute flex h-4 w-4 items-center justify-center rounded-full bg-white shadow-md"
        animate={{
          x: isDark ? 24 : 1,
        }}
        initial={false}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-purple-500" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-amber-400" />
        )}
      </motion.div>
    </div>
  )
}

