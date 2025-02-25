class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

class Square extends Rectangle {
  isSquare() {
    return this.width === this.height ? true : false;
  }
}

let examplesquare = new Square(5, 10);

console.log(examplesquare.area());
console.log(examplesquare.perimeter());
console.log(examplesquare.isSquare());
