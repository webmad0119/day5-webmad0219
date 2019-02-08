function GameCharacter(name, x, y) {
    this.life = 100;
    this.name = name;
    this.x = x;
    this.y = y;
};

//subtype of GameCharacter
function Orc(name,x,y) {
    GameCharacter.call(this,name, x, y);
    this.damage = 50;
};

//Estas dos líneas hacen que el Orco pueda crear sus propios prototype.
Orc.prototype = Object.create(GameCharacter.prototype);
Orc.prototype.constructor = Orc;  

Orc.prototype.attack = function () {
    //here he uses the axe
    return this.damage * 2;
};

function Elf() {
    GameCharacter.call(this,name, x, y);
    this.spit = 30;
};

Elf.prototype = Object.create(GameCharacter.prototype);
Elf.prototype.constructor = Elf;  

Elf.prototype.attack = function () {
    //here he uses the longbow or spit
    return "I spit on you " + this.spit + " times.";
};

function Wizard() {
    GameCharacter.call(this,name, x, y);
    this.spell = {
        fire : "Burn",
        blizzard : "freeze"
    };
};

Wizard.prototype = Object.create(GameCharacter.prototype);
Wizard.prototype.constructor = Wizard;  

Wizard.prototype.castSpell = function () {
    //here he uses his magic
    return this.spell.fire;
};

var orc = new Orc( "Drog", 10, 100 );

orc.attack();

var elf = new Elf( "Elwin", 20, 200 );

elf.attack();

var wizard = new Wizard( "Matilda", 30, 300 );

wizard.castSpell();