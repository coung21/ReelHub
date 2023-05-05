export default function convertMinutesToHours(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const formattedHours = hours > 0 ? `${hours} hr` : '';
  const formattedMinutes = remainingMinutes > 0 ? ` ${remainingMinutes} m` : '';
  return `${formattedHours}${formattedMinutes}`;
}