// tailwind.config.ts
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>> {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                green: {
                    DEFAULT: "#00C16A",
                    50: "#EFFDF5",
                    100: "#D9FBE8",
                    200: "#B3F5D1",
                    300: "#75EDAE",
                    400: "#3DE5A7",
                    500: "#00C16A",
                    600: "#00A155",
                    700: "#007F45",
                    800: "#016538",
                    900: "#0A5331",
                    950: "#052e16",
                },
            },
        },
    },
    plugins: [],
};
