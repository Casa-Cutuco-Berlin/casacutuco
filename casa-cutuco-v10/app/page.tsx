import { LanguageProvider } from "@/components/LanguageProvider";
import HomeClient from "@/components/HomeClient";

export default function Home() {
  return (
    <LanguageProvider>
      <HomeClient />
    </LanguageProvider>
  );
}
