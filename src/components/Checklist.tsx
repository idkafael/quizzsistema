const Checklist = () => {
  const items = [
    'Leva menos de 2 minutos',
    'Não precisa fazer cadastro'
  ]

  return (
    <div className="flex flex-col gap-2 mb-0 max-w-md mx-auto">
      {items.map((item, index) => (
        <div key={index} className="flex items-center justify-center gap-3">
          <svg
            className="w-5 h-5 text-green-500 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-black text-base text-center">{item}</span>
        </div>
      ))}
    </div>
  )
}

export default Checklist

