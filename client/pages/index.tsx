import type { NextPage } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Inbox } from "../components/Inbox";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-100">
      <Header />
      <Inbox className="mb-auto" />
      <Footer />
    </div>
  );
};

export default Home;
