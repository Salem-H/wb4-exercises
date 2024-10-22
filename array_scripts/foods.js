let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
];
function calcTotal(food){
    let subtotal = 0;
    for( let i = 0; i < food.length; i++){
        subtotal += food[i].price;
    }
    const tax = subtotal * 0.08;
    const tip = subtotal* 0.18;
    const totalDue = subtotal + tax + tip;

    console.log("Subtotal: " + subtotal.toFixed(2));
    console.log("Tax: " + tax.toFixed(2));
    console.log("Tip: " + tip.toFixed(2));
    console.log("Total Due: " + totalDue.toFixed(2))
}

  calcTotal(lunch)