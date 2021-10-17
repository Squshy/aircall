import { CALL_ROUTE } from "../contants";
import { Call } from "../types";

export const archiveCall = (call: Call) => {
  const { id, is_archived } = call;
  if (is_archived === true) return;
  fetch(CALL_ROUTE + `${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      is_archived: true,
    }),
  }).then((res) => res.json());
};
