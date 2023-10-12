const numberToString = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'quarter',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  21: 'twenty one',
  22: 'twenty two',
  23: 'twenty three',
  24: 'twenty four',
  25: 'twenty five',
  26: 'twenty six',
  27: 'twenty seven',
  28: 'twenty eight',
  29: 'twenty nine',
}; // expecting time to be a string in the format like '8:15' or '12:30'

function convertTimeToWords(time) {
  const [hour, minutes] = time.split(':').map((s) => parseInt(s));
  const hourString = numberToString[hour];
  const minutesString = numberToString[minutes];
  if (minutes < 30) {
    if (minutes === 0) {
      if (hour % 12 === 0) {
        return hour === 12 ? 'midday' : 'midnight';
      }
      return `${hourString} o'clock`;
    } else {
      return `${minutesString} past ${hourString}`;
    }
  } else if (minutes === 30) {
    return `half past ${hourString}`;
  } else {
    const nextHour = (hour + 1) % 12;
    const toMinutes = 60 - minutes;
    return `${numberToString[toMinutes]} to ${numberToString[nextHour]}`;
  }
}

module.exports = { convertTimeToWords };
