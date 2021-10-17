import { CALL_ROUTE } from "../contants";
import { Call } from "../types";

export const unarchiveCall = (call: Call) => {
  const { id, is_archived } = call;
  if (is_archived === false) return;
  fetch(CALL_ROUTE + `${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      is_archived: false,
    }),
  }).then((res) => res.json());
};
