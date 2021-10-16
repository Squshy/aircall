import type { NextPage } from "next";
import { Header } from "../components/Header";
import { CALL_ROUTE } from "../contants";
import { useFetchCalls } from "../hooks/useFetchCalls";
import { Call } from "../components/Call";
import { ActivityFeed } from "../components/ActivityFeed";

const Home: NextPage = () => {
  const { calls, callsLoading } = useFetchCalls(CALL_ROUTE);

  return (
    <>
      <Header />
      {callsLoading ? <p>loading..</p> : <ActivityFeed calls={calls} />}
    </>
  );
};

export default Home;
