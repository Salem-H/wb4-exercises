const product_string = "XYZ:1234-l";

function parsePartCode(part){
let pieces_array = part.split(":");

let final_two_string = pieces_array[1];
let final_two_array = final_two_string.split("-");

return {
    supplierCode : pieces_array[0],
    productNumber : final_two_array[0],
    sixe : final_two_string[1]
  }
}

let partObject = parsePartCode(product_string)

console.log(`
    CODE: ${partObject.supplierCode}
    NUMBER: ${partObject.productNumber}
    SIZE: ${partObject.size}
    `)