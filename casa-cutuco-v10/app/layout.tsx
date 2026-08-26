import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casa Cutuco | Berlín, El Salvador",
  description: "Casa Cutuco stays in Berlín, Usulután, El Salvador."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
