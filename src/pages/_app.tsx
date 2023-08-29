import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "../styles/main.scss";

const inter = Inter({
  weight: ["400", "600"],
  style: "normal",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
