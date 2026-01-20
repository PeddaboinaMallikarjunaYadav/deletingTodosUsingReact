import './index.css'

const TodoProfile = props => {
  const {profileDetails, deleteProfile} = props
  const {title, id} = profileDetails
  const onDelete = () => deleteProfile(id)

  return (
    <li className="profileContainer">
      <p className="title">{title}</p>
      <button className="btn" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoProfile
