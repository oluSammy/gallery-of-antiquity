import Footer from "@/components/footer";
import Navbar from "@/components/navigation/Navbar";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const PageLayout = (props: Props) => {
  return (
    <main className={props.className}>
      <Navbar />

      {props.children}
      <Footer />
    </main>
  );
};

export default PageLayout;
