import React, { useContext, useMemo } from "react";
import { CALL_ROUTE } from "../contants";
import { useFetchCalls } from "../hooks/useFetchCalls";
import { Call } from "../types";

const CallsContext = React.createContext<Call[]>([]);
const CallsLoadingContext = React.createContext<boolean>(false);
const CallsUpdateContext = React.createContext<Function>(() => {});
const CallUpdateContext = React.createContext<Function>(() => {});

export const useCalls = () => {
  return useContext(CallsContext);
};

export const useCallsLoading = () => {
  return useContext(CallsLoadingContext);
};

export const useCallsUpdate = () => {
  return useContext(CallsUpdateContext);
};

export const useCallUpdate = () => {
  return useContext(CallUpdateContext);
};

export const CallsProvider: React.FC = ({ children }) => {
  const { calls, setCalls, loading } = useFetchCalls(CALL_ROUTE);
  const providerValue = useMemo(
    () => ({ calls: calls, setCalls: setCalls, loading: loading }),
    [calls, setCalls, loading]
  );

  const updateCalls = (calls: Call[]) => {
    setCalls(calls);
  };

  const updateSingleCall = (call: Call) => {
    let _calls = [...calls];
    _calls = _calls.map((_call) => {
      if (_call.id === call.id) return call;
      return _call;
    });
    setCalls(_calls);
  };

  return (
    <CallsContext.Provider value={providerValue.calls}>
      <CallsLoadingContext.Provider value={providerValue.loading}>
        <CallsUpdateContext.Provider value={updateCalls}>
          <CallUpdateContext.Provider value={updateSingleCall}>
            {children}
          </CallUpdateContext.Provider>
        </CallsUpdateContext.Provider>
      </CallsLoadingContext.Provider>
    </CallsContext.Provider>
  );
};
