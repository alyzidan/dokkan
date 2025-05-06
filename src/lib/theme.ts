import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: {
      500: "#4f46e5",
      600: "#4338ca",
    },
    text: {
      primary: "#1e293b",
      secondary: "#64748b",
    },
    border: {
      default: "#e2e8f0",
    },
    error: "#dc2626",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
  },
});
