function Butterfly (typeParam, rotationParam, x, y) {
    this.type = typeParam
    this.rotation = rotationParam
    this.x = x
    this.y = y
    this.DOMElement = document.createElement("div")
    this.DOMElement.className = "butterfly"
    this.DOMElement.style.transform = "rotate(" + Math.random() * 360 + "deg)"
    document.querySelector("body").appendChild(this.DOMElement)
    
}

//this is a method that all butterflies share through its prototype
Butterfly.prototype.rotate = function () {
    this.rotation += 30
    this.DOMElement.style.transform = "rotate(" + this.rotation + "deg)"
}