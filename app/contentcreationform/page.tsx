import { Inter } from "@next/font/google";
import ContentCreationForm from "@/components/Form/ContentCreationForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <>
      <ContentCreationForm />
    </>
  );
}
