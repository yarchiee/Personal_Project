export default function calculateTime(createTime: string): string {
  const currentTime = Date.now();
  const inputTime = new Date(createTime);
  const timeLag = currentTime - inputTime.getTime();
  if (Math.floor(timeLag / (12 * 30 * 24 * 3600 * 1000)) > 0) {
    return `${Math.floor(timeLag / (12 * 30 * 24 * 3600 * 1000))} years`;
  }
  if (Math.floor(timeLag / (30 * 24 * 3600 * 1000)) > 0) {
    return `${Math.floor(timeLag / (30 * 24 * 3600 * 1000))} months`;
  }
  if (Math.floor(timeLag / (24 * 3600 * 1000)) > 0) {
    return `${Math.round(timeLag / (24 * 3600 * 1000))} days`;
  }
  if (Math.floor(timeLag / (3600 * 1000)) > 0) {
    return `${Math.floor(timeLag / (3600 * 1000))} hours`;
  }
  if (Math.floor(timeLag / (60 * 1000)) > 0) {
    return `${Math.floor(timeLag / (60 * 1000))} minutes`;
  }
  if (Math.floor(timeLag / 1000) > 0) {
    return `${Math.floor(timeLag / 1000)} seconds`;
  }
  return "";
}
