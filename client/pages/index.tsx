import type { NextPage } from "next";
import { Header } from "../components/Header";
import { Inbox } from "../components/Inbox";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Inbox />
    </>
  );
};

export default Home;
