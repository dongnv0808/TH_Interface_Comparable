"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComparableCircle_1 = require("./ComparableCircle");
let Circles = [];
Circles[0] = new ComparableCircle_1.ComparableCircle(10);
Circles[1] = new ComparableCircle_1.ComparableCircle(40);
Circles[2] = new ComparableCircle_1.ComparableCircle(30);
let result = Circles[1].comparableTo(Circles[2]);
if (result == 1) {
    console.log(`The current circle is larger.`);
}
else {
    console.log(`The current circle is smaller.`);
}
