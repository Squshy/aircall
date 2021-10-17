import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CallsProvider } from "../contexts/CallsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CallsProvider>
      <Component {...pageProps} />
    </CallsProvider>
  );
}
export default MyApp;
