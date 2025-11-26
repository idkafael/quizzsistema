import { useState } from 'react'
import Logo from './Logo'
import ProgressBar from './ProgressBar'
import QuizQuestion from './QuizQuestion'
import ContinueButton from './ContinueButton'
import BackButton from './BackButton'

interface QuizPage2Props {
  onContinue?: () => void
  onBack?: () => void
}

const QuizPage2 = ({ onContinue, onBack }: QuizPage2Props) => {
  const [hasSelection, setHasSelection] = useState(false)
  
  const question = "Seja 100% honesto: Qual é o seu ciclo MAIS comum quando você tenta construir um novo hábito/disciplina?"
  
  const options = [
    {
      emoji: "🔥",
      text: "Fogo de Palha: Começo com foco total na segunda-feira → Desisto na quarta."
    },
    {
      emoji: "😴",
      text: "Ritmo Perdido: Mantenho por 1-2 semanas → Perco o ritmo e paro tudo."
    },
    {
      emoji: "🤯",
      text: "Sobrecarga: Começo muitos objetivos ao mesmo tempo → Fico sobrecarregado e abandono a maioria."
    },
    {
      emoji: "📋",
      text: "Planejamento Eterno: Planejo demais, mas nunca começo a executar de verdade."
    },
    {
      emoji: "🔄",
      text: "Consistência Zero: Até consigo manter alguns hábitos → Mas sem consistência real, falho quando preciso."
    }
  ]

  return (
    <div className="min-h-screen bg-white relative">
      <BackButton onClick={onBack} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Logo />
        <ProgressBar progress={30} />
        <QuizQuestion question={question} options={options} onSelectionChange={setHasSelection} />
        <ContinueButton onClick={onContinue} disabled={!hasSelection} />
      </div>
    </div>
  )
}

export default QuizPage2

