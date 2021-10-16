import { useEffect, useState } from "react";
import { Call } from "../types";

export const useFetchCalls = (link: string) => {
  const [loading, setLoading] = useState(false);
  const [calls, setCalls] = useState<Call[] | null>(null);
  useEffect(() => {
    setLoading(false);
    fetch(link)
      .then((res) => res.json())
      .then((ret) => {
        setCalls(ret);
      });
  }, [setLoading, setCalls, link]);
  return { calls: calls, setCalls: setCalls, loading: loading };
};
