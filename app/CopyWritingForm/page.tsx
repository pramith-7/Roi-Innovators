import { Inter } from "@next/font/google";
import CopyWritingForm from "@/components/Form/CopyWritngForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <>
      <CopyWritingForm />
    </>
  );
}
