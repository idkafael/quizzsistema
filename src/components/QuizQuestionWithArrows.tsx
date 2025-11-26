import { useState, useEffect } from 'react'

interface Option {
  text: string
}

interface QuizQuestionWithArrowsProps {
  question: string
  options: Option[]
  onSelect?: (index: number) => void
  onSelectionChange?: (hasSelection: boolean) => void
}

const QuizQuestionWithArrows = ({ question, options, onSelect, onSelectionChange }: QuizQuestionWithArrowsProps) => {
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
            className={`w-full p-4 rounded-lg text-left transition-all flex items-center justify-between ${
              selectedIndex === index
                ? 'bg-azul-medio text-white'
                : 'bg-white text-black border border-gray-200 hover:bg-gray-50'
            }`}
            style={
              selectedIndex === index
                ? { backgroundColor: '#3B82F6' }
                : {}
            }
          >
            <span className="text-base font-medium leading-relaxed flex-1">{option.text}</span>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-3 ${
                selectedIndex === index
                  ? 'bg-white bg-opacity-20'
                  : 'bg-gray-200'
              }`}
            >
              <svg
                className={`w-5 h-5 ${
                  selectedIndex === index ? 'text-white' : 'text-gray-500'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default QuizQuestionWithArrows

