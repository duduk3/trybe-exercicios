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


const warriorTurn = (rodada1) => {
    let dano1 = rodada1();
    dragon.healthPoints = dragon.healthPoints - dano1;
    warrior.damage = dano1;
};

const mageTurn = (rodada2) => {
    let dano2 = rodada2();
    dragon.healthPoints = dragon.healthPoints - dano2;
    mage.damage = dano2;
};

const dragonTurn = (rodada3) => {
    let dano3 = rodada3();
    mage.healthPoints = mage.healthPoints - dano3;
    warrior.healthPoints = warrior.healthPoints - dano3;
    dragon.damage = dano3;
};

const gameActions = {
        warriorTurn: warriorTurn(warriorDamage) ,
        mageTurn: mageTurn(mageDamage) ,
        dragonTurn: dragonTurn(dragonDamage),
        atual: console.log(battleMembers)
    };


