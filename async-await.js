async function getAsync() {
    console.log('Async function.');
    return Promise.resolve(1);
}

getAsync().then(function(result) {
    console.log(result)
});
