import { useState } from 'react'
import Logo from './Logo'
import ProgressBar from './ProgressBar'
import QuizQuestion from './QuizQuestion'
import ContinueButton from './ContinueButton'
import BackButton from './BackButton'

interface QuizPage3Props {
  onContinue?: () => void
  onBack?: () => void
}

const QuizPage3 = ({ onContinue, onBack }: QuizPage3Props) => {
  const [hasSelection, setHasSelection] = useState(false)
  
  const question = "Se você pudesse eliminar APENAS UM obstáculo para manter sua performance e rotina, qual seria?"
  
  const options = [
    {
      emoji: "🧠",
      text: "Eu esqueço: Falta de um sistema visual ou rastreador para lembrar e acompanhar."
    },
    {
      emoji: "📊",
      text: "Não vejo progresso: Parece que nada muda, então a motivação desmorona."
    },
    {
      emoji: "😵",
      text: "É complicado demais: Apps confusos, planilhas chatas, método muito complexo."
    },
    {
      emoji: "❓",
      text: "Falta clareza: Não sei se estou indo bem ou mal, não tenho métricas de sucesso."
    },
    {
      emoji: "💨",
      text: "Perco o Gás: Começo bem, mas a empolgação inicial passa e a disciplina some."
    }
  ]

  return (
    <div className="min-h-screen bg-white relative">
      <BackButton onClick={onBack} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Logo />
        <ProgressBar progress={45} />
        <QuizQuestion question={question} options={options} onSelectionChange={setHasSelection} />
        <ContinueButton onClick={onContinue} disabled={!hasSelection} />
      </div>
    </div>
  )
}

export default QuizPage3

