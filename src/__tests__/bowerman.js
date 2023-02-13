import Bowerman from '../js/bowerman';

test('should check an object', () => {
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

test('should check levelUp method', () => {
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

test('should check damage method', () => {
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

test('should check levelUp method if character is dead', () => {
  const result = new Bowerman('Nick', 'Bowman');
  result.damage(200);
  try {
    result.levelUp();
  } catch (error) {
    expect(error.message).toBe('Персонаж мертв!');
  }
});

test('should check damage method if character is dead', () => {
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
