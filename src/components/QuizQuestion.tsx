import { useState, useEffect } from 'react'

interface Option {
  emoji: string
  text: string
}

interface QuizQuestionProps {
  question: string
  options: Option[]
  onSelect?: (index: number) => void
  onSelectionChange?: (hasSelection: boolean) => void
}

const QuizQuestion = ({ question, options, onSelect, onSelectionChange }: QuizQuestionProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handleSelect = (index: number) => {
    setSelectedIndex(index)
    onSelect?.(index)
    onSelectionChange?.(true)
  }

  // Notificar mudança inicial
  useEffect(() => {
    onSelectionChange?.(selectedIndex !== null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex])

  return (
    <div className="mt-8">
      <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
        {question}
      </h2>
      
      <div className="space-y-4 mb-8">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className={`w-full p-4 rounded-lg text-left transition-all ${
              selectedIndex === index
                ? 'bg-azul-medio text-white'
                : 'bg-gray-100 text-black hover:bg-gray-200'
            }`}
            style={
              selectedIndex === index
                ? { backgroundColor: '#3B82F6' }
                : { backgroundColor: '#F3F4F6' }
            }
          >
            <div className="flex items-start gap-3">
              {option.emoji && <span className="text-2xl flex-shrink-0">{option.emoji}</span>}
              <span className="text-base font-medium leading-relaxed">{option.text}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default QuizQuestion

