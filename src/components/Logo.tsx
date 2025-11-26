import logoImage from '../../assets/images/logo.jpg'

const Logo = () => {
  return (
    <div className="flex justify-center mb-6 md:mb-8">
      <img
        src={logoImage}
        alt="Logo"
        className="h-auto w-32 md:w-48 lg:w-64 max-w-full"
      />
    </div>
  )
}

export default Logo

