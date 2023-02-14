import Character from '../js/base';

test('проверка выбрасывания ошибки по типу', () => {
  expect(() => new Character('Nick', 'Iceman')).toThrow();
});

test('проверка выбрасывания ошибки по имени', () => {
  expect(() => new Character('N', 'Bowman')).toThrow();
});
