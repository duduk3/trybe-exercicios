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

    const warriorTurn = (warriorDamage) => {
        battleMembers.dragon.healthPoints - warriorDamage();
        battleMembers.warrior.damage - warriorDamage();
    };

    const mageTurn = (mageDamage) => {
        battleMembers.dragon.healthPoints - mageDamage();
        battleMembers.mage.damage - mageDamage();
    };

    const dragonTurn = (dragonDamage) => {
        battleMembers.mage.healthPoints - dragonDamage();
        battleMembers.warrior.healthPoints - dragonDamage();
        battleMembers.dragon.damage - dragonDamage();
    };

    const gameActions = {
        // Crie as HOFs neste objeto.
        newWarriorTurn: () => warriorTurn(),
        newMageTurn: () => mageTurn(),
        newDragonTurn: () => dragonTurn(),
        newBattleMembers: () => console.log(battleMembers)
      };

      console.log(gameActions.newDragonTurn);
      console.log(gameActions.newBattleMembers);
