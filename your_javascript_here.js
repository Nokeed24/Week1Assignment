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
  console.log("Healed! rest is working");
  return creature;
}

function pickUpItem(creature, item) {
  creature.inventory.push(item);
  console.log("pickUpItem Called");
  return creature;
}

function dealDamage(attacker, defender){
  defender.health -= attacker.weapon.damage;
  console.log("dealDamage Called");
  return defender;
}

function equipWeapon(creature, index){
  creature.weapon = creature.inventory[index];
  creature.inventory.splice(index, 1);
  console.log("equipWeapon Called");
  return creature;
}

function doBattle(heroicCreature, creature){
  console.log("doBattle Called");
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

var restImage = document.getElementById('restimage');
console.log(restImage);

// UI

$(document).ready(function() {


});

restImage.onclick = rest(hero);
