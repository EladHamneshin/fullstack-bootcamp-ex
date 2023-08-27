class Shape {
    info(): string{
        return 'This is a shape';
    }

    draw() {
        return 'Drawing a shape';
    }
}

class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
        super();
        this.height = height;
        this.width = width;
    }
    get area() {
        return this.calcArea();
    }

    scale(size: number): Rectangle {
        this.height *= size;
        this.width *= size;
        return this;
    }

    calcArea() {
        return this.height * this.width;
    }

    info(): string{
        return 'This is a rectangle';
    }

    static mixRec(rec1: Rectangle, rec2: Rectangle) {
        return new Rectangle(rec1.height + rec2.height, rec1.width + rec2.width);
    }

    draw(): string {
        return 'Drawing a rectangle';
    }
}

let rec1 = new Rectangle(10, 20);
rec1.scale(2).scale(3).scale(4);


class ColoredRectangle extends Rectangle {
    color: string;
    
    constructor(height: number, width: number, color: string) {
        super(height, width);
        this.color = color;
    }
    info(): string{
        return `This is a ${this.color} rectangle`;
    }
}

class Square extends Shape {

    size: number;

    constructor(size: number) {
        super();
        this.size = size;
    }

    calcArea() {
        return this.size * this.size;
    }

    get area() {
        return this.calcArea();
    }

    draw(): string {
        return 'Drawing a square';
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    calcArea() {
        return Math.PI * this.radius * this.radius;
    }

    get area() {
        return this.calcArea();
    }

    draw(): string {
        return 'Drawing a circle';
    }
}

let shapes: Shape[] = [new Rectangle(10, 20), new Square(10), new Circle(10)];

function renderShapes(shapes: Shape[]) {
    shapes.forEach(shape => {
        console.log(shape.draw());
    });
}
renderShapes(shapes);