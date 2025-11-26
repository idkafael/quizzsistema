import { useState, useEffect } from 'react'

interface CountdownHeaderProps {
  initialMinutes?: number
  initialSeconds?: number
}

const CountdownHeader = ({ initialMinutes = 15, initialSeconds = 0 }: CountdownHeaderProps) => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: initialMinutes,
    seconds: initialSeconds
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 }
        } else {
          return { minutes: 0, seconds: 0 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (value: number) => {
    return value.toString().padStart(2, '0')
  }

  return (
    <div className="w-full mb-4 px-2">
      <div className="bg-pink-50 border-2 border-red-500 rounded-lg p-3 max-w-md mx-auto">
        <div className="text-center">
          <p className="text-sm font-bold text-red-700 leading-tight mb-1">
            Responder o quiz desbloqueou uma
          </p>
          <p className="text-sm font-bold text-red-700 leading-tight mb-2">
            oportunidade exclusiva:
          </p>
          <div className="flex items-center justify-center">
            <div className="bg-white rounded-lg px-3 py-1.5 border-2 border-red-500">
              <span className="text-xl font-bold text-red-700 tabular-nums">
                {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountdownHeader

