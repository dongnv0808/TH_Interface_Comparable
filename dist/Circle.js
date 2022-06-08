"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get $radius() {
        return this.radius;
    }
    set $radius(value) {
        this.radius = value;
    }
    perimeter() {
        return 2 * this.radius * Math.PI;
    }
    toString() {
        return `A Circle width radius = ${this.$radius} | Peremeter = ${this.perimeter()}`;
    }
}
exports.Circle = Circle;
