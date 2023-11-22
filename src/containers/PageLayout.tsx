"use client";

import SearchBox from "@/components/SearchBox/SearchBox";
import Footer from "@/components/footer";
import Navbar from "@/components/navigation/Navbar";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const PageLayout = (props: Props) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
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
