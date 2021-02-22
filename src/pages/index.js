import React from "react"
import Layout from "../components/layout"
import Cover from "../components/cover"
// import QuoteInterior from '../components/quote'
import WhyUs from '../components/why'
import Services from '../components/services'
import { Divider } from "@material-ui/core"
import Process from '../components/process'
import Gallery from '../components/gallery'
import Project from '../components/projects'
import Project2 from '../components/project2'
import Project3 from '../components/project3'


{/* <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link> */}

const IndexPage = () => {
  return (
    <Layout>
      <Cover />
      <Divider />
      <WhyUs />
      <Divider />
      <Services />
      <Divider />
      <Process />
      <Divider />
      <Gallery />
      <Divider />
      <Project />
      <Project2 />
      <Project3 />
    </Layout>
  )
}

export default IndexPage
