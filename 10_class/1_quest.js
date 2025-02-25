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

let examplerectangle = new Rectangle(5, 10);

console.log(examplerectangle.area());
console.log(examplerectangle.perimeter());
