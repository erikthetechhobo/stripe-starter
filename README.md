<h1 align="center">
  Gatsby/Stripe Client Side Checkout
</h1>

## 🚀 Quick start

1.  **Clone/NPM Install**

    ```shell
      cd YourStore
      npm install
    ```
    
    add .env.development to your .gitignore file

1.  **Create a [Stripe](https://stripe.com) Account**

    Log in to the dashboard and make sure "Viewing test data" is selected
    Click on settings on the bottom of the left navigation
    Under Product Settings find "Payments > Checkout settings"
    Bottom of the page click "Enable client-only integration"
        You do not need to enter domain addresses while testing, in live mode you will need a https site.

1.  **API Keys**

    From the left navigation on click "Developers" then "API keys"
    or
    See your keys here: https://dashboard.stripe.com/apikeys

    In '/YourStore' create a file named .env.development and add these variables
        
        STRIPE_PUBLISHABLE_KEY=
        STRIPE_SECRET_KEY=
        
    Set them equal to the keys given to you by Stripe, they should start with "pk_test" for publishable key and "sk_test" for secret key. If they don't you are in live mode and not test mode.

1.  **Run Project**
    ```shell
      cd YourStore
      gatsby develop
     ```

    On the stripe dashboard click "Products" and you'll see the 3 items. 

      test is a skud item with inventory but not fully supported by Stripe yet

      unlimited item is just that, unlimited - no inventory

      $5 sub will do reacurring payments, but if you want to cancell them you'll have to do it through the dashboard. You will need some sort of user authentication to allow customers to do so.
    
    To test transactions use credit card number 4242 4242 4242 4242 with any legal exp date cvc code.
