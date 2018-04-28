// Variables

var hero = {
  name: "Unknown",
  heroic: true,
  inventory: [],
  health: 10,
  weapon: { type: "Melee", damage: 2}
};

var assaultRifle = {type: "Ranged", damage: 5};
var enemy = {health: 100, weapon: {type: "Melee", damage: 10}};
var getIndex = function(){
  var a = window.prompt("Index: ");
  return a;
}

// Game logic
function rest(creature) {
  creature.health = 10;
  console.log("Healed! rest is working");
  updateStats();
  return creature;
}

function pickUpItem(creature, item) {
  creature.inventory.push(item);
  console.log("pickUpItem Called");
  updateStats();
  return creature;
}

function dealDamage(attacker, defender){
  defender.health -= attacker.weapon.damage;
  return defender;
}

function equipWeapon(creature, index){
  creature.weapon = creature.inventory[index];
  creature.inventory.splice(index, 1);
  console.log("equipWeapon Called");
  updateStats();
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
      console.log("HERO WON!!!!!");
      displayStats();
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

function askForName()
{
  var name = window.prompt("What is your hero's name?");
  displayStats();
  return name;
}

function displayStats()
{
  $("#name").html(hero.name);
  $("#health").html(hero.health);
  $("#weaponType").html(hero.weapon.type);
  $("#weaponDamage").html(hero.weapon.damage);
}

function displayInventory()
{
  console.log("Inventory:")
  console.log(hero.inventory);
}

function updateStats()
{
  displayStats();
  displayInventory();
}


$(document).ready(function() {
  hero.name = askForName();

});

displayStats();
