function isNameInvalid(name) {
  if (typeof name !== 'string') return 'name should be of \'string\' type';
  if (name.length < 2) return `name ${name} is too short`;
  if (name.length > 10) return `name ${name} is too long`;
  return false;
}

function Character(name, type) {
  const typesObj = {
    Bowman: {
      attack: 25,
      defence: 25,
    },
    Swordsman: {
      attack: 40,
      defence: 10,
    },
    Magician: {
      attack: 10,
      defence: 40,
    },
    Undead: {
      attack: 25,
      defence: 25,
    },
    Zombie: {
      attack: 40,
      defence: 10,
    },
    Daemon: {
      attack: 10,
      defence: 40,
    },
  };

  // Checking if name parameter is valid
  const nameInvalid = isNameInvalid(name);
  if (nameInvalid) throw new Error(nameInvalid);

  // Checking if type parameter is valid
  if (!Object.keys(typesObj).includes(type)) throw new Error('wrong character type');

  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;
  this.attack = typesObj[type].attack;
  this.defence = typesObj[type].defence;
}


export default Character;
