export const formatBusinessHours = (
  days: string,
  openTime: string,
  closeTime: string
) => {
  return `${days} : ${openTime} - ${closeTime}`;
};
