function calculateLineDistance(x1, x2, y1, y2) {
  //Formula lai aprēķinātu līnijas garumu: Math.sqrt((x2-x1)^2+(y2-y1)^2)
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

console.log(calculateLineDistance(0, 10, 0, 10));
