export function formatDateTime(dateTimeStr: string) {
  const dateTime = new Date(dateTimeStr);

  const time = dateTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const date = dateTime.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return `${time} ${date}`;
}
