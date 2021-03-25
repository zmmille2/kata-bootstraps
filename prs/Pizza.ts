abstract class Pizza {
    pizzaType: string;
    doughType: string;
    sauceType: string;
    toppings: [string];

    public prepare(): void {
        console.log(`Preparing ${this.pizzaType}...`);
        console.log(`Tossing ${this.doughType} dough...`);
        console.log(`Adding ${this.sauceType} sauce...`);
        console.log(`Adding toppings:`);
        this.toppings.map(topping => console.log(`\tAdding ${topping}...`));
    }

    public bake(): void {
        console.log(`Baking at 350F for 25 min.`);
    }

    public cut(): void {
        console.log(`Cutting the pizza into 8 slices diagonally.`);
    }

    public box(): void {
        console.log(`Placing pizza into official CSEPizza box.`);
    }
}