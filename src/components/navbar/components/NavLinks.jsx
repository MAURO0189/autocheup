import { Link } from "react-router-dom";

const linkStyle =
  "px-3 py-2 rounded-md text-base text-black hover:text-lime-500 transition-colors duration-200 font-roboto";

/**
 * Lista de links de navegación simples (sin dropdown).
 * @param {Array} links - [{ label, to }]
 */
export function NavLinks({ links }) {
  return (
    <>
      {links.map(({ label, to }) => (
        <Link key={label} to={to} className={linkStyle}>
          {label}
        </Link>
      ))}
    </>
  );
}
