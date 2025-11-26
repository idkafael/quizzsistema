import { useState } from 'react'
import Logo from './Logo'
import ProgressBar from './ProgressBar'
import QuizQuestion from './QuizQuestion'
import ContinueButton from './ContinueButton'
import BackButton from './BackButton'

interface QuizPage4Props {
  onContinue?: () => void
  onBack?: () => void
}

const QuizPage4 = ({ onContinue, onBack }: QuizPage4Props) => {
  const [hasSelection, setHasSelection] = useState(false)
  
  const question = "Nos últimos 3 meses, quantas vezes você prometeu a si mesmo que iria criar uma nova disciplina ou rotina... e falhou em manter?"
  
  const options = [
    {
      emoji: "🤷",
      text: "1-2 vezes (Ainda estou tentando retomar.)"
    },
    {
      emoji: "😟",
      text: "3-5 vezes (Está começando a ficar frustrante.)"
    },
    {
      emoji: "😤",
      text: "6-10 vezes (Já perdi a conta de quantas vezes comecei do zero.)"
    },
    {
      emoji: "🙇",
      text: "Mais de 10 vezes (Sinto que há algo fundamentalmente errado com a minha abordagem.)"
    }
  ]

  return (
    <div className="min-h-screen bg-white relative">
      <BackButton onClick={onBack} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Logo />
        <ProgressBar progress={60} />
        <QuizQuestion question={question} options={options} onSelectionChange={setHasSelection} />
        <ContinueButton onClick={onContinue} disabled={!hasSelection} />
      </div>
    </div>
  )
}

export default QuizPage4

