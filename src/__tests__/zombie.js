import Zombie from '../js/zombie';

test('should check an object', () => {
  const result = new Zombie('Nick', 'Zombie');
  const expected = {
    name: 'Nick',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(result).toEqual(expected);
});
