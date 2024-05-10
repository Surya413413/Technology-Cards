import './index.css'

const ListDetails = props => {
  const {userDetails} = props
  const {title, description, imgUrl, className} = userDetails
  return (
    <div className="all">
      <li className="boxs-container" className={className}>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <img src={imgUrl} alt={title} />
        </div>
      </li>
    </div>
  )
}
export default ListDetails
