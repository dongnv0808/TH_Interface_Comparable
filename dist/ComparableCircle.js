"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComparableCircle = void 0;
const Circle_1 = require("./Circle");
class ComparableCircle extends Circle_1.Circle {
    constructor(radius) {
        super(radius);
    }
    comparableTo(o) {
        if (this.$radius > o.$radius)
            return 1;
        else if (this.$radius < o.$radius)
            return -1;
        else
            return 1;
    }
}
exports.ComparableCircle = ComparableCircle;
