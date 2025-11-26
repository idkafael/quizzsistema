import { useState } from 'react'
import Logo from './Logo'
import ProgressBar from './ProgressBar'
import QuizQuestion from './QuizQuestion'
import ContinueButton from './ContinueButton'
import BackButton from './BackButton'

interface QuizPage6Props {
  onContinue?: () => void
  onBack?: () => void
}

const QuizPage6 = ({ onContinue, onBack }: QuizPage6Props) => {
  const [hasSelection, setHasSelection] = useState(false)
  
  const question = "Imagine daqui a 30 dias: Você manteve seus hábitos com CONSISTÊNCIA. Como isso mudaria o JOGO na sua vida?"
  
  const options = [
    {
      emoji: "✅",
      text: "Foco e Domínio: Teria mais disciplina e confiança em mim mesmo, sentindo que estou no controle."
    },
    {
      emoji: "🔄",
      text: "Resultados Reais: Estaria visivelmente mais perto dos meus objetivos mais importantes e financeiros."
    },
    {
      emoji: "👑",
      text: "Orgulho e Controle: Me sentiria orgulhoso(a) por finalmente executar o que planejo."
    },
    {
      emoji: "⚡",
      text: "Potência e Clareza: Teria mais energia física e clareza mental para tomar decisões melhores."
    },
    {
      emoji: "📊",
      text: "Evolução Constante: Seria uma versão mais eficaz e poderosa de quem eu sou hoje."
    }
  ]

  return (
    <div className="min-h-screen bg-white relative">
      <BackButton onClick={onBack} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Logo />
        <ProgressBar progress={90} />
        <QuizQuestion question={question} options={options} onSelectionChange={setHasSelection} />
        <ContinueButton onClick={onContinue} disabled={!hasSelection} />
      </div>
    </div>
  )
}

export default QuizPage6

