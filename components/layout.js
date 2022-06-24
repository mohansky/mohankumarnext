import { baseURL } from "../lib/constants";
import { useRouter } from "next/router";
import Header from "./header";
import Footer from "./footer";
import Hero from "./hero"; 
import Meta from "./meta";

export default function Layout({ children }) {
  const router = useRouter();
  const rootPath = `${baseURL}`;
  const isRootPath = router.route === rootPath;

  let header;
  if (isRootPath) {
    header = (
      <>
        <Hero />
        <Header />
        
      </>
    );
  } else {
    header = <Header />;
  }

  return (
    <div data-is-root-path={isRootPath}>
      <Meta/>
      {header}
      
      <main>{children}</main>
      <Footer />
    </div>
  );
}
