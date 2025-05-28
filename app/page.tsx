import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  FileText,
  UserCheck,
  Smartphone,
  Stethoscope,
  Users,
  Heart,
  ArrowRight,
  CheckCircle,
  Lock,
  Zap,
} from "lucide-react"

export default function VitalinkLanding() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8FAFC" }}>
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "#0077B6" }}
            >
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold" style={{ color: "#0077B6" }}>
              Vitalink
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#caracteristicas" className="hover:transition-colors" style={{ color: "#555555" }}>
              Características
            </a>
            <a href="#para-quien" className="hover:transition-colors" style={{ color: "#555555" }}>
              ¿Para quién?
            </a>
            <a href="#por-que" className="hover:transition-colors" style={{ color: "#555555" }}>
              ¿Por qué?
            </a>
          </div>
          {/*
          <Button className="text-white hover:opacity-90" style={{ backgroundColor: "#0077B6" }}>
            Comenzar
          </Button>
            */}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Badge className="mb-6 text-white" style={{ backgroundColor: "#48CAE4" }}>
          <Stethoscope className="w-4 h-4 mr-2" />
          Plataforma Médica Certificada
        </Badge>

        <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: "#0077B6" }}>
          Vitalink
        </h1>

        <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto" style={{ color: "#555555" }}>
          Conecta salud y tecnología de forma segura
        </p>

        <p className="text-lg mb-8 max-w-4xl mx-auto leading-relaxed" style={{ color: "#888888" }}>
          Una plataforma de comunicación médico-paciente que revoluciona la atención médica con un enfoque seguro,
          directo y humano. Diseñada para cumplir con la Ley Federal de Protección de Datos Personales.
        </p>

     { /*  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="text-white hover:opacity-90" style={{ backgroundColor: "#0077B6" }}>
            <Zap className="w-5 h-5 mr-2" />
            Comenzar Ahora
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="hover:opacity-90"
            style={{ borderColor: "#0077B6", color: "#0077B6" }}
          >
            Ver Demo
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
*/}

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm" style={{ color: "#888888" }}>
          <div className="flex items-center">
            <Shield className="w-4 h-4 mr-2" style={{ color: "#38B000" }} />
            Cumple LFPDPPP
          </div>
          <div className="flex items-center">
            <Lock className="w-4 h-4 mr-2" style={{ color: "#0077B6" }} />
            Datos Encriptados
          </div>
          <div className="flex items-center">
            <UserCheck className="w-4 h-4 mr-2" style={{ color: "#FF8FAB" }} />
            Médicos Verificados
          </div>
        </div>
      </section>

      {/* Características Destacadas */}
      <section id="caracteristicas" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#333333" }}>
            Características Destacadas
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#555555" }}>
            Tecnología avanzada diseñada para la atención médica moderna
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow" style={{ backgroundColor: "#F5F5F5" }}>
            <CardContent className="p-6 text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#0077B6" }}
              >
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#333333" }}>
                Privacidad Primero
              </h3>
              <p style={{ color: "#555555" }}>
                Cumplimiento total con la legislación mexicana en protección de datos personales.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow" style={{ backgroundColor: "#F5F5F5" }}>
            <CardContent className="p-6 text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#38B000" }}
              >
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#333333" }}>
                Historial Integrado
              </h3>
              <p style={{ color: "#555555" }}>
                Acceso rápido a interacciones previas para decisiones mejor informadas.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow" style={{ backgroundColor: "#F5F5F5" }}>
            <CardContent className="p-6 text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#FF8FAB" }}
              >
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#333333" }}>
                Perfiles Verificados
              </h3>
              <p style={{ color: "#555555" }}>Solo profesionales de la salud acreditados pueden atender pacientes.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow" style={{ backgroundColor: "#F5F5F5" }}>
            <CardContent className="p-6 text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#FFAA00" }}
              >
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#333333" }}>
                Diseño Accesible
              </h3>
              <p style={{ color: "#555555" }}>Para todas las edades y niveles de experiencia digital.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Para Quién Es */}
      <section id="para-quien" className="py-16" style={{ backgroundColor: "#0077B6" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">¿Para quién es Vitalink?</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#48CAE4" }}>
              Diseñado para transformar la comunicación en el sector salud
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "#023E8A" }}
                >
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: "#333333" }}>
                  Clínicas y Consultorios
                </h3>
                <p style={{ color: "#555555" }}>
                  Que quieren digitalizar su comunicación y ofrecer un servicio más moderno a sus pacientes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "#38B000" }}
                >
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: "#333333" }}>
                  Médicos
                </h3>
                <p style={{ color: "#555555" }}>
                  Que desean ofrecer una atención más cercana y moderna a sus pacientes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "#FF8FAB" }}
                >
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: "#333333" }}>
                  Pacientes
                </h3>
                <p style={{ color: "#555555" }}>
                  Que buscan resolver dudas sin salir de casa, de forma privada y confiable.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Por Qué Vitalink */}
      <section id="por-que" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#333333" }}>
              ¿Por qué Vitalink?
            </h2>
            <p className="text-xl" style={{ color: "#555555" }}>
              Porque la salud no espera, y la tecnología puede acercarte al cuidado que necesitas sin poner en riesgo tu
              información.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: "#38B000" }} />
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: "#333333" }}>
                    Seguridad Garantizada
                  </h3>
                  <p style={{ color: "#555555" }}>
                    Cumplimiento estricto con las leyes mexicanas de protección de datos.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: "#38B000" }} />
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: "#333333" }}>
                    Acceso Inmediato
                  </h3>
                  <p style={{ color: "#555555" }}>
                    Conecta con tu médico desde cualquier dispositivo, en cualquier momento.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: "#38B000" }} />
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: "#333333" }}>
                    Profesionales Verificados
                  </h3>
                  <p style={{ color: "#555555" }}>Solo médicos acreditados y verificados pueden usar la plataforma.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: "#38B000" }} />
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: "#333333" }}>
                    Historial Completo
                  </h3>
                  <p style={{ color: "#555555" }}>Mantén un registro completo de todas tus consultas y seguimientos.</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: "#F5F5F5" }}>
              <div className="text-center">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "#0077B6" }}
                >
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#333333" }}>
                  La salud en tus manos
                </h3>
                <p className="mb-6" style={{ color: "#555555" }}>
                  Tecnología que acerca el cuidado médico sin comprometer tu privacidad.
                </p>
                {/*<Button className="text-white hover:opacity-90" style={{ backgroundColor: "#0077B6" }}>
                  Comenzar Ahora
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16" style={{ backgroundColor: "#333333" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            ¿Listo para revolucionar la atención médica?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "#CCCCCC" }}>
            Únete a Vitalink y experimenta una nueva forma de conectar con tus pacientes o médicos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           {/* <Button size="lg" className="text-white hover:opacity-90" style={{ backgroundColor: "#0077B6" }}>
              Comenzar Gratis
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hover:opacity-90"
              style={{ borderColor: "#CCCCCC", color: "#CCCCCC" }}
            >
              Contactar Ventas
            </Button>
           */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#F5F5F5" }} className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#0077B6" }}
              >
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold" style={{ color: "#0077B6" }}>
                Vitalink
              </span>
            </div>
            <div className="text-sm" style={{ color: "#888888" }}>
              © 2025 Vitalink. Desarrollado por{" "}
              <a
                href="https://github.com/mael098"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                ivan villegas 
              </a>
              . Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
