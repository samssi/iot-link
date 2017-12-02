exports.execute = () => {
    const randomNumber = Math.random()*50;
    console.log(randomNumber.toFixed(2));
}

exports.interval = () => {
    return 1000;
}