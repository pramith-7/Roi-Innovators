import { Inter } from "@next/font/google";
import SocialMediaManagementForm from "@/components/Form/SocialMediaManagementForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <SocialMediaManagementForm />
    </>
  );
}
