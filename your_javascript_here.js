// Variables

var hero = {
  name: "Nick",
  heroic: true,
  inventory: [],
  health: 100,
  weapon: { type: "Melee", damage: 100}
};

// Game logic
function rest(creature) {
  creature.health = 10;
  return creature;
}

function pickUpItem(creature, item) {
  creature.inventory.push(item);
  return creature;
}

function dealDamage(attacker, defender){
  defender.health -= attacker.weapon.damage;
  return defender;
}

function equipWeapon(creature, index){
  creature.weapon = creature.inventory[index];
  creature.inventory.splice(index, 1);
  return creature;
}

function doBattle(heroicCreature, creature){
  if (heroicCreature.heroic === true)
  {
    while(heroicCreature.health > 0 && creature.health > 0)
    {
      dealDamage(heroicCreature, creature);
      if (creature.health > 0)
      {
        dealDamage(creature,heroicCreature);
      }
    }
    if(heroicCreature.health > 0)
    {
      return heroicCreature;
    }
    else
    {
      window.alert("You died... git gud scrub");
    }
  }
  else
  {
    return null;
  }
}

// UI
