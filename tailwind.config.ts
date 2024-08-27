import fluid, {
  extract,
  fontSize,
  screens as _screens,
  type FluidThemeConfig,
} from "fluid-tailwind";
import typography from "@tailwindcss/typography";
const { lg: _, xl: __, "2xl": ___, ...screens } = _screens;

module.exports = {
  darkMode: ["class"],
  content: {
    files: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
    ],
    transform: {
      mdx: (src) =>
        src
          // Ignore classes in code blocks
          .replaceAll(/```.*?```/gs, "")
          // Only return stuff in <component>s
          .match(/<[^/].*?>/g)
          ?.join() ?? "",
    },
    extract,
  },
  corePlugins: {
    container: false,
  },
  theme: {
    fontSize,
    fluid: (({ theme }) => ({
      defaultScreens: [, theme("screens.xl")],
    })) satisfies FluidThemeConfig,
    screens: {
      xs: "20rem",
      ...screens,
    },
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        PT: ["PT Serif", "serif"],
      },
      boxShadow: {
        btn: "9px 9px 20px 1px rgba(0, 0, 0, 0.3), -7px -7px 20px 1px rgba(133, 138, 174, 0.38)",
        innerBtn:
          " inset 9px 9px 20px 1px rgba(0, 0, 0, 0.3), inset -7px -7px 20px 1px rgba(133, 138, 174, 0.38);",
      },
      textShadow: {
        lg: " 0px 8px 8px rgba(0, 0, 0, 0.25);",
      },
      backgroundImage: {
        btn: "linear-gradient(311deg, #3c446b 0%, #4a5176 88.79%)",
        ptBlueLinear: "linear-gradient(94deg, #638DFE 1.15%, #3E64E7 98.41%)",
        ptOrangeLinear: "linear-gradient(93deg, #FF9B8C 1.35%, #EE7E6D 99.08%)",
        btnBlueLinear: "linear-gradient(180deg, #638DFE 0%, #3E64E7 100%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), fluid, typography],
};
