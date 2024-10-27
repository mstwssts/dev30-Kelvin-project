// kelvin will stay CONSTANT at 293 degrees

const kelvin = 293;

// Celsius is similar to kelvin -- only difference is that celsius is 273 degrees less than Kelvin

var celsius = kelvin - 273;

// The equation being used gives us degrees in fahrenheit 

var fahrenheit = celsius * (9/5) + 32;

// Afterwards we round the number given from the equation to get a whole number. (This is because converting celsius to fahrenheit, you often get a decimal)

Math.floor(fahrenheit);

// Extra: Converting Celsius into Newton and round down using the Math.floor function

var newton = Math.floor(celsius * (33/100));

// Now we print our results 

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log(`The temperature is ${newton} degrees Newton. `);

