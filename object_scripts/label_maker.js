const lable = {
    name: "Salem",
    address: "1036 Westmoreland",
    city: "Atlanta",
    state: "GA",
    zip: 30043
}

function printContact(lable){
    console.log(`${lable.name}`);
    console.log(`${lable.address}`);
    console.log(`${lable.city}, ${lable.state}, ${lable.zip}`)
}
printContact(lable);


