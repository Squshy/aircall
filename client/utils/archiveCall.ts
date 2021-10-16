import { CALL_ROUTE } from "../contants";
import { Call } from "../types";

export const archiveCall = (call: Call) => {
  const { id } = call;
  fetch(CALL_ROUTE + `${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      is_archived: true,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
