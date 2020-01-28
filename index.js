var faker = require('faker');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const DateMode =  {
  short: 'MM/dd/yy, H:m a',
  medium: 'MMMM dd, yyy, H:m:s a',
  fullDate: 'EEEE, MMMM dd, yyy'
};

const modeKeys = Object.keys(DateMode);

module.exports = () => {
  const data = { items: [] };
  for (let i = 0; i < 100; i++) {
    const randomImageId = getRandomInt(1, 150);
    const randomMode = modeKeys[Math.floor(Math.random() * modeKeys.length)];
    data.items.push(
      {
        id: i,
        title: new Date(faker.date.future()).getTime(),
        mode: randomMode,
        src: `https://picsum.photos/id/${randomImageId}/900/500`
      }
    )
  }
  return data
};
