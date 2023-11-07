import AccentColorProvider from "../Context/AccentColorProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AnimatedCursor from "react-animated-cursor";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AccentColorProvider>
      <Component {...pageProps} />
    </AccentColorProvider>
  );
}
