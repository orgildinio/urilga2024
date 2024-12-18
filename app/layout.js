import localFont from "next/font/local";
import "./globals.css";
import { Golos_Text } from "next/font/google";

const adineue = localFont({
  src: "./fonts/adineuePROKZ.otf",
  variable: "--font-adineue",
  weight: "700",
});
const golosText = Golos_Text({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  preload: true,
  display: "swap",
  variable: "--font-golos-text",
});
export const metadata = {
  title: "Урилга",
  description: "Урилга",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${adineue.variable}  ${golosText.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
