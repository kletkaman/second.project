import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
      <div className="Hero">
        <div className="HeroGroup">
         <h1>Learn to <br /> design and code React apps</h1>
         <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
         <p>
         <Link to="/page-2/">Watch the video</Link> <br />
         </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
