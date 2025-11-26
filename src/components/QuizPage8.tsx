import { useState } from 'react'
import Logo from './Logo'
import ProgressBar from './ProgressBar'
import QuizQuestionWithArrows from './QuizQuestionWithArrows'
import ContinueButton from './ContinueButton'
import BackButton from './BackButton'

interface QuizPage8Props {
  onContinue?: () => void
  onBack?: () => void
}

const QuizPage8 = ({ onContinue, onBack }: QuizPage8Props) => {
  const [hasSelection, setHasSelection] = useState(false)
  
  const question = "Você estaria interessado(a) em uma solução que te ajudasse a manter constância e performance nos seus hábitos?"
  
  const options = [
    {
      text: "SIM! Só preciso de um sistema que funcione de verdade."
    },
    {
      text: "Com certeza, se for realmente simples e prático."
    },
    {
      text: "Talvez, depende do quão rápido isso me faria avançar."
    },
    {
      text: "Preciso entender melhor como funcionaria na prática."
    }
  ]

  return (
    <div className="min-h-screen bg-white relative">
      <BackButton onClick={onBack} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Logo />
        <ProgressBar progress={100} />
        <QuizQuestionWithArrows question={question} options={options} onSelectionChange={setHasSelection} />
        <ContinueButton onClick={onContinue} disabled={!hasSelection} />
      </div>
    </div>
  )
}

export default QuizPage8

