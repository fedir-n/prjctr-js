'use strict';

class Character {
    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
        this.id = Date.now()
    }
    sayName = () => console.log(`My name is ${this.name}`)
    sayAge = () => console.log(`My age is ${this.age}`)
    sayGender = () => console.log(`My gender is ${this.gender}`)
};

class Protagonist extends Character {
    #team
    constructor(name, age, gender){
        super(name, age, gender)
        this.#team = 'blue'
    }
    showTeam = () => console.log(`User team is ${this.#team}`)
};

class Antagonist extends Character {
    #team
    constructor(name, age, gender){
        super(name, age, gender)
        this.#team = 'red'
    }
    showTeam = () => console.log(`User team is ${this.#team}`)
}; 

class Warrior extends Protagonist {
    #weaponList = ['sword', 'axe', 'knives']
    #randomWeapon
    #phrase
    constructor(name, age, gender, hasShield){
    super(name, age, gender)
    this.#randomWeapon = this.#weaponList[Math.floor(Math.random() * this.#weaponList.length)]
    this.weapon = this.#randomWeapon
    this.hasShield = hasShield
    this.#phrase = hasShield ? 'have' : "don't have"
    }
    sayWeapon = () => console.log(`I have my ${this.weapon} and I ${this.#phrase} a shield!`)
};

class Magician extends Protagonist {
    #magicList = ['Witchcraft', 'Dark Arts', 'Necromancy']
    #randomMagic
    constructor(name, age, gender){
    super(name, age, gender)
    this.#randomMagic = this.#magicList[Math.floor(Math.random() * this.#magicList.length)]
    this.magic = this.#randomMagic
    }
    sayWeapon = () => console.log(`My magic is ${this.magic}!`)
};

class Orc extends Antagonist {
    #weaponList = ['battle axe', 'warhammer', 'mace']
    #randomWeapon
    #phrase
    constructor(name, age, gender, hasHelmet){
    super(name, age, gender)
    this.#randomWeapon = this.#weaponList[Math.floor(Math.random() * this.#weaponList.length)]
    this.weapon = this.#randomWeapon
    this.hasHelmet = hasHelmet
    this.#phrase = hasHelmet ? 'have' : "don't have"
    }
    sayWeapon = () => console.log(`I have my ${this.weapon} and I ${this.#phrase} a helmet!`)
   
};