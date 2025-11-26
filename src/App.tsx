import { useState } from 'react'
import HomePage from './components/HomePage'
import QuizPage2 from './components/QuizPage2'
import QuizPage3 from './components/QuizPage3'
import QuizPage4 from './components/QuizPage4'
import QuizPage5 from './components/QuizPage5'
import QuizPage6 from './components/QuizPage6'
import QuizPage7 from './components/QuizPage7'
import QuizPage8 from './components/QuizPage8'
import ResultPage from './components/ResultPage'

function App() {
  const [currentPage, setCurrentPage] = useState(1)

  const handleContinue = () => {
    setCurrentPage(currentPage + 1)
  }

  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  if (currentPage === 1) {
    return <HomePage onContinue={handleContinue} />
  }

  if (currentPage === 2) {
    return <QuizPage2 onContinue={handleContinue} onBack={handleBack} />
  }

  if (currentPage === 3) {
    return <QuizPage3 onContinue={handleContinue} onBack={handleBack} />
  }

  if (currentPage === 4) {
    return <QuizPage4 onContinue={handleContinue} onBack={handleBack} />
  }

  if (currentPage === 5) {
    return <QuizPage5 onContinue={handleContinue} onBack={handleBack} />
  }

  if (currentPage === 6) {
    return <QuizPage6 onContinue={handleContinue} onBack={handleBack} />
  }

  if (currentPage === 7) {
    return <QuizPage7 onContinue={handleContinue} onBack={handleBack} />
  }

  if (currentPage === 8) {
    return <QuizPage8 onContinue={handleContinue} onBack={handleBack} />
  }

  if (currentPage === 9) {
    return <ResultPage onContinue={handleContinue} onBack={handleBack} />
  }

  return <div>Página não encontrada</div>
}

export default App

