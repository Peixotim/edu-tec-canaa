import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#5A1026] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#FACC15] rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-xl ">E</span>
              </div>
              <div>
                <h3 className="text-xl font-bold  text-[#FACC15]">
                  Educatec Canaã
                </h3>
                <p className="text-xs text-[#FACC15]">
                  Educação Técnica de Excelência
                </p>
              </div>
            </div>
            <p className="text-sm text-[#E5E7EB] leading-relaxed">
              Transformando vidas através da educação. Construindo profissionais
              do futuro.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.instagram.com/educatec.canaa"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-[#E5E7EB] hover:text-[#FACC15] transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Cursos</h4>
            <ul className="space-y-3 text-sm text-[#E5E7EB]">
              <li>
                <a href="#cursos" className="hover:text-[#FACC15]">
                  Área da Saúde
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-[#FACC15]">
                  Administração & Gestão
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-[#FACC15]">
                  Tecnologia e Informática
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-[#FACC15]">
                  Engenharia & Manutenção
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-[#FACC15]">
                  Construção e Infraestrutura
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 */}
          <div>
            <h4 className="font-semibold text-white mb-4">Links Úteis</h4>
            <ul className="space-y-3 text-sm text-[#E5E7EB]">
              <li>
                <a href="#/" className="hover:text-[#FACC15]">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-[#FACC15]">
                  Cursos
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#FACC15]">
                  Contatos
                </a>
              </li>
              <li>
                <a href="#Certificado" className="hover:text-[#FACC15]">
                  Certificado
                </a>
              </li>
              <li>
                <a href="/sistec" className="hover:text-[#FACC15]">
                  SISTEC-MEC
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4 */}
          <div>
            <h4 className="font-semibold text-white mb-4">Entre em Contato</h4>
            <ul className="space-y-4 text-sm text-[#E5E7EB]">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Canaã dos Carajás,94, Bairro Vale Dourado,Pará</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:contato@educatec.com"
                  className="hover:text-[#FACC15]"
                >
                  ilconsultoria@outlook.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <a href="tel:+5531999022636" className="hover:text-[#FACC15]">
                  (31)999022636
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-[#9D1E40] text-center">
          <p className="text-sm text-[#E5E7EB]">
            © {new Date().getFullYear()} Educatec Canaã. Todos os direitos
            reservados.
          </p>
          <p className="text-sm text-[#E5E7EB]">CPNJ : 62.315.934/0001-70</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
