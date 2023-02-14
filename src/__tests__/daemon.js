import Daemon from '../js/daemon';

test('проверка создания объекта', () => {
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
