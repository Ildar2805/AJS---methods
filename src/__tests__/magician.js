import Magician from '../js/magician';

test('проверка создания объекта', () => {
  const result = new Magician('Nick', 'Magician');
  const expected = {
    name: 'Nick',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(result).toEqual(expected);
});
