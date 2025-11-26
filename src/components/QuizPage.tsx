import Logo from './Logo'
import ProgressBar from './ProgressBar'
import QuizQuestion from './QuizQuestion'
import ContinueButton from './ContinueButton'

interface QuizPageProps {
  question: string
  options: Array<{
    emoji: string
    text: string
  }>
  progress: number
  onContinue?: () => void
}

const QuizPage = ({ question, options, progress, onContinue }: QuizPageProps) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Logo />
        <ProgressBar progress={progress} />
        <QuizQuestion question={question} options={options} />
        <ContinueButton onClick={onContinue} />
      </div>
    </div>
  )
}

export default QuizPage



