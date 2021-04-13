// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);

async function CreateProducts(){
    let productMaker;
    try {
        productMaker = await stripe.products.create({
            name: 'test',
            id: 'testID',
            images: [
                "https://files.stripe.com/links/MDB8YWNjdF8xSWZENjZHdm5DdDd4bDJTfGZsX3Rlc3RfMXZVdnVkOGxEak1PeG41SHp3ZlVPR2d300FnHAQ7iH"
            ],
        })
        
        if(productMaker) {
            productMaker = await stripe.prices.create({
                product: 'testID',
                unit_amount: 500,
                currency: 'usd'
            })
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