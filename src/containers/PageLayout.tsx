"use client";

import SearchBox from "@/components/SearchBox/SearchBox";
import Footer from "@/components/footer";
import Navbar from "@/components/navigation/Navbar";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const PageLayout = (props: Props) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { status } = useSession();

  if (status === "loading") {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="fadeinout flex space-x-4">
          <Image
            src="/daps.png"
            alt="Daps Logo"
            width={250}
            height={200}
            className="mr-4 z-10 cursor-pointer fadeinout"
          />
        </div>
      </div>
    );
  }

  return (
    <main className={props.className}>
      <Navbar isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
      {isSearchOpen ? (
        <SearchBox closeSearch={setIsSearchOpen} />
      ) : (
        <main className="-mt-4">
          {props.children} <Footer />
        </main>
      )}
    </main>
  );
};

export default PageLayout;
