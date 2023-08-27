"use strict";
class Shape {
    info() {
        return 'This is a shape';
    }
    draw() {
        return 'Drawing a shape';
    }
}
class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    get area() {
        return this.calcArea();
    }
    scale(size) {
        this.height *= size;
        this.width *= size;
        return this;
    }
    calcArea() {
        return this.height * this.width;
    }
    info() {
        return 'This is a rectangle';
    }
    static mixRec(rec1, rec2) {
        return new Rectangle(rec1.height + rec2.height, rec1.width + rec2.width);
    }
    draw() {
        return 'Drawing a rectangle';
    }
}
let rec1 = new Rectangle(10, 20);
rec1.scale(2).scale(3).scale(4);
class ColoredRectangle extends Rectangle {
    constructor(height, width, color) {
        super(height, width);
        this.color = color;
    }
    info() {
        return `This is a ${this.color} rectangle`;
    }
}
class Square extends Shape {
    constructor(size) {
        super();
        this.size = size;
    }
    calcArea() {
        return this.size * this.size;
    }
    get area() {
        return this.calcArea();
    }
    draw() {
        return 'Drawing a square';
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calcArea() {
        return Math.PI * this.radius * this.radius;
    }
    get area() {
        return this.calcArea();
    }
    draw() {
        return 'Drawing a circle';
    }
}
let shapes = [new Rectangle(10, 20), new Square(10), new Circle(10)];
function renderShapes(shapes) {
    shapes.forEach(shape => {
        console.log(shape.draw());
    });
}
renderShapes(shapes);
