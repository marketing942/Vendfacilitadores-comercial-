import Link from "next/link";

const tools = [
  {
    href: "/calculadora",
    title: "Calculadora de Parcelas",
    description: "Simule juros, parcelas e o valor líquido recebido via Guru + Pagar.me",
    icon: (
      <svg className="w-6 h-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    iconBg: "bg-green-100 group-hover:bg-green-200",
    border: "hover:border-green-400",
    badge: "text-green-700 bg-green-50",
  },
  {
    href: "/calculadora-ton",
    title: "Calculadora Maquineta TON",
    description: "Simule taxas da TON por plano (Super, Turbo, Max) em Pix, débito e crédito parcelado",
    icon: (
      <svg className="w-6 h-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    iconBg: "bg-amber-100 group-hover:bg-amber-200",
    border: "hover:border-amber-400",
    badge: "text-amber-700 bg-amber-50",
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 flex flex-col min-h-[calc(100vh-3.5rem)]">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Facilitadores Comercial</h1>
        <p className="text-lg text-gray-500 mb-6">Ferramentas para agilizar o dia a dia do time comercial</p>
        <div className="inline-block bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-3 rounded-2xl shadow-sm">
          <p className="text-base font-semibold tracking-wide">Keep Calm And Bora Vender 🔥</p>
          <p className="text-sm text-green-100 mt-0.5">Nosso time é foda!</p>
        </div>
      </div>

      {/* Tools grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
        {tools.map((tool) => (
          <Link key={tool.href} href={tool.href} className="group">
            <div className={`bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 ${tool.border}`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${tool.iconBg}`}>
                {tool.icon}
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">{tool.title}</h2>
              <p className="text-sm text-gray-500">{tool.description}</p>
              <span className={`inline-block mt-4 text-xs font-medium px-2 py-1 rounded-full ${tool.badge}`}>
                Disponível
              </span>
            </div>
          </Link>
        ))}

        <div className="bg-white rounded-2xl shadow-sm border border-dashed border-gray-200 p-6 opacity-50 cursor-not-allowed">
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-gray-400 mb-1">Em breve</h2>
          <p className="text-sm text-gray-400">Novas ferramentas serão adicionadas aqui</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-gray-400">
        <span>
          Idealizador:{" "}
          <a
            href="https://www.instagram.com/itallomota1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 font-medium hover:text-pink-500 transition-colors"
          >
            @itallomota1
          </a>
        </span>
        <span className="hidden sm:inline text-gray-200">·</span>
        <span>
          Programador:{" "}
          <a
            href="https://claude.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 font-medium hover:text-orange-500 transition-colors"
          >
            Claude Code
          </a>
        </span>
      </footer>
    </div>
  );
}
