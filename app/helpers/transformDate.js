const date = require('date-and-time');

const transformDate = (dateString, format) => {

  const original = new Date(dateString);
  const newDate = date.format(original, format);
  return newDate;

}

module.exports = {
  transformDate
}