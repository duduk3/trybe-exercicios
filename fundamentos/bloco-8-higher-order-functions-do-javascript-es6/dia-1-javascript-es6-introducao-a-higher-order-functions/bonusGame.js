const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
const warrior = {
healthPoints: 200,
strength: 30,
weaponDmg: 2,
damage: undefined,
};
  
const dragon = {
healthPoints: 350,
strength: 50,
damage: undefined,
};
  
const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
    dragon.damage = Math.round(Math.random() * dragon.strength) + 15;
    return dragon.damage;
}

const warriorDamage = () => {
    warrior.damage = Math.round(Math.random() * warrior.strength * warrior.weaponDmg) + warrior.strength;
    return warrior.damage;
}

const mageDamage = () => {
    mage.damage = Math.round(Math.random() * mage.intelligence * 2) + mage.intelligence;
    if (mage.mana < 15) {
        alert('Não possui mana suficiente');
    } else {
        mage.mana -= 15;
    }
    return {
        dano: mage.damage,
        mana: mage.mana
    } 
};


const warriorTurn = (damage) => {
    let danoWarrior = damage();
    dragon.healthPoints = dragon.healthPoints - danoWarrior;
    warrior.damage = danoWarrior;
};

const mageTurn = (damage) => {
    let danoMage = damage().dano;
    dragon.healthPoints = dragon.healthPoints - danoMage;
    mage.damage = danoMage;
};

const dragonTurn = (damage) => {
    let danoDragon = damage();
    mage.healthPoints = mage.healthPoints - danoDragon;
    warrior.healthPoints = warrior.healthPoints - danoDragon;
    dragon.damage = danoDragon;
};

const gameActions = {
        warriorTurn: warriorTurn(warriorDamage) ,
        mageTurn: mageTurn(mageDamage) ,
        dragonTurn: dragonTurn(dragonDamage),
        atual: console.log(battleMembers)
    };


