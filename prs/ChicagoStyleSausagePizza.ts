class ChicagoStyleSausagePizza extends Pizza {
    public ChicagoStyleSausagePizza() {
        this.pizzaType = "Chicago Style Deep Dish Cheese Pizza";
        this.doughType = "Extra Thick Crust Dough";
        this.sauceType = "Plum Tomato Sauce";

        this.toppings.push("Italian Pork Sausage", "Shredded Mozzarella Cheese");
    }

    public cut(): void {
        console.log("Cutting the pizza into square slices...");
    }
}