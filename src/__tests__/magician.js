import Magician from '../js/magician';

test('should check an object', () => {
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
