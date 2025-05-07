import Footer from "@/components/Footer";

import Header from "@/components/Header";
import { LoginForm } from "@/components/LoginForm";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <LoginForm />
        <Footer />
      </div>
    </ChakraProvider>
  );
}
