export function formatFullDate(dateTime: string | Date): string {
  if (!dateTime) {
    return "";
  }
  const dateObj = new Date(dateTime);
  const days = dateObj.getDate().toString().padStart(2, "0");
  const month = (dateObj.getMonth() + 1)?.toString().padStart(2, "0");
  const year = dateObj.getFullYear();

  return `${days}.${month}.${year}`;
}

export function formatShortDate(dateTime: string | Date): string {
  if (!dateTime) {
    return "";
  }
  const dateObj = new Date(dateTime);
  const days = dateObj.getDate().toString().padStart(2, "0");
  const month = (dateObj.getMonth() + 1)?.toString().padStart(2, "0");

  return `${days}.${month}`;
}

export function getDateTime(dateTime: string | Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };
  if (!dateTime || dateTime == "") {
    return "";
  }
  let newDateTime: string = new Intl.DateTimeFormat("ru-RU", options).format(
    new Date(dateTime)
  );
  return newDateTime;
}
