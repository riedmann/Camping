import React from "react"
import Navbar from "../components/navbar"
import * as styles from "./index.module.css"
import { StaticImage } from "gatsby-plugin-image"
import Products from "./products"

export default function Home() {
  return (
    <div >
      <h1>Hellop</h1>
      <Products/>
    </div>
  )
}
