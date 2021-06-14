import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import logo1 from '../images/logo-sketch.png';
import logo2 from '../images/logo-figma.png';
import logo3 from '../images/logo-studio.png';
import logo4 from '../images/logo-framer.png';
import logo5 from '../images/logo-react.png';
import logo6 from '../images/logo-swift.png';
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from "../components/Wave";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
      <div className="Hero">
        <div className="HeroGroup">
         <h1>Learn to <br /> design and code React apps</h1>
         <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
          <Link to="/page-2/">Watch the video</Link>
          <div className="Logos">
            <img src={logo1} width="50" />
            <img src={logo2} width="50" />
            <img src={logo3} width="50" />
            <img src={logo4} width="50" />
            <img src={logo5} width="50" />
            <img src={logo6} width="50" />
         </div>
          <Wave />
        </div>
      </div>
      <div className="Cards">
	     <h2>11 courses, more coming</h2>
	     <div className="CardGroup">
	        <Card 
	         title="DesignSystem"
	         text="10 sections"
	         image={require('../images/wallpaper.jpg')} />
	        <Card 
	         title="React for Designers"
	         text="11 sections"
	         image={require('../images/wallpaper2.jpg')} />
	        <Card 
	         title="Sound Design"
	         text="5 sections"
	         image={require('../images/wallpaper3.jpg')} />
        	<Card 
	         title="ARKit 2"
	         text="10 sections"
	         image={require('../images/wallpaper4.jpg')} />
           <Card 
	         title="Create a Sketch plugin"
	         text="7 sections"
	         image={require('../images/wallpaper4.jpg')} />
           <Card 
	         title="Swift Advanced"
	         text="22 sections"
	         image={require('../images/wallpaper4.jpg')} />
       </div>
       </div>
       <Section
         image={require('../images/wallpaper2.jpg')}
         logo={require('../images/logo-react.png')}
         title="React for Designers"
         text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
         />
    </div>
  </Layout>
)

export default IndexPage
