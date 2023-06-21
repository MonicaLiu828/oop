// basic object literals
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: () => {
//     console.log("draw1");
//   },
// };

// circle.draw();

// function
// const createCircle = (radius) => {
//   return {
//     radius,
//     draw: () => {
//       console.log("draw2");
//     },
//   };
// };
// const circle = createCircle(1);
// circle.draw();

// constructor
// const Circle = function (radius) {
//   this.radius = radius;
//   this.draw = () => {
//     console.log(this.radius);
//   };
// };
// const Alice = {};

// Circle.call(Alice, 1);
// Alice.draw();
// const another = new Circle(1);
// another.draw();
//  arrow can't used to defined consturctionor

// let x = { value: 20 };
// let y = x;
// x.value = 10;
