import './styles/UseCard.css'

const UserCard = ({user, deleteUser,setInfoUpdate,setIsDisable}) => {
const handleDelete=()=>{
deleteUser('/users',user.id)
}

const handleEdit =()=>{
    setInfoUpdate(user)
    setIsDisable(false)
}

  return (
    <article className="article">
<h3 className="article__name">{user.first_name} {user.last_name}</h3>
<ul className="article__info">
    <li className="article__list"><span className="article__dataname">Email</span><span className="article__data">{user.email}</span></li>
    <li className="article__list"><span className="article__dataname">Birthday</span><span className="article__data">{user.birthday}</span></li>
</ul>
<div className='article__botones'>
<button className="article__del" onClick={handleDelete}><i className='bx bxs-trash'></i></button>
<button className="article__edit" onClick={handleEdit}><i className='bx bxs-edit'></i></button>
</div>

    </article>
  )
}

export default UserCard