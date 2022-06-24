// import Container from './container'
// import { EXAMPLE_PATH } from '../lib/constants'
import FooterData from "../data/sitedata.json"

export default function Footer() {
  const footerData = FooterData.siteMetadata[8];  
  return (
    <footer className="d-sm-flex justify-content-between">  
    <p> 
      {footerData.footer.footnote} 
      </p>
    <p> 
      {footerData.footer.copyright} 
      {new Date().getFullYear()} |     
      <a className="ms-1 footer-email" href="mailto:mohansky@gmail.com"> 
      {footerData.footer.email}
      </a>
    </p> 
  </footer>
  )
}
