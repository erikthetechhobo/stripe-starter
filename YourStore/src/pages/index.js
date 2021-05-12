import React from "react"

import ItemButton from "../components/ItemButton"
import SubButton from "../components/SubButton";
import SkuButton from "../components/SkuButton";

export default function Home({data}) {
  return(
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <ItemButton />
      <SubButton/>
      <SkuButton/>
    </div>
  );
}

// here for when I add create a single button component and pass props
/* 
  My Queries:

  query MyItemQuery {
    stripePrice(product: {id: {eq: "nostock"}}) {
      id
    }
  }

  query MySkuQuery {
    stripePrice(product: {id: {eq: "testID"}}) {
      id
    }
  }

  query MySubQuery {
    stripePrice(product: {id: {eq: "5sub"}}) {
      id
    }
  }
 */