// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);
const testNumber = 1;
async function CreateProducts(){
    let productMaker;
    let priceMaker;
    let skuMaker;
    try {
        productMaker = await stripe.products.create({
            name: 'test'+test,
            id: 'testID'+test,
            type: 'good',
            images: [
                "https://files.stripe.com/links/MDB8YWNjdF8xSWZENjZHdm5DdDd4bDJTfGZsX3Rlc3RfMXZVdnVkOGxEak1PeG41SHp3ZlVPR2d300FnHAQ7iH"
            ],
        });
        
        if(productMaker) {
            priceMaker = await stripe.prices.create({
                product: 'testID'+test,
                unit_amount: 500,
                currency: 'usd'
            });
            if(priceMaker){
                skuMaker = await stripe.skus.create({
                    product: 'testID'+test,
                    price: 500,
                    currency: 'usd',
                    id: 'testIDsku'+test,
                    inventory: {type: 'finite', quantity: 1},
                });
            }
        }
    }catch(err) {
        console.log('!product already exists!');
    }

}

CreateProducts();

{/*



stripe.products.create({
    name: 'test2',
    id: 'testID'
});
*/}