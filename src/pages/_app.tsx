import "@/styles/globals.css";
import type { AppProps } from "next/app";

/**
 * This is the app initiator
 * @return {JSX.Element}
 */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
