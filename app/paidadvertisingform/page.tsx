
import { Inter } from "@next/font/google";
import PaidAdvertisingForm from "@/components/Form/PaidAdvertisingForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <PaidAdvertisingForm />
    </>
  );
}
