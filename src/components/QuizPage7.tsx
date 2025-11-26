import { useState } from 'react'
import Logo from './Logo'
import ProgressBar from './ProgressBar'
import QuizQuestionMultiple from './QuizQuestionMultiple'
import ContinueButton from './ContinueButton'
import BackButton from './BackButton'

interface QuizPage7Props {
  onContinue?: () => void
  onBack?: () => void
}

const QuizPage7 = ({ onContinue, onBack }: QuizPage7Props) => {
  const [hasSelection, setHasSelection] = useState(false)
  
  const question = "Em qual dessas áreas você mais tem dificuldade em manter a CONSTÂNCIA e performance? (Múltipla escolha)"
  
  const options = [
    {
      emoji: "📚",
      text: "Rotina de estudos/Aperfeiçoamento (Aprender uma nova skill, curso)"
    },
    {
      emoji: "🥗",
      text: "Alimentação e Nutrição (Comer de forma estratégica para ter energia)"
    },
    {
      emoji: "💪",
      text: "Atividade Física/Treino (Manter a frequência de exercícios)"
    },
    {
      emoji: "🛏️",
      text: "Sono e Descanso (Ter um sono de qualidade e reparador)"
    },
    {
      emoji: "💊",
      text: "Uso de Medicamentos/Suplementos (Tomar o que é preciso, na hora certa)"
    },
    {
      emoji: "💧",
      text: "Hidratação (Beber água suficiente)"
    },
    {
      emoji: "📖",
      text: "Leitura/Consumo de Conteúdo (Aprender de forma consistente)"
    }
  ]

  return (
    <div className="min-h-screen bg-white relative">
      <BackButton onClick={onBack} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Logo />
        <ProgressBar progress={95} />
        <QuizQuestionMultiple question={question} options={options} onSelectionChange={setHasSelection} />
        <ContinueButton onClick={onContinue} disabled={!hasSelection} />
      </div>
    </div>
  )
}

export default QuizPage7

