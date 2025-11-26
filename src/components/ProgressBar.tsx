interface ProgressBarProps {
  progress: number
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto mb-0">
      <div className="w-full h-1 rounded-full overflow-hidden relative">
        {/* Background - parte não preenchida (roxo claro/translúcido) */}
        <div 
          className="w-full h-full absolute"
          style={{ backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
        />
        {/* Progress - parte preenchida */}
        <div
          className="h-full rounded-full transition-all duration-300 relative z-10"
          style={{ 
            width: `${progress}%`,
            backgroundColor: '#3B82F6'
          }}
        />
      </div>
    </div>
  )
}

export default ProgressBar

