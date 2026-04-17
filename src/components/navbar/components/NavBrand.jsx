import { Link } from "react-router-dom";
import LogoApp from "../../../assets/logoApp.png";

export function NavBrand() {
  return (
    <div className="flex items-center gap-2">
      <img className="h-14 w-auto" src={LogoApp} alt="Logo AutoCheckup" />
      <div className="flex flex-col leading-tight">
        <Link
          to="/"
          className="text-2xl md:text-3xl font-roboto font-black text-cyan-950 tracking-wider"
        >
          AUTOCHECKUP
        </Link>
        <p className="text-xs md:text-sm text-lime-500 font-medium font-roboto">
          ANALÍTICA VEHICULAR Y REPORTES HISTÓRICOS
        </p>
      </div>
    </div>
  );
}
