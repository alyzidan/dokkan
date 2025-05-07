import Footer from "@/components/Footer";

import Header from "@/components/Header";
import { LoginForm } from "@/components/LoginForm";
import { ChakraProvider } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <ChakraProvider>
      <div className="min-h-screen flex flex-col">
        <Header />

        <div className="my-9"></div>
        <div>
          <LoginForm />
        </div>

        <Footer />
        {/* <FooterSecond /> */}
      </div>
    </ChakraProvider>
  );
}
