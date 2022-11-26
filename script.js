'use strict';

document.addEventListener('DOMContentLoaded', () => {

console.log('Data Request ... ');

const reg = new Promise(function(resolve, reject) {
    setTimeout(() => {

        console.log('Data preparation ... ');

        const product = {
            name: 'TV',
            price: 2000
        }

        if (product.name === 'TV') {
            resolve(product);
        } else {
            reject();
        }
        
    }, 2000);

});

reg.then((product) => {
    setTimeout(() => {
        console.log('Data received, your product - ', product);
    }, 2000);
}).catch(() => {
    setTimeout(() => {
        console.log('No data received ... ');
    }, 4000);
}).finally(() => {
    setTimeout(() => {
        console.log('Clearing the request to get new data ... ');
    }, 4000);
});


});