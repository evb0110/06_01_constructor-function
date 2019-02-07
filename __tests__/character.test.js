import Character from '../src/js/character';

describe('TESTING VALID INPUT', () => {
  test('testing a good Bowman', () => {
    const input = ['Вася', 'Bowman'];

    const expected = {
      name: 'Вася',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };

    const player = new Character(...input);

    expect(player).toEqual(expected);
  });

  test('testing a good Swordsman', () => {
    const input = ['Петя', 'Swordsman'];

    const expected = {
      name: 'Петя',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    };

    const player = new Character(...input);

    expect(player).toEqual(expected);
  });

  test('testing a good Magician with 2-char-name', () => {
    const input = ['Sa', 'Magician'];

    const expected = {
      name: 'Sa',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    };

    const player = new Character(...input);

    expect(player).toEqual(expected);
  });

  test('testing a good Undead with 10-char-name', () => {
    const input = ['Smart Unde', 'Undead'];

    const expected = {
      name: 'Smart Unde',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };

    const player = new Character(...input);

    expect(player).toEqual(expected);
  });

  test('testing a good Zombie', () => {
    const input = ['Uncle Sam', 'Zombie'];

    const expected = {
      name: 'Uncle Sam',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    };

    const player = new Character(...input);

    expect(player).toEqual(expected);
  });

  test('testing a good Daemon', () => {
    const input = ['Azazel', 'Daemon'];

    const expected = {
      name: 'Azazel',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    };

    const player = new Character(...input);

    expect(player).toEqual(expected);
  });
});

describe('TESTING INVALID NAME', () => {
  test('testing a Daemon with a short name, should fail', () => {
    const input = ['A', 'Daemon'];

    const makeOutput = () => new Character(...input);

    expect(makeOutput).toThrow();
  });

  test('testing a Daemon with a long name, should fail', () => {
    const input = ['Mr Senior Daemon', 'Daemon'];

    const makeOutput = () => new Character(...input);

    expect(makeOutput).toThrow();
  });

  test('testing a Daemon with a non-string name, should fail', () => {
    const input = [{ Daemon: true }, 'Daemon'];

    const makeOutput = () => new Character(...input);

    expect(makeOutput).toThrow();
  });
});

describe('TESTING INVALID TYPE', () => {
  test('testing a Cowboy, should fail', () => {
    const input = ['John', 'Cowboy'];
    const makeOutput = () => new Character(...input);

    expect(makeOutput).toThrow();
  });
});
