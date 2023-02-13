import Daemon from '../js/daemon';

test('should check an object', () => {
  const result = new Daemon('Nick', 'Daemon');
  const expected = {
    name: 'Nick',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(result).toEqual(expected);
});
