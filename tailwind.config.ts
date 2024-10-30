import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          50: "#f5eff1",
          100: "#ecdfe2",
          200: "#d9bfc6",
          300: "#c69fa9",
          400: "#b3808c",
          500: "#9f6070",
          600: "#804d59",
          700: "#603943",
          800: "#40262d",
          900: "#201316",
          950: "#100a0b",
        },
        background: {
          DEFAULT: "hsl(var(--background))",
          50: "#faebee",
          100: "#f5d6dd",
          200: "#ebadbb",
          300: "#e08598",
          400: "#d65c76",
          500: "#cc3354",
          600: "#a32943",
          700: "#7a1f32",
          800: "#521422",
          900: "#290a11",
          950: "#140508",
        },
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "#ffe5ea",
          100: "#ffccd5",
          200: "#ff99ac",
          300: "#ff6682",
          400: "#ff3358",
          500: "#ff002f",
          600: "#cc0025",
          700: "#99001c",
          800: "#660013",
          900: "#330009",
          950: "#1a0005",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          50: "#f9ebee",
          100: "#f3d8dd",
          200: "#e8b0bb",
          300: "#dc8998",
          400: "#d06276",
          500: "#c43b54",
          600: "#9d2f43",
          700: "#762332",
          800: "#4f1722",
          900: "#270c11",
          950: "#140608",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          50: "#faebee",
          100: "#f4d7dc",
          200: "#e9afba",
          300: "#de8797",
          400: "#d35f74",
          500: "#c83751",
          600: "#a02c41",
          700: "#782131",
          800: "#501621",
          900: "#280b10",
          950: "#140508",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        heading: [
          '"Inter"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        body: [
          '"Inter"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      fontSize: {
        "3xs": "0.25rem",
        "2xs": "0.5rem",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
