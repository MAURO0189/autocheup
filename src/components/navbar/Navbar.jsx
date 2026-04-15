import { NavBrand } from "./components/NavBrand";
import { NavDropdown } from "./components/NavDropdown";
import { NavLinks } from "./components/NavLinks";
import { AuthButtons } from "./components/AuthButtons";
import { MobileMenu } from "./components/MobileMenu";
import { MobileMenuButton } from "./components/MobileMenuButton";
import { useDropdown } from "./hooks/useDropdown";
import { useMobileMenu } from "./hooks/useMobileMenu";
import { NAV_LINKS, SERVICE_LINKS } from "./config/navLinks";

export default function Navbar() {
  const { openDropdown, toggle, open, scheduledClose, closeAll } =
    useDropdown(150);
  const { isOpen, toggle: toggleMobile, close: closeMobile } = useMobileMenu();

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-3 flex flex-wrap md:flex-nowrap justify-between items-center gap-3">
        <NavBrand />

        {/* Desktop links */}
        <div className="hidden md:flex gap-2 items-center relative">
          <NavLinks links={NAV_LINKS} />
          <NavDropdown
            label="Buscar"
            items={SERVICE_LINKS}
            isOpen={openDropdown === "services"}
            onToggle={() => toggle("services")}
            onMouseEnter={() => open("services")}
            onMouseLeave={scheduledClose}
            onItemClick={closeAll}
          />
        </div>

        <AuthButtons />

        <MobileMenuButton onClick={toggleMobile} isOpen={isOpen} />
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <MobileMenu
          onClose={closeMobile}
          openDropdown={openDropdown}
          onToggleDropdown={toggle}
        />
      )}
    </nav>
  );
}
