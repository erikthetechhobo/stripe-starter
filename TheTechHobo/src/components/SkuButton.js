import React, { useState } from "react"
import GetStripe from "../utils/stripejs"
const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#000",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}
const buttonDisabledStyles = {
  opacity: "0.5",
  cursor: "not-allowed",
}
const SkuButton = () => {
  const [loading, setLoading] = useState(false)
  const redirectToCheckout = async event => {
    event.preventDefault()
    setLoading(true)
    const stripe = await GetStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: "price_1IlJdhGvnCt7xl2S7X6MCR4V", quantity: 1 }],
      successUrl: `http://localhost:8000/success/`,
      cancelUrl: `http://localhost:8000/`,
    })
    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }
  return (
    <button
      disabled={loading}
      style={
        loading ? { ...buttonStyles, ...buttonDisabledStyles } : buttonStyles
      }
      onClick={redirectToCheckout}
    >
      Sku Item
      <div>
          <small>*Stripe doesn't support purchase by SKU with finite stock clientside yet 4/14/21, this is a price object atached to a sku'd item. No inStock interaction</small>
      </div>
    </button>
    
  )
}
export default SkuButton

/*
  
query MyQuery {
  stripePrice(product: {id: {eq: "testID"}}) {
    id
  }
}
  
 */