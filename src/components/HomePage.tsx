import ProgressBar from './ProgressBar'
import Header from './Header'
import Checklist from './Checklist'
import TabletsSection from './TabletsSection'
import ContinueButton from './ContinueButton'

interface HomePageProps {
  onContinue?: () => void
}

const HomePage = ({ onContinue }: HomePageProps) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-0">
        <ProgressBar progress={15} />
        <div className="mt-6">
          <Header />
          <Checklist />
        </div>
      </div>
      <TabletsSection />
      <div className="max-w-7xl mx-auto px-4">
        <ContinueButton onClick={onContinue} />
      </div>
    </div>
  )
}

export default HomePage

