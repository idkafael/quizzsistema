import bannerImage from '../../assets/images/pagina 1 banner.jpg'

const TabletsSection = () => {
  return (
    <div className="flex justify-center items-center mt-0 mb-0 w-full px-0">
      <img
        src={bannerImage}
        alt="Banner do quiz"
        className="w-full h-auto object-contain"
        style={{
          display: 'block'
        }}
      />
    </div>
  )
}

export default TabletsSection

