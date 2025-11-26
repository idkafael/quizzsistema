import { useState, useEffect } from 'react'
import ProgressBar from './ProgressBar'
import BackButton from './BackButton'
import CountdownHeader from './CountdownHeader'
import rastreamentoImage from '../../assets/images/1.png'
import feedbackImage from '../../assets/images/feedback.png'
import bannerFinalImage from '../../assets/images/Captura de tela 2025-11-25 164350.png'
import calendarioSemanalImage from '../../assets/images/Calendario semanal.png'
import estatisticasCrescimentoImage from '../../assets/images/Estatísticas de Crescimento.png'
import aulaImage from '../../assets/images/Aula.png'
import { trackConversion } from '../utils/tracking'

interface ResultPageProps {
  onContinue?: () => void
  onBack?: () => void
}

const ResultPage = ({ onContinue, onBack }: ResultPageProps) => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)
  const [showPopupCriador, setShowPopupCriador] = useState(false)
  const [currentNameCriador, setCurrentNameCriador] = useState('')

  const handlePurchaseClick = () => {
    // Trackar conversão no Meta Pixel e UTMify
    trackConversion('Purchase', {
      content_name: 'Rastreador de Hábitos + Aula Completa',
      content_category: 'Produto Digital',
      value: 42.00,
      currency: 'BRL',
    })

    // Abrir link de compra
    window.open('https://pay.kiwify.com.br/Mehp7oi', '_blank')
  }

  const nomesMasculinos = [
    'João', 'Pedro', 'Lucas', 'Gabriel', 'Matheus', 'Rafael', 'Felipe', 'Carlos', 'Bruno', 'Daniel',
    'André', 'Thiago', 'Marcos', 'Rodrigo', 'Paulo', 'Ricardo', 'Eduardo', 'Fernando', 'Gustavo', 'Diego',
    'Leonardo', 'Marcelo', 'Roberto', 'Antônio', 'José', 'Francisco', 'Marcelo', 'Rafael', 'Vinicius', 'Renato',
    'Alexandre', 'Henrique', 'Fábio', 'Leandro', 'Maurício', 'Sérgio', 'Wagner', 'Juliano', 'Adriano', 'César'
  ]

  const getRandomName = () => {
    const randomIndex = Math.floor(Math.random() * nomesMasculinos.length)
    return nomesMasculinos[randomIndex]
  }

  useEffect(() => {
    // Mostrar popup de criador imediatamente ao carregar
    const firstTimeoutCriador = setTimeout(() => {
      setCurrentNameCriador(getRandomName())
      setShowPopupCriador(true)
      
      // Esconder após 3 segundos
      setTimeout(() => {
        setShowPopupCriador(false)
      }, 3000)
    }, 2000) // Espera 2 segundos antes de mostrar o primeiro

    // Configurar timer para popup de criador a cada 1 minuto
    const intervalCriador = setInterval(() => {
      setCurrentNameCriador(getRandomName())
      setShowPopupCriador(true)
      
      // Esconder após 3 segundos
      setTimeout(() => {
        setShowPopupCriador(false)
      }, 3000)
    }, 60000) // 60 segundos = 1 minuto

    return () => {
      clearTimeout(firstTimeoutCriador)
      clearInterval(intervalCriador)
    }
  }, [])

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white relative">
      <BackButton onClick={onBack} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <CountdownHeader />
        <ProgressBar progress={100} />
        
        {/* Resultado e Diagnóstico */}
        <div className="mt-4 text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-tight">
            DE ACORDO COM SEU<br />DIAGNÓSTICO:
          </h1>
          <p className="text-xl md:text-2xl font-bold text-black mb-4 leading-tight max-w-2xl mx-auto">
            Você não precisa de motivação. Você precisa de um <strong className="underline" style={{ color: '#3B82F6' }}>SISTEMA</strong> que garanta a execução e aumente sua <strong className="underline" style={{ color: '#3B82F6' }}>CONSTÂNCIA</strong>.
          </p>
        </div>

        {/* A Ciência por Trás da Performance */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 text-center">
            A Ciência por Trás da Performance:
          </h2>
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200 max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-green-500 flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-base md:text-lg text-black text-center flex-1 leading-relaxed">
                Seu cérebro libera <strong>Dopamina</strong> (a química da recompensa) cada vez que você marca uma tarefa concluída. Isso se chama <strong>Efeito de Recompensa por Progresso</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Imagem do Rastreamento */}
        <div className="mb-6 flex justify-center">
          <div className="w-full max-w-2xl bg-gray-100 rounded-lg p-4 md:p-6 border-2 border-gray-200">
            <img
              src={rastreamentoImage}
              alt="Rastreamento de Hábito com Checkboxes"
              className="w-full h-auto rounded"
            />
          </div>
        </div>

        <div className="text-center mb-6">
          <p className="text-xl md:text-2xl font-bold text-black leading-tight">
            O PRODUTO É COMPROVADO. NÃO É SÓ TEORIA.
          </p>
        </div>

        {/* Depoimento */}
        <div className="mb-6 flex justify-center">
          <img
            src={feedbackImage}
            alt="Depoimento"
            className="w-full max-w-2xl h-auto rounded-lg"
          />
        </div>

        {/* Oferta */}
        <div className="mb-6 max-w-2xl mx-auto">
          {/* Banner de Oferta */}
          <div className="bg-azul-medio rounded-t-lg p-3 md:p-4" style={{ backgroundColor: '#3B82F6' }}>
            <p className="text-base md:text-lg font-bold text-white text-center">
              OFERTA - R$ 30 DE DESCONTO SÓ HOJE
            </p>
          </div>

          {/* Seção de Produto e Preço */}
          <div className="bg-white rounded-b-lg p-4 md:p-6 relative border-2 border-t-0 border-gray-200">
            <div className="flex items-start justify-between gap-4 mb-4">
              {/* Nome do Produto - Esquerda */}
              <div className="flex-1">
                <p className="text-lg md:text-xl font-bold text-black">
                  Rastreador de Hábitos +
                </p>
                <p className="text-lg md:text-xl font-bold text-black">
                  Aula Completa
                </p>
              </div>

              {/* Caixa de Preço - Direita */}
              <div className="bg-gray-100 rounded-lg p-3 md:p-4 text-right flex-shrink-0">
                <p className="text-sm md:text-base text-gray-600 mb-1">
                  R$ 42,00 à vista ou
                </p>
                <p className="text-xl md:text-2xl font-bold mb-1" style={{ color: '#3B82F6' }}>
                  R$ 6,00
                </p>
                <p className="text-sm md:text-base text-gray-600">
                  em 7x
                </p>
              </div>
            </div>

            {/* Botão CTA */}
            <button
              onClick={handlePurchaseClick}
              className="w-full py-4 md:py-5 bg-red-600 text-white font-bold text-base md:text-lg rounded-lg hover:bg-red-700 transition-colors shadow-lg"
            >
              Quero ter constância nos meus hábitos
            </button>

          </div>
        </div>

        {/* O que você irá receber */}
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4 text-center">
            O que você irá receber para dominar sua rotina?
          </h2>

          <div className="space-y-4 md:space-y-6">
            {/* Item 1 */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-black mb-3">
                1. 📈 A Ferramenta de Rastreador de Hábitos
              </h3>
              <div className="space-y-3 ml-2 md:ml-4">
                <div>
                  <h4 className="text-base md:text-lg font-bold text-black mb-2">
                    Rastreamento por Múltiplas Visões: Acompanhe seu progresso como um líder de projeto.
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-black ml-2">
                    <li><strong>Visão Lista:</strong> Acompanhamento diário e direto.</li>
                    <li><strong>Visão Semanal:</strong> Foco nas 7 prioridades para dominar a próxima semana.</li>
                    <li><strong>Visão Calendário:</strong> Veja padrões mensais e pontos de falha de forma CLARA.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-black mb-2">
                    Gráfico de Constância (Dados Reais):
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-black ml-2">
                    <li><strong>Visualize suas Streaks (Sequências):</strong> Seu cérebro adora ver o progresso.</li>
                    <li><strong>Identifique Seus Melhores Dias:</strong> Otimize sua rotina baseado em DADOS, não em achismo.</li>
                    <li><strong>Celebre Cada Vitória:</strong> Use o dopamine-loop (recompensa por progresso) para te manter em ação.</li>
                  </ul>
                </div>
              </div>

              {/* Imagem de Estatísticas de Crescimento */}
              <div className="mt-6 w-full">
                <img
                  src={estatisticasCrescimentoImage}
                  alt="Estatísticas de Crescimento"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Item 2 */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-black mb-3">
                2. 📅 Planejamento Semanal Integrado
              </h3>
              <p className="text-sm md:text-base text-black mb-3 italic">
                O segredo de quem mantém hábitos? Não é planejar o ano. É DOMINAR A PRÓXIMA SEMANA.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-black ml-2">
                <li>Defina 3-5 prioridades de alto impacto toda semana.</li>
                <li>Reflexões guiadas de fim de semana para corrigir a rota e não repetir os mesmos erros.</li>
              </ul>

              {/* Imagem do Calendário Semanal */}
              <div className="mt-6 w-full">
                <img
                  src={calendarioSemanalImage}
                  alt="Calendário Semanal"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Item 3 */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-black mb-3">
                3. 🎓 Aula Completa de Implementação
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-black ml-2">
                <li>Vídeo passo a passo mostrando TUDO (mesmo se você nunca abriu o Notion)</li>
                <li>Como duplicar o template em 2 cliques</li>
                <li>Como personalizar para seus hábitos específicos</li>
                <li>Primeiros 7 dias: o que fazer exatamente</li>
              </ul>

              {/* Imagem da Aula */}
              <div className="mt-6 w-full">
                <img
                  src={aulaImage}
                  alt="Aula Completa de Implementação"
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Botão CTA */}
              <button
                onClick={handlePurchaseClick}
                className="mt-6 w-full py-4 md:py-5 bg-red-600 text-white font-bold text-base md:text-lg rounded-lg hover:bg-red-700 transition-colors shadow-lg"
              >
                Quero ter constância nos meus hábitos
              </button>
            </div>
          </div>
        </div>

        {/* Como funciona? (Passo a passo) */}
        <div className="mb-4 max-w-2xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-center" style={{ color: '#3B82F6' }}>
            Como funciona? (Passo a passo)
          </h2>

          <div className="space-y-3">
            {/* PASSO 1 */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 md:w-7 md:h-7 bg-blue-500 text-white text-sm font-bold rounded flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <h3 className="text-sm md:text-base font-bold text-black">
                  PASSO 1 → Imediatamente após a compra
                </h3>
              </div>
              <div className="flex items-start gap-2 ml-8">
                <span className="text-lg">👇</span>
                <p className="text-sm md:text-base text-black">
                  Você recebe o acesso para a área de membros com acesso ao template + aula completa de implementação.
                </p>
              </div>
              <div className="mt-2 border-t border-dashed border-gray-300"></div>
            </div>

            {/* PASSO 2 */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 md:w-7 md:h-7 bg-blue-500 text-white text-sm font-bold rounded flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <h3 className="text-sm md:text-base font-bold text-black">
                  PASSO 2 → 15 minutos
                </h3>
              </div>
              <div className="flex items-start gap-2 ml-8">
                <span className="text-lg">🎓</span>
                <div>
                  <p className="text-sm md:text-base text-black">
                    Assiste a aula e configura tudo.
                  </p>
                  <p className="text-sm md:text-base text-black">
                    Você será guiada em cada clique.
                  </p>
                </div>
              </div>
              <div className="mt-2 border-t border-dashed border-gray-300"></div>
            </div>

            {/* PASSO 3 */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 md:w-7 md:h-7 bg-blue-500 text-white text-sm font-bold rounded flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <h3 className="text-sm md:text-base font-bold text-black">
                  PASSO 3 → Poucos minutos por dia
                </h3>
              </div>
              <div className="flex items-start gap-2 ml-8">
                <span className="text-lg">✅</span>
                <div>
                  <p className="text-sm md:text-base text-black">
                    Todo dia você marca seus hábitos.
                  </p>
                  <p className="text-sm md:text-base text-black">
                    E vê seu progresso crescer automaticamente.
                  </p>
                </div>
              </div>
              <div className="mt-2 border-t border-dashed border-gray-300"></div>
            </div>

            {/* Conclusão */}
            <div className="mt-4">
              <p className="text-sm md:text-base text-black">
                <strong>É simples de verdade.</strong> Não é como aqueles apps cheios de botões que você não sabe pra que servem.
              </p>
            </div>
          </div>
        </div>

        {/* Principais Dúvidas */}
        <div className="mb-6 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center" style={{ color: '#3B82F6' }}>
            Principais Dúvidas
          </h2>

          <div className="space-y-0 border border-gray-200 rounded-lg overflow-hidden">
            {/* Pergunta 1 */}
            <div className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleQuestion(0)}
                className="w-full px-4 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-base md:text-lg font-medium text-black">
                  Eu nunca usei o Notion, funciona pra mim?
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${openQuestion === 0 ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openQuestion === 0 && (
                <div className="px-4 pb-4 text-sm md:text-base text-gray-700">
                  <p className="font-bold text-black mb-3">Funciona!</p>
                  <p className="mb-3">
                    O template já vem 100% pronto + você recebe uma <strong>aula completa</strong> mostrando:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Como criar sua conta no Notion (é gratuito)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Como duplicar o template (literalmente 2 cliques)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Como usar no dia a dia (spoiler: é mais simples que usar Instagram)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Como personalizar do seu jeito</span>
                    </li>
                  </ul>
                  <p className="mt-4 mb-3">
                    <strong>Mais de 60% das pessoas que compraram nunca tinham usado Notion antes.</strong> Hoje usam todo dia.
                  </p>
                  <p>
                    A aula tem <strong>15 minutos</strong> e você aprende tudo. Depois é só usar <strong>3 minutos</strong> por dia.
                  </p>
                </div>
              )}
            </div>

            {/* Pergunta 2 */}
            <div className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleQuestion(1)}
                className="w-full px-4 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-base md:text-lg font-medium text-black">
                  E se eu não conseguir usar?
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${openQuestion === 1 ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openQuestion === 1 && (
                <div className="px-4 pb-4 text-sm md:text-base text-gray-700">
                  <p className="font-bold text-black mb-3">Garantia de 7 dias.</p>
                  <p className="mb-3">
                    Use o template por 7 dias completos. Se não gostar, é só me mandar uma mensagem e eu devolvo 100% do valor.
                  </p>
                  <ul className="space-y-1">
                    <li>Sem perguntas inconvenientes.</li>
                    <li>Sem pegar no seu pé.</li>
                    <li>Simples assim.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Pergunta 3 */}
            <div className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleQuestion(2)}
                className="w-full px-4 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-base md:text-lg font-medium text-black">
                  Posso personalizar?
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${openQuestion === 2 ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openQuestion === 2 && (
                <div className="px-4 pb-4 text-sm md:text-base text-gray-700">
                  <p>100%! Você pode adicionar qualquer hábito e mudar tudo.</p>
                </div>
              )}
            </div>

            {/* Pergunta 4 */}
            <div className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleQuestion(3)}
                className="w-full px-4 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-base md:text-lg font-medium text-black">
                  Preciso pagar mensalidade?
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${openQuestion === 3 ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openQuestion === 3 && (
                <div className="px-4 pb-4 text-sm md:text-base text-gray-700">
                  <p>Não! É um pagamento único de R$ 42,00. Você usa para sempre.</p>
                </div>
              )}
            </div>

            {/* Pergunta 5 */}
            <div className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleQuestion(4)}
                className="w-full px-4 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-base md:text-lg font-medium text-black">
                  Funciona mesmo?
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${openQuestion === 4 ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openQuestion === 4 && (
                <div className="px-4 pb-4 text-sm md:text-base text-gray-700">
                  <p className="mb-3">
                    A pergunta é: você vai tentar de novo ou vai continuar no mesmo ciclo?
                  </p>
                  <p className="mb-3">
                    Você já sabe o que acontece quando você não tem um sistema:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mb-4 ml-2">
                    <li>Motivação de segunda que desaparece na quarta.</li>
                    <li>Promessas que você não cumpre.</li>
                    <li>Frustração que se acumula.</li>
                  </ul>
                  <p className="font-bold mb-3">Ou você pode tentar algo diferente hoje.</p>
                  <p className="mb-1">R$ 42,00.</p>
                  <p className="mb-1">15 minutos para configurar.</p>
                  <p className="mb-1">7 dias de garantia.</p>
                  <p className="mb-3">Zero risco.</p>
                  <p className="font-bold">
                    A única coisa que você vai se arrepender é de não ter começado antes.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Timer de Expiração */}
          <div className="mt-6">
            <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-lg border-2 border-red-200 p-5 md:p-6 text-center shadow-md">
              <p className="text-sm md:text-base text-red-800 mb-3 font-medium">
                Responder o quiz desbloqueou uma oportunidade exclusiva:
              </p>
              <div className="inline-block bg-white rounded-lg border-2 border-red-300 px-6 py-3 shadow-sm">
                <p className="text-2xl md:text-3xl font-bold text-red-600">
                  01:30
                </p>
              </div>
            </div>
          </div>

          {/* Botão CTA */}
          <button
            onClick={handlePurchaseClick}
            className="mt-4 w-full py-4 md:py-5 bg-red-600 text-white font-bold text-base md:text-lg rounded-lg hover:bg-red-700 transition-colors shadow-lg"
          >
            Quero o Rastreador de Hábitos
          </button>
        </div>

        {/* Prova Social */}
        <div className="mb-6 max-w-2xl mx-auto">
          <div className="mb-4">
            <img
              src={bannerFinalImage}
              alt="Banner Final"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="text-center">
            <p className="text-base md:text-lg font-bold text-black">
              Atenção: Poucas Vagas com esse Desconto! Corra!
            </p>
          </div>
        </div>

        {/* Popup de Criador */}
        {showPopupCriador && (
          <div 
            className="fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out"
            style={{
              animation: showPopupCriador ? 'slideInFade 0.5s ease-out, fadeOut 0.5s ease-in 2.5s' : 'none',
            }}
          >
            <div 
              className="bg-white rounded-lg shadow-2xl px-4 py-3 border-2 flex items-center gap-3"
              style={{ borderColor: '#3B82F6' }}
            >
              <div 
                className="w-3 h-3 rounded-full"
                style={{ 
                  backgroundColor: '#3B82F6',
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                }}
              ></div>
              <p className="text-sm md:text-base font-semibold text-black">
                <span style={{ color: '#3B82F6', fontWeight: 'bold' }}>{currentNameCriador}</span> acabou de se tornar um criador
              </p>
            </div>
          </div>
        )}
      </div>

      {/* CSS para animação */}
      <style>{`
        @keyframes slideInFade {
          0% {
            opacity: 0;
            transform: translateX(100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

export default ResultPage

