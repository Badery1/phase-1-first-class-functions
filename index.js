function receivesAFunction(callback) {
    callback()
}
function returnsANamedFunction() {
    return function named() {
        console.log(BlipittyBloop);
    }
}
function returnsAnAnonymousFunction() {
    return function() {
        console.log(Grungleflumpin);
    }
}