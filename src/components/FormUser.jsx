import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import './styles/FormUsers.css'


const FormUser = ({createUser,infoUpdate,updateUser,setInfoUpdate,setIsDisable,isDisable}) => {

    const { handleSubmit, register, reset} = useForm()

    

    useEffect(()=>{
        reset(infoUpdate)
    },[infoUpdate])

    const handelExit =()=>{
        setInfoUpdate()
        setIsDisable(true)
        reset({
            email:'',
            password:'',
            first_name:'',
            last_name:'',
            birthday:''
        })
        
    }

    const submit = data => {
        if(infoUpdate){
            //update
            updateUser('/users', infoUpdate.id, data)
            setInfoUpdate()
            setIsDisable(true)
        }
        else{
            //create
            createUser('/users',data)
            setIsDisable(true)
        }

        reset({
            email:'',
            password:'',
            first_name:'',
            last_name:'',
            birthday:''
        })

    }
    return (
        <div className={`form-container ${isDisable && 'form__disable'}`}>
            <form className="form" onSubmit={handleSubmit(submit)}>
                <h2 className="form__title">Form User</h2>
                <div className="form__x" onClick={handelExit}><i className='bx bxs-x-square'></i></div>
                <label className="form__label">
                    <span className='form__span'>Email</span>
                    <input className="form__input" {...register('email')} type="email" />
                </label>

                <label className="form__label">
                    <span className='form__span'>Password</span>
                    <input className="form__input" {...register('password')} type="password" />
                </label>

                <label className="form__label">
                    <span className='form__span'>First name</span>
                    <input className="form__input" {...register('first_name')} type="text" />
                </label>

                <label className="form__label">
                    <span className='form__span'>Last name</span>
                    <input className="form__input" {...register('last_name')} type="text" />
                </label>

                <label className="form__label">
                    <span className='form__span'>Birthday</span>
                    <input className="form__input" {...register('birthday')} type="date" />
                </label>

                <button className="form__btn">Submit</button>
            </form>
        </div>

    )
}

export default FormUser