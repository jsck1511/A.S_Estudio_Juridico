import { motion } from "motion/react";
import {
  MapPin,
  Car,
  Scale,
  Briefcase,
  Users,
  Heart,
  FileText,
  MessageCircle,
  Mail,
  Phone,
  IdCard,
  ShieldX,
  UserPlus,
} from "lucide-react";

export default function App() {
  const whatsappNumber = "5491168734969";
  const email = "asbrokersyasoc@gmail.com";

  return (
    <div className="min-h-screen bg-stone-100 font-sans text-stone-900 selection:bg-red-200 selection:text-red-900">
      {/* Header */}
      <header className="bg-stone-50 shadow-sm sticky top-0 z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-black text-red-600 tracking-tighter uppercase">
              A.S Estudio Jurídico
            </span>
            <span className="text-xs text-stone-500 font-medium tracking-wide">
              Dr. Andrés Spaltro - Abogado
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-stone-600 hover:text-green-600 transition-colors font-medium"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              <span>15-6873-4969</span>
            </a>
            <a
              href={`mailto:${email}`}
              className="flex items-center text-stone-600 hover:text-red-600 transition-colors font-medium"
            >
              <Mail className="w-5 h-5 mr-2" />
              <span>{email}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-stone-900 text-stone-50 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://picsum.photos/seed/lawyer/1920/1080?blur=2"
            alt="Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/90 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl flex flex-col items-center"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-red-600/20 text-red-400 font-semibold text-sm mb-8 border border-red-500/30 backdrop-blur-sm">
              <Car className="w-4 h-4 mr-2" />
              Especialistas en Accidentes de Tránsito
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-10 tracking-tight">
              ¿Tuviste un accidente de tránsito? <br />
              <span className="text-red-500">
                Consultanos de forma gratuita.
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center items-center px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-lg transition-all shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Contactar por WhatsApp
              </a>
              <a
                href={`mailto:${email}`}
                className="inline-flex justify-center items-center px-8 py-4 rounded-xl bg-stone-50 hover:bg-stone-200 text-stone-900 font-bold text-lg transition-all shadow-lg"
              >
                <Mail className="w-6 h-6 mr-2" />
                Enviar un Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clarification Section */}
      <section className="py-24 bg-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-6 tracking-tight">
              Tu reclamo es posible
            </h2>
            <p className="text-lg text-stone-700 max-w-2xl mx-auto leading-relaxed">
              Muchas personas creen que no pueden reclamar por ciertas
              irregularidades.{" "}
              <strong className="text-stone-900">La ley te protege</strong> en
              los siguientes casos:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: IdCard,
                title: "No tenés registro",
                desc: "La falta de licencia de conducir no invalida tu derecho a ser indemnizado por los daños sufridos en el accidente.",
              },
              {
                icon: ShieldX,
                title: "No tenés seguro",
                desc: "Aún si circulabas sin seguro o estaba vencido al momento del choque, podés reclamar al responsable.",
              },
              {
                icon: UserPlus,
                title: "Ibas de acompañante",
                desc: "Como pasajero o acompañante, siempre tenés derecho a reclamar, ya sea al conductor de tu vehículo o al otro.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.15, duration: 0.4, ease: "easeOut" }}
                className="bg-stone-100 rounded-3xl p-8 border border-stone-300 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50/80 rounded-bl-full -mr-16 -mt-16 transition-transform duration-700 ease-out group-hover:scale-[1.2]"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-red-100/80 text-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Practice Areas */}
      <section className="py-24 bg-stone-200 border-t border-stone-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-6 tracking-tight">
              Otras Áreas de Práctica
            </h2>
            <p className="text-lg text-stone-700 max-w-2xl mx-auto leading-relaxed">
              Brindamos asesoramiento legal integral en diversas ramas del
              derecho para proteger tus intereses y los de tu familia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Briefcase,
                title: "Derecho Laboral",
                desc: "Despidos, trabajo en negro, diferencias salariales y reclamos indemnizatorios.",
              },
              {
                icon: FileText,
                title: "Accidentes de Trabajo (ART)",
                desc: "Enfermedades profesionales, accidentes in itinere y comisiones médicas.",
              },
              {
                icon: Users,
                title: "Sucesiones",
                desc: "Trámites sucesorios rápidos, declaratoria de herederos e inscripción de bienes.",
              },
              {
                icon: Heart,
                title: "Divorcios",
                desc: "Divorcios de mutuo acuerdo (exprés) o contradictorios, división de bienes.",
              },
              {
                icon: Scale,
                title: "Alimentos",
                desc: "Fijación de cuota alimentaria, aumento, reducción y régimen de visitas.",
              },
            ].map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-stone-100 p-6 rounded-2xl shadow-sm border border-stone-300 flex items-start space-x-5 hover:border-red-200 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-red-50/80 text-red-600 rounded-xl flex items-center justify-center">
                  <area.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-stone-50 font-bold text-lg transition-all shadow-lg shadow-red-600/20"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Consultar por estos temas
            </a>
          </div>
        </div>
      </section>

      {/* Location & Footer */}
      <footer className="bg-stone-900 text-stone-50 pt-24 pb-12 border-t-8 border-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-black mb-2 tracking-tighter uppercase">
                A.S Estudio Jurídico
              </h2>
              <p className="text-red-400 font-medium mb-8">
                Dr. Andrés Spaltro - Abogado, Martillero y Corredor
              </p>

              <p className="text-stone-400 mb-10 max-w-md leading-relaxed">
                Compromiso, experiencia y resultados a tu disposición. Consultor
                Inmobiliario. Defendemos tus derechos con la mayor dedicación.
              </p>

              <div className="space-y-6">
                <div className="flex items-start text-stone-300">
                  <MapPin className="w-6 h-6 mr-4 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-stone-50">Dirección</p>
                    <p className="text-stone-400">
                      Ada. Elflein 3639
                      <br />
                      (1636) La Lucila - Bs. As.
                    </p>
                  </div>
                </div>
                <div className="flex items-start text-stone-300">
                  <Phone className="w-6 h-6 mr-4 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-stone-50">Teléfonos</p>
                    <p className="text-stone-400">
                      Cel: 15-6873-4969
                      <br />
                      Tel: 4794-0580
                    </p>
                  </div>
                </div>
                <div className="flex items-start text-stone-300">
                  <Mail className="w-6 h-6 mr-4 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-stone-50">Email</p>
                    <p className="text-stone-400">asbrokersyasoc@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-96 rounded-3xl overflow-hidden shadow-2xl border border-stone-800 relative">
              <div className="absolute inset-0 bg-stone-800 animate-pulse"></div>
              <iframe
                src="https://maps.google.com/maps?q=Ada.%20Elflein%203639,%20La%20Lucila,%20Buenos%20Aires&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                title="Ubicación del Estudio"
                className="relative z-10"
              ></iframe>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
            <p>
              &copy; {new Date().getFullYear()} A.S Estudio Jurídico. Todos los
              derechos reservados.
            </p>
            <p className="mt-2 md:mt-0">
              Diseñado para brindar soluciones legales efectivas.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
