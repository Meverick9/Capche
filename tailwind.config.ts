import type { Config } from "tailwindcss"
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        clinpurple: { 50: '#f5f3ff', 100: '#ede9fe', 500: '#8b5cf6', 600: '#7c3aed', 700: '#6d28d9', 900: '#4c1d95' },
        clinblue: { 50: '#f0f9ff', 100: '#e0f2fe', 500: '#0ea5e9', 600: '#0284c7' },
        status: { new: '#ef4444', updated: '#f59e0b', closed: '#10b981', coded: '#8b5cf6', 'not-coded': '#94a3b8' }
      }
    }
  },
  plugins: []
}
export default config