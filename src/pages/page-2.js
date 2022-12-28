import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import PurchaseButton from "../components/buttons/PurchaseButton"

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/page-2">
      <PurchaseButton />
    </Link>
  </Layout>
)
export const Head = () => <Seo title="Page two" />

export default SecondPage
