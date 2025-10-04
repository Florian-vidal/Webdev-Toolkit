import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <p>
  © {new Date().getFullYear()} Florian Vidal | Webdev Toolkit |{" "}
  <a
    href="https://portfolio-florian-vidal.netlify.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline text-blue-400"
  >
    Portfolio
  </a>
</p>

    </footer>
  );
}

export default Footer;
