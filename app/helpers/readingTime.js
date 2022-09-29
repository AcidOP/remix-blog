const timeToRead = (wordCount) => {
  const wordsPerMinute = 200;
  const minutes = wordCount / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return readTime;
}

module.exports = {timeToRead};
