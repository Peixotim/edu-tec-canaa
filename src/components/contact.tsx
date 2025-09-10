"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Mail, Instagram, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const contacts = [
    {
      icon: <MessageCircle className="w-6 h-6 text-green-600" />,
      label: "Telefone Suporte",
      value: "(31) 98505-1313",
      href: "https://wa.me/5531985051313", // link do WhatsApp
    },
    {
      icon: <Mail className="w-6 h-6 text-red-500" />,
      label: "E-mail",
      value: "colegiotecnicoeducacanaa@gmail.com",
      href: "mailto:colegiotecnicoeducacanaa@gmail.com",
    },
    {
      icon: <Instagram className="w-6 h-6 text-pink-500" />,
      label: "Instagram",
      value: "educatec.canaa",
      href: "https://instagram.com/educatec.canaa",
    },
    {
      icon: <MapPin className="w-6 h-6 text-green-600" />,
      label: "Endereço",
      value: "Canaã dos Carajás, 94, Bairro Vale Dourado, Pará",
      href: "https://www.google.com/maps/search/?api=1&query=Canaã+dos+Carajás,+94,+Vale+Dourado,+Pará",
    },
  ];

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-xl rounded-3xl p-10 bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200 mb-20">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center text-gray-900 tracking-tight">
          Contatos da Empresa
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contacts.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-[0_4px_20px_rgba(220,38,38,0.35)] transition-all duration-300 cursor-pointer"
            >
              <div className="p-3 rounded-full bg-gray-100">{item.icon}</div>
              <p className="text-sm font-semibold text-gray-700">
                {item.label}
              </p>
              <p className="text-gray-500 text-center text-sm">{item.value}</p>
            </motion.a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
