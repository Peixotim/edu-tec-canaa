"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Phone, Mail, Instagram, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const contacts = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      label: "Telefone Suporte",
      value: "(31) 98681-3351",
    },
    {
      icon: <Mail className="w-6 h-6 text-red-500" />,
      label: "E-mail",
      value: "ilconsultoria@outlook.com",
    },
    {
      icon: <Instagram className="w-6 h-6 text-pink-500" />,
      label: "Instagram",
      value: "educatec.canaa",
    },
    {
      icon: <MapPin className="w-6 h-6 text-green-600" />,
      label: "Endereço",
      value: "Canaã dos Carajás,94, Bairro Vale Dourado,Pará",
    },
  ];

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-xl rounded-3xl p-10 bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200 p-6 mb-20 ">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center text-gray-900 tracking-tight">
          Contatos da Empresa
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contacts.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-[0_4px_20px_rgba(220,38,38,0.35)]
transition-all duration-300"
            >
              <div className="p-3 rounded-full bg-gray-100">{item.icon}</div>
              <p className="text-sm font-semibold text-gray-700">
                {item.label}
              </p>
              <p className="text-gray-500 text-center text-sm">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
