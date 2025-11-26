interface ContinueButtonProps {
  onClick?: () => void
  disabled?: boolean
}

const ContinueButton = ({ onClick, disabled = false }: ContinueButtonProps) => {
  return (
    <div className="flex justify-center mt-0 mb-0">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`w-full max-w-md px-8 py-4 font-bold text-lg rounded-lg transition-opacity shadow-lg ${
          disabled
            ? 'bg-gray-400 text-white cursor-not-allowed opacity-60'
            : 'bg-azul-medio text-white hover:opacity-90'
        }`}
        style={disabled ? {} : { backgroundColor: '#3B82F6' }}
      >
        Continuar
      </button>
    </div>
  )
}

export default ContinueButton

