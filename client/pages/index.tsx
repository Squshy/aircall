import type { NextPage } from "next";
import { useState } from "react";
import { ActivityFeed } from "../components/ActivityFeed";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Inbox } from "../components/Inbox";
import {
  useCalls,
  useCallsLoading,
  useCallsUpdate,
} from "../contexts/CallsContext";
import { archiveCall } from "../utils/archiveCall";

const Home: NextPage = () => {
  const calls = useCalls();
  const callsLoading = useCallsLoading();
  const setCalls = useCallsUpdate();
  const [currentPage, setCurrentPage] = useState<"inbox" | "all">("inbox");

  const archiveCalls = () => {
    if (calls !== null && calls.length > 0) {
      const tmp_calls = [...calls];
      tmp_calls.forEach((call) => {
        archiveCall(call);
        call.is_archived = true;
      });
      setCalls(tmp_calls);
    }
  };

  const displayMain = () => {
    if (currentPage === "inbox")
      return (
        <Inbox
          className="mb-auto"
          archiveCalls={archiveCalls}
          calls={calls}
          loading={callsLoading}
        />
      );
    else return <ActivityFeed calls={calls} showArchived className="mb-auto" />;
  };

  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-100">
      <Header updatePage={setCurrentPage} currentPage={currentPage} />
      {displayMain()}
      <Footer />
    </div>
  );
};

export default Home;
