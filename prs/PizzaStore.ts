class PizzaStore {
    public createPizza(style: string, type: string): Pizza | null {
        let pizza: Pizza = undefined;

        if (style === "NY") {
            if (type === "cheese") {
                pizza = new NYStyleCheesePizza();
            } else if (type === "veggie") {
                pizza = new NYStyleVeggiePizza();
            } else if (type === "sausage") {
                pizza = new NYStyleSausagePizza();
            } else if (type === "pepperoni") {
                pizza = new NYStylePepperoniPizza();
            } else {
                console.log("Stay on menu, eh buddy?");
                return null;
            }
        } else if (style === "CHI") {
            if (type === "cheese") {
                pizza = new ChicagoStyleCheesePizza();
            } else if (type === "veggie") {
                pizza = new ChicagoStyleVeggiePizza();
            } else if (type === "sausage") {
                pizza = new ChicagoStyleSausagePizza();
            } else if (type === "pepperoni") {
                pizza = new ChicagoStylePepperoniPizza();
            }
        } else {
            console.log("There are only two kinds of Pizza...")
            return null;
        }

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }
}