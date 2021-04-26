function fancyPrint (firstString:string, secondString: string): string { //* You name your 1st & 2nd string = string
    return `${firstString}\n ${secondString}` //* You want it to return both strings \n means next line?
}
console.log(fancyPrint("I have no idea what I'm doing","Thank you for your help")) //* Put both strings together

function typesOfWine (firstType: string, secondType: string): string { //* Try it with another one
    return `${firstType}\n ${secondType}` 
}
console.log(typesOfWine("cabernet","merlot"))

//* to run this test you npx ts-node <Path to File>