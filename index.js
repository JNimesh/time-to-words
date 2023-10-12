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
  30: 'half',
}; // expecting time to be a string in the format like '8:15' or '12:30'

function convertTimeToWords(time) {
  const [hour, minutes] = time.split(':').map(Number);

  if (minutes === 0) {
    if (hour === 12) return 'midday';
    if (hour === 0) return 'midnight';
    return `${numberToString[hour]} o'clock`;
  }

  if (minutes <= 30) {
    return `${numberToString[minutes]} past ${numberToString[hour]}`;
  }
  const nextHour = (hour + 1) % 12 || 12; // Adjust to wrap 0 to 12
  const toMinutes = 60 - minutes;

  return `${numberToString[toMinutes]} to ${numberToString[nextHour]}`;

}

module.exports = { convertTimeToWords };
