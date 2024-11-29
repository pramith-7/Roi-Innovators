
import { Inter } from "@next/font/google";
import MobileAppDevelopmentForm from "@/components/Form/MobileAppDevelopmentForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <MobileAppDevelopmentForm />
    </>
  );
}
