import {UserFormWithContext} from '@/components/UserFormWithContext';
import {render, screen} from '@testing-library/react'
import {FormProvider, useForm} from 'react-hook-form'

const UserTestForm = () =>{
    const methods = useForm()
    return(
        <FormProvider {...methods}>
            <UserFormWithContext/>
        </FormProvider>
    )
}

describe("UserFrom Component:", ()=>{
    test("renders correctly", ()=>{
        render(<UserTestForm/>)
        const nameElement = screen.getByRole("textbox",{
            name:/name/i
        })
        expect(nameElement).toBeInTheDocument()
    })
})