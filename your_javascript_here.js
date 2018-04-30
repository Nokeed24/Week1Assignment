// Variables

var hero = {
  name: "Unknown",
  heroic: true,
  inventory: [],
  health: 10,
  weapon: { type: "Fists", damage: 1}
};

var assaultRifle = {type: "AR", damage: 4};
var machete = {type: "machete", damage: 3};
var magnum = {type: "magnum", damage: 10};
var shotgun = {type: "shotgun", damage: 7};
var enemy = {health: 10, weapon: {type: "melee", damage: 1}};
var getIndex = function(){
  var a = window.prompt("Choose a weapon by its index: ");
  return a;
}

// Game logic
function resetEnemy()
{
  enemy.health = 10;
}



















function deleteItem(item)
{
  if(item.type === "AR")
  {
    var parent = document.getElementById("weapons2");
    var child = document.getElementById(item.type);
    parent.removeChild(child);
  }
  else
  {
    console.log("---DELETE THIS---");
    console.log(item);
    var parent = document.getElementById("weapons");
    var child = document.getElementById(item.type);
    parent.removeChild(child);
  }
}

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
      resetEnemy();
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

function changeHeroName(event)
{
  event.preventDefault();
  var title = $("#new-name").val();
  //createTodo(title);
  $("#new-name").val(null);
  hero.name = title;
  updateStats();
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
  var inv = document.getElementById("inventory");
  while (inv.firstChild)
  {
    inv.removeChild(inv.firstChild);
  }
  hero.inventory.forEach(function(element)
  {
    console.log("---INVENTORY---");
    console.log(hero.inventory);
    var invItem = hero.inventory.indexOf(element) + ": " + element.type;
    var spanObj = "<span>" + invItem + "</span>";
    var divObj = document.createElement('div');
    divObj.innerHTML = spanObj;
    inv.appendChild(divObj);
  });
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
  displayStats();

});

displayStats();

$("form").on('submit', changeHeroName);
