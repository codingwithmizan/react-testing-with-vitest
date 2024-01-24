
import {useFormContext} from 'react-hook-form'

export const UserFormWithContext = () => {
    const {register} = useFormContext()
  return (
    <div>
        <div className='mb-4'>
            <label htmlFor="name">Name : </label>
            <input type="text" id='name' {...register("name")} className='border' />
        </div>
        <div className='mb-4'>
            <label htmlFor="email">Email : </label>
            <input type="text" id='email' {...register("email")} className='border' />
        </div>
    </div>
  )
}
