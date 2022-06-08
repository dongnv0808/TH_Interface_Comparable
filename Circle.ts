export class Circle{
    private radius: number;
    constructor(radius: number){
        this.radius = radius;
    }
	public get $radius(): number {
		return this.radius;
	}
	public set $radius(value: number) {
		this.radius = value;
	}
    public perimeter(): number{
        return 2 * this.radius * Math.PI;
    }
    toString(): string{
        return `A Circle width radius = ${this.$radius} | Peremeter = ${this.perimeter()}`
    }
}