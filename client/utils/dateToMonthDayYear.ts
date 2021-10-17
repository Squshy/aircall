import { MONTHS } from "../contants";

export const dateToMonthDayYear = (timeStamp: string):string => {
  const date = new Date(timeStamp);
  const month = date.getUTCMonth();
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  return `${MONTHS[month -1]}, ${day} ${year}`
}