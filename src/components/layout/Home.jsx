import {
  Car,
  Database,
  ChartColumn,
  Shield,
  FileText,
  Bell,
  Download,
  Headphones,
  TrendingUp,
} from "lucide-react";
import LogoVerde from "../../assets/logoVerdeFondoTransparente.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-cyan-950 text-white py-16 md:py-20 rounded-md">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="flex items-center justify-center gap-1 text-4xl md:text-5xl font-bold mb-6 text-white tracking-wide">
            <img
              className="h-14 md:h-16 w-auto"
              src={LogoVerde}
              alt="AutoCheck Logo"
            />
            <span>AutoCheckup</span>
          </h1>
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed tracking-normal">
            Toda la información del vehículo y las reclamaciones, en un solo
            panel. Navega con claridad, actúa con confianza y toma decisiones
            rápidas.
          </p>
          <button className="bg-lime-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-lime-600 transition tracking-wide">
            Comenzar ahora
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center">
          <div className="bg-white rounded-xl shadow p-6 md:p-8 hover:shadow-lg transition">
            <Car className="mx-auto h-10 w-10 md:h-12 md:w-12 text-lime-500 mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 tracking-wider text-cyan-950">
              Consulta Vehicular
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Accede al historial y estado legal del vehículo, verifica multas,
              matriculación y más en segundos.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 md:p-8 hover:shadow-lg transition">
            <Database className="mx-auto h-10 w-10 md:h-12 md:w-12 text-lime-500 mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 tracking-wider text-cyan-950">
              Reclamaciones del Vehículo
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Comprueba coberturas, aseguradoras y el estado de las pólizas para
              entender el riesgo y tomar decisiones informadas.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 md:p-8 hover:shadow-lg transition">
            <ChartColumn className="mx-auto h-10 w-10 md:h-12 md:w-12 text-lime-500 mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 tracking-wider text-cyan-950">
              Analítica
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Combina la consulta vehicular con las reclamaciones para obtener
              insights claros sobre el estado y riesgos asociados al vehículo.
            </p>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-12 md:py-14 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-950 mb-4 tracking-wide">
              Funcionalidades Premium
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Desbloquea todo el potencial de AutoCheck con nuestra suscripción.
              Accede a herramientas avanzadas y reportes detallados para
              gestionar tu vehículo como un profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-xl shadow p-6 md:p-8 hover:shadow-lg transition">
              <Shield className="h-12 w-12 text-lime-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-cyan-950">
                Consultas Ilimitadas
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Realiza consultas ilimitadas al RUNT, Fasecolda y telemetría sin
                restricciones. Verifica múltiples vehículos cuando necesites.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6 md:p-8 hover:shadow-lg transition">
              <FileText className="h-12 w-12 text-lime-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-cyan-950">
                Reportes Avanzados
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Genera reportes detallados con análisis completo del historial
                vehicular, estado legal y recomendaciones personalizadas.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6 md:p-8 hover:shadow-lg transition">
              <Bell className="h-12 w-12 text-lime-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-cyan-950">
                Alertas en Tiempo Real
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Recibe notificaciones instantáneas sobre cambios en el estado de
                tu vehículo, vencimientos y actualizaciones importantes.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6 md:p-8 hover:shadow-lg transition">
              <TrendingUp className="h-12 w-12 text-lime-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-cyan-950">
                Análisis de Tendencias
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Visualiza tendencias de consumo, mantenimiento y comportamiento
                para optimizar costos y prolongar la vida útil de tu vehículo.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6 md:p-8 hover:shadow-lg transition">
              <Download className="h-12 w-12 text-lime-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-cyan-950">
                Exportación de Datos
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Exporta toda tu información en formatos PDF, Excel o CSV para
                compartir con talleres, aseguradoras o uso personal.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6 md:p-8 hover:shadow-lg transition">
              <Headphones className="h-12 w-12 text-lime-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-cyan-950">
                Soporte Prioritario
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Acceso directo a nuestro equipo de soporte especializado con
                respuesta garantizada en menos de 24 horas.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-lime-500 text-white font-semibold px-8 py-4 rounded-lg shadow hover:bg-lime-600 transition tracking-wide">
              Comenzar Suscripción Premium
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
