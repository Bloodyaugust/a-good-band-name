const handler = require('./handler');

test('curated returns a JSON object with body that contains a band name', async () => {
  const response = await handler.curated();
  const bandName = JSON.parse(response.body).name;

  expect(typeof bandName).toBe('string');
  console.log('Curated Band Name:', bandName)
});

test('random returns a JSON object with body that contains a band name', async () => {
  const response = await handler.random();
  const bandName = JSON.parse(response.body).name;

  expect(typeof bandName).toBe('string');
  console.log('Random Band Name:', bandName)
});
