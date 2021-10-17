import type { NextPage } from "next";
import { useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Inbox } from "../components/Inbox";

const Home: NextPage = () => {
  const [currentPage, setCurrentPage] = useState<'inbox' | 'all'>('inbox')
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-100">
      <Header />
      <Inbox className="mb-auto" />
      <Footer />
    </div>
  );
};

export default Home;
