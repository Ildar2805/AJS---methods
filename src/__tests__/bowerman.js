import Bowerman from '../js/bowerman';

test('проверка создания объекта', () => {
  const result = new Bowerman('Nick', 'Bowman');
  const expected = {
    name: 'Nick',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(result).toEqual(expected);
});

test('проверка метода levelUp', () => {
  const result = new Bowerman('Nick', 'Bowman');
  result.levelUp();
  const expected = {
    name: 'Nick',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(result).toEqual(expected);
});

test('проверка метода damage', () => {
  const result = new Bowerman('Nick', 'Bowman');
  result.damage(20);
  const expected = {
    name: 'Nick',
    type: 'Bowman',
    health: 85,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(result).toEqual(expected);
});

test('проверка метода levelUp, если персонаж мертв', () => {
  expect(() => {
    const result = new Bowerman('Nick', 'Bowman');
    result.damage(200);
    result.levelUp();
  }).toThrow();
});

test('проверка метода damage, если персонаж мертв', () => {
  const result = new Bowerman('Nick', 'Bowman');
  result.damage(200);
  result.damage(100);
  const expected = {
    name: 'Nick',
    type: 'Bowman',
    health: 0,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(result).toEqual(expected);
});
