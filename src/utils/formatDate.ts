import { $ } from "@builder.io/qwik";

const formatDate = $((dateString: string, resumableMonth: boolean): string => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date string");
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  if (resumableMonth) {
    return `${month.substring(0, 3)} ${day}, ${year}`;
  }

  return `${month} ${day}, ${year}`;
});

export { formatDate };
