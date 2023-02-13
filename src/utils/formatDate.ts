import dayjs from 'dayjs';
const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export function formatDate(time: string, format?: string) {
  return dayjs(time).format(format || DATE_TIME_FORMAT);
}
