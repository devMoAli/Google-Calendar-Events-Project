const labelColors = [
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple",
  "pink",
  "yellow",
  "orange",
];
module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    //Because we made a dynamic class with the label we need to add those clases
    // to the safe list so the purge does not remove that
    safelist: [
      ...labelColors.map((lbl) => `bg-${lbl}-500`),
      ...labelColors.map((lbl) => `bg-${lbl}-200`),
      ...labelColors.map((lbl) => `text-${lbl}-400`),
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans"],
      },
      colors: {
        indigo: {
          50: "#edf2ff",
          100: "#dbe4ff",
          200: "#bac8ff",
          300: "#9aafeb",
          400: "#7a93e8",
          500: "#667eea",
          600: "#5a67d8",
          700: "#4d4fbb",
          800: "#3f45a6",
          900: "#353e93",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        green: {
          500: "#10b981",
        },
        blue: {
          500: "#3b82f6",
        },
        red: {
          500: "#ef4444",
        },
        purple: {
          500: "#8b5cf6",
        },
        pink: {
          500: "#e897c6",
        },
        yellow: {
          500: "#edd353",
        },
        orange: {
          500: "#eda853",
        },
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
