import React from "react"

import ItemButton from "../components/ItemButton"
import SubButton from "../components/SubButton";
import SkuButton from "../components/SkuButton";

export default function Home() {
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
