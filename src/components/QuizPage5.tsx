import { useState } from 'react'
import Logo from './Logo'
import ProgressBar from './ProgressBar'
import QuizQuestion from './QuizQuestion'
import ContinueButton from './ContinueButton'
import BackButton from './BackButton'

interface QuizPage5Props {
  onContinue?: () => void
  onBack?: () => void
}

const QuizPage5 = ({ onContinue, onBack }: QuizPage5Props) => {
  const [hasSelection, setHasSelection] = useState(false)
  
  const question = 'Quando você pensa em "estabelecer uma rotina de alta performance e novos hábitos", o que vem primeiro na sua mente?'
  
  const options = [
    {
      emoji: "😩",
      text: "Desistência: Ansiedade - Vou começar, mas já sei que vou desistir em breve."
    },
    {
      emoji: "😡",
      text: "Frustração: Já tentei tantas vezes, me esforcei, e não consigo fazer funcionar."
    },
    {
      emoji: "🤔",
      text: "Bloqueio: Confusão - Nem sei por onde começar ou qual hábito priorizar de verdade."
    },
    {
      emoji: "🔋",
      text: "Exaustão: Cansaço - Não tenho energia ou gás mental para mais um método complexo."
    }
  ]

  return (
    <div className="min-h-screen bg-white relative">
      <BackButton onClick={onBack} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Logo />
        <ProgressBar progress={75} />
        <QuizQuestion question={question} options={options} onSelectionChange={setHasSelection} />
        <ContinueButton onClick={onContinue} disabled={!hasSelection} />
      </div>
    </div>
  )
}

export default QuizPage5

