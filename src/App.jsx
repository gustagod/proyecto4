import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'


function App() {

  const [infoUpdate, setInfoUpdate] = useState()

  const url = 'https://users-crud.academlo.tech'
  const [users, getUsers, createUser, deleteUser, updateUser] = useCrud(url)
  const [isDisable, setIsDisable] = useState(true)

  const handleNew=()=>{
    setIsDisable(false)
  }
  useEffect(() => {
    getUsers('/users')
  }, [])
  console.log(users);

  return (
    <div className='body'>
      <div className='body__head'>
      <h1 className='body__h1'>Users</h1>
      <button className='body__btnnew' onClick={handleNew}>New user</button>
      </div>

      <FormUser
        createUser={createUser}
        infoUpdate={infoUpdate}
        updateUser={updateUser}
        setInfoUpdate={setInfoUpdate}
        setIsDisable={setIsDisable}
        isDisable={isDisable}
      />
      <div className='body__userCard'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
              setIsDisable={setIsDisable}
      
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
