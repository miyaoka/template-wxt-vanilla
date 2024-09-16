/** @type {import('tailwindcss').Config} */
import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";

export default {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["mdi"]),
    }),
  ],
};
