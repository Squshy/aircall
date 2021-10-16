import { useEffect, useState } from "react";
import { Call } from "../types";

export const useFetchCalls = (link:string) => {
  const [state, setState] = useState<{data: Call[] | null, loading: boolean}>({ data: null, loading: true });
  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));
    fetch(link)
    .then((res) => res.json())
    .then((ret) => {
      setState({data: ret, loading: false})
    });
  }, [setState, link]);
  return {calls :state.data, callsLoading: state.loading}
};
