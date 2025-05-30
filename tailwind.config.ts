import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      extend: {
          colors: {
              background: 'hsl(var(--background))',
              foreground: 'hsl(var(--foreground))',
              card: {
                  DEFAULT: 'rgb(var(--card))',
                  foreground: 'hsl(var(--card-foreground))',
              },
              popover: {
                  DEFAULT: 'hsl(var(--popover))',
                  foreground: 'hsl(var(--popover-foreground))'
              },
              primary: {
                  DEFAULT: 'var(--primary)',
                  foreground: 'hsl(var(--primary-foreground))'
              },
              secondary: {
                  DEFAULT: 'hsl(var(--secondary))',
                  foreground: 'hsl(var(--secondary-foreground))'
              },
              muted: {
                  DEFAULT: 'hsl(var(--muted))',
                  foreground: 'hsl(var(--muted-foreground))'
              },
              accent: {
                  DEFAULT: 'var(--accent)',
                  foreground: 'var(--accent-foreground)'
              },
              destructive: {
                  DEFAULT: 'hsl(var(--destructive))',
                  foreground: 'hsl(var(--destructive-foreground))'
              },
              border: 'hsl(var(--border))',
              input: 'hsl(var(--input))',
              ring: 'hsl(var(--ring))',
              chart: {
                  '1': 'hsl(var(--chart-1))',
                  '2': 'hsl(var(--chart-2))',
                  '3': 'hsl(var(--chart-3))',
                  '4': 'hsl(var(--chart-4))',
                  '5': 'hsl(var(--chart-5))'
              },
              'glassmorphism-shadow': 'rgb(var(--glassmorphism-shadow))',
          },
          textShadow: {
              'neon-sm': '0 0 5px currentColor',
              'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
              'neon-lg': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor',
              'neon-xl': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor, 0 0 35px currentColor',
              'neon-2xl': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor, 0 0 35px currentColor, 0 0 40px currentColor',
          },
          filter: {
              'neon': 'brightness(1.2) contrast(1.3)',
          },
          borderRadius: {
              lg: 'var(--radius)',
              md: 'calc(var(--radius) - 2px)',
              sm: 'calc(var(--radius) - 4px)'
          },
          keyframes: {
              'accordion-down': {
                  from: {
                      height: '0'
                  },
                  to: {
                      height: 'var(--radix-accordion-content-height)'
                  }
              },
              'accordion-up': {
                  from: {
                      height: 'var(--radix-accordion-content-height)'
                  },
                  to: {
                      height: '0'
                  }
              },
              'neon-pulse': {
                  '0%, 100%': {
                      textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor',
                  },
                  '50%': {
                      textShadow: '0 0 2px currentColor, 0 0 5px currentColor, 0 0 8px currentColor, 0 0 12px currentColor, 0 0 25px currentColor, 0 0 35px currentColor',
                  }
              }
          },
          animation: {
              'accordion-down': 'accordion-down 0.2s ease-out',
              'accordion-up': 'accordion-up 0.2s ease-out',
              'neon-pulse': 'neon-pulse 2s ease-in-out infinite alternate',
          }
      }
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities }: any) {
      const newUtilities = {
        '.text-shadow-neon-sm': {
          textShadow: '0 0 5px currentColor',
          overflow: 'visible',
          display: 'inline-block',
        },
        '.text-shadow-neon': {
          textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
          overflow: 'visible',
          display: 'inline-block',
        },
        '.text-shadow-neon-lg': {
          textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor',
          overflow: 'visible',
          display: 'inline-block',
        },
        '.text-shadow-neon-xl': {
          textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor, 0 0 35px currentColor',
          overflow: 'visible',
          display: 'inline-block',
        },
        '.text-shadow-neon-2xl': {
          textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor, 0 0 35px currentColor, 0 0 40px currentColor',
          overflow: 'visible',
          display: 'inline-block',
        },
        '.filter-neon': {
          filter: 'brightness(1.2) contrast(1.3)',
          overflow: 'visible',
        },
        '.neon-glow': {
          textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor, 0 0 35px currentColor',
          filter: 'brightness(1.2) contrast(1.3)',
          overflow: 'visible',
          display: 'inline-block',
        },
        '.neon-glow-intense': {
          textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor, 0 0 35px currentColor, 0 0 40px currentColor',
          filter: 'brightness(1.3) contrast(1.4)',
          overflow: 'visible',
          display: 'inline-block',
        }
      }
      
      addUtilities(newUtilities)
    }
  ],
} satisfies Config;
