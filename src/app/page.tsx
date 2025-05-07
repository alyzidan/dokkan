import Footer from "@/components/Footer";
// import { Footere } from "@/components/Footere";

import Header from "@/components/Header";
import { LoginForm } from "@/components/LoginForm";
import { ChakraProvider } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <ChakraProvider>
      <div className="min-h-screen flex flex-col">
        <Header />

        <LoginForm />

        <Footer />
        {/* <FooterSecond /> */}
      </div>
    </ChakraProvider>
  );
}
