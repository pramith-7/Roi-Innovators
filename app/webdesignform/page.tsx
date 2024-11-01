
import { Inter } from "@next/font/google";
import WebDesignForm from "@/components/Form/WebDesignForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <WebDesignForm />
    </>
  );
}
