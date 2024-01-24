

import {UserForm} from '@/components/UserFrom';
import {render, screen} from '@testing-library/react'

describe("UserFrom Component:", ()=>{
    test("renders correctly", ()=>{
        render(<UserForm/>)
        const ageElement = screen.getByRole("spinbutton",{
            name:/age/i
        })
        expect(ageElement).toBeInTheDocument()
    })
})