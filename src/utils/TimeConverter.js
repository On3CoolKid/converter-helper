export default class TimeConverter {
  convertToSeconds(time, unit) {
    const units = {
      years: 31536000,
      months: 2592000,
      days: 86400,
      hours: 3600,
      minutes: 60,
      seconds: 1
    };
    return time * units[unit];
  }

  convertFromSeconds(seconds, unit) {
    const units = {
      years: 31536000,
      months: 2592000,
      days: 86400,
      hours: 3600,
      minutes: 60,
      seconds: 1
    };
    return seconds / units[unit];
  }
}