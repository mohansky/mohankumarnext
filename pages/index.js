import {Container} from 'react-bootstrap'
import { CMS_NAME } from '../lib/constants'
import Head from 'next/head' 
import Layout from '../components/layout'
import Services from "../components/services"
import Work from "../components/work"
import Process from "../components/process"
import Contact from "../components/contact" 
import Progresscircle from '../components/progress-circle' 

export default function Index( ) {
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
          <meta property="og:image" content="/images/micon.png" />
        </Head> 
        <Container>
          <Progresscircle/> 
          <Services/> 
          <Work/>
          <Process/>
          <Contact/> 
        </Container>    
      </Layout>
    </>
  )
}