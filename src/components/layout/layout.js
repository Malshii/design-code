import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyle } from "../styles/GlobalStyle"
import "./layout.css"
import Header from "./Header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>      
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
      <GlobalStyle />
      <Header/>
        <main>{children}</main>        
      </div>
    </>
  )
}

export default Layout
