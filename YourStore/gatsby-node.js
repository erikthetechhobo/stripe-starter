require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);
async function CreateProducts(){
    let productMaker;
    let priceMaker;
    let skuMaker;
    try {
        productMaker = await stripe.products.create({
            name: 'test',
            id: 'testID',
            type: 'good',
            images: [
                "https://files.stripe.com/links/MDB8YWNjdF8xSWZENjZHdm5DdDd4bDJTfGZsX3Rlc3RfMXZVdnVkOGxEak1PeG41SHp3ZlVPR2d300FnHAQ7iH"
            ],
        });
        if(productMaker) {
            priceMaker = await stripe.prices.create({
                product: 'testID',
                unit_amount: 500,
                currency: 'usd',
            });
            if(priceMaker){
                skuMaker = await stripe.skus.create({
                    product: 'testID',
                    price: 500,
                    currency: 'usd',
                    id: 'testIDsku',
                    inventory: {type: 'finite', quantity: 1},
                });
            }
        }
    }catch(err) {
        console.log('!product already exists!\n', err);
    }
}

async function UnlimitedProduct(){
    let productMaker;
    let priceMaker;
    try {
        productMaker = await stripe.products.create({
            name: 'unlimited item',
            id: 'nostock',
            images: [
                "https://files.stripe.com/links/MDB8YWNjdF8xSWZENjZHdm5DdDd4bDJTfGZsX3Rlc3RfMXZVdnVkOGxEak1PeG41SHp3ZlVPR2d300FnHAQ7iH"
            ],
        });
        
        if(productMaker) {
            priceMaker = await stripe.prices.create({
                product: 'nostock',
                unit_amount: 500,
                currency: 'usd',
            });
        }
    }catch(err) {
        console.log('!product already exists!\n', err);
    }
}

async function CreateSubscription(){
    let productMaker;
    let priceMaker;
    try {
        productMaker = await stripe.products.create({
            name: '$5 dollar subscription',
            id: '5sub',
            type: 'service',
            images: [
                "https://files.stripe.com/links/MDB8YWNjdF8xSWZENjZHdm5DdDd4bDJTfGZsX3Rlc3RfMXZVdnVkOGxEak1PeG41SHp3ZlVPR2d300FnHAQ7iH"
            ],
        });
        
        if(productMaker) {
            priceMaker = await stripe.prices.create({
                product: '5sub',
                unit_amount: 500,
                currency: 'usd',
                recurring : {
                    interval: 'month',
                    interval_count: 1
                },
            });
        }
    }catch(err) {
        console.log('!sub fail!\n', err);
    }
}

CreateProducts();
UnlimitedProduct();
CreateSubscription();