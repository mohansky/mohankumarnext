import FooterData from "../data/footer.json";

export default function Footer() {
  return (
    <>
      <footer className="bg-mkblue border-t border-mkorange p-8 text-white flex justify-between">
        {FooterData.footnote}
        <div>
          {FooterData.copyright}
          {new Date().getFullYear()} |
          <a className="ml-1 footer-email hover:text-mkorange transition duration-150 ease-in-out" href="mailto:mohansky@gmail.com">
            {FooterData.email}
          </a>
        </div>
      </footer>
    </>
  );
}
