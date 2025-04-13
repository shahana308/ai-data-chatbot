import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const formatDateToRelativeTime = (date: dayjs.Dayjs) => {
  const now = dayjs();
  const diffInHours = now.diff(date, "hours");
  if (diffInHours > 2) {
    return date.format("DD/MM/YYYY, hh:mm A");
  }
  return date.fromNow();
};
