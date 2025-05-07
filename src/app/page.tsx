import Footer from "@/components/Footer";

import Header from "@/components/Header";
import { LoginForm } from "@/components/LoginForm";
import { ChakraProvider } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <ChakraProvider>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
        <Header />
        <div className="my-9"></div>
        <div className="my-9">
          <LoginForm />
        </div>

        <Footer />
        {/* <FooterSecond /> */}
      </div>
    </ChakraProvider>
  );
}
