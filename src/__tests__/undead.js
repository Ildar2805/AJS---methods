import Undead from '../js/undead';

test('проверка создания объекта', () => {
  const result = new Undead('Nick', 'Undead');
  const expected = {
    name: 'Nick',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(result).toEqual(expected);
});
