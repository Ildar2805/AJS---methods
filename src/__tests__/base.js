import Character from '../js/base';

test('should check an Error of type', () => {
  try {
    const result = new Character('Nick', 'Iceman');
  } catch (error) {
    expect(error.message).toBe('Тип не соответствует критериям');
  }
});

test('should check an Error of name', () => {
  try {
    const result = new Character('N', 'Bowman');
  } catch (error) {
    expect(error.message).toBe('Имя не соответствует критериям');
  }
});
