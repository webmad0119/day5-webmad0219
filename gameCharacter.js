function GameCharacter(name, x, y) {
    this.life = 100
    this.name = name
    this.x = x
    this.y = y
}

//subtype of GameCharacter
function Orc() {

}

Orc.prototype.attack = function () {
    //here he uses the axe
}

function Elf() {

}

Elf.prototype.attack = function () {
    //here he uses the longbow
}

function Wizard() {

}

Wizard.prototype.castSpell = function () {
    //here he uses his magic
}