const getCount = (str) => {
  str = str.replace(/  /g,"");
  return str.split(" ").length;
}

module.exports = {
  getCount
}