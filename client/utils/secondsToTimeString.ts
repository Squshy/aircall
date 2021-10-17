export const secondsToTimeString = (input: string) => {
  const convertedInput = parseInt(input);
  let minutes = convertedInput / 60;
  let seconds = convertedInput % 60;
  return `${minutes} minutes, ${seconds} seconds`
}