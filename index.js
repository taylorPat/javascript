try {
    const dividend = Number(window.prompt("Enter number!"));
    const divisor = Number(window.prompt("Enter number!"));

    if (divisor === 0) {
        throw Error(`Divisor must not be zero`);
    }
    if (isNaN(dividend) || isNaN(divisor)) {
        throw Error(`${dividend}/${divisor} is not allowed!`)
    }
    const result = dividend / divisor;
    console.log(result);
}
catch(error) {
    console.log(error);
}
finally {
    console.log("The end has come!")
}