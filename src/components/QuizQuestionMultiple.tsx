import { useState, useEffect } from 'react'

interface Option {
  emoji: string
  text: string
}

interface QuizQuestionMultipleProps {
  question: string
  options: Option[]
  onSelect?: (selectedIndices: number[]) => void
  onSelectionChange?: (hasSelection: boolean) => void
}

const QuizQuestionMultiple = ({ question, options, onSelect, onSelectionChange }: QuizQuestionMultipleProps) => {
  const [selectedIndices, setSelectedIndices] = useState<number[]>([])

  const handleToggle = (index: number) => {
    const newSelected = selectedIndices.includes(index)
      ? selectedIndices.filter(i => i !== index)
      : [...selectedIndices, index]
    
    setSelectedIndices(newSelected)
    onSelect?.(newSelected)
    onSelectionChange?.(newSelected.length > 0)
  }

  // Notificar mudança inicial
  useEffect(() => {
    onSelectionChange?.(selectedIndices.length > 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndices])

  return (
    <div className="mt-8">
      <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
        {question}
      </h2>
      
      <div className="space-y-4 mb-8">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleToggle(index)}
            className={`w-full p-4 rounded-lg text-left transition-all ${
              selectedIndices.includes(index)
                ? 'bg-azul-medio text-white'
                : 'bg-gray-100 text-black hover:bg-gray-200'
            }`}
            style={
              selectedIndices.includes(index)
                ? { backgroundColor: '#3B82F6' }
                : { backgroundColor: '#F3F4F6' }
            }
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">{option.emoji}</span>
              <span className="text-base font-medium leading-relaxed">{option.text}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default QuizQuestionMultiple

