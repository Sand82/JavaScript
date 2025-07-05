function perimetersWithCatch(symbol, number) {  
    return symbol === "s" ? number * 4 : number * 6.28;
}

console.log(perimetersWithCatch("s", 7))
console.log(perimetersWithCatch("c", 4))