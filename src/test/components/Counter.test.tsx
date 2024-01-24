
import {render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import {Counter} from "@/components/Counter";
import {expect} from "vitest";


describe("Counter component:", ()=>{
    test("renders correctly", ()=>{
    render(<Counter/>)
    //    console.log(container.debug());
       
        const headingElement = screen.getByRole("heading")
        expect(headingElement).toBeInTheDocument()
    })

    test("renders with count value 0", ()=>{
        render(<Counter/>)
        const headingElement = screen.getByRole("heading")
        expect(headingElement).toHaveTextContent("0")
    })
    test("renders with count value 1", async ()=>{
        userEvent.setup()
       const {debug} = render(<Counter/>)
    
        const incrementBtn = screen.getByRole("button", {
            name: /increment/i
        })
        expect(incrementBtn).toBeInTheDocument()
        await userEvent.click(incrementBtn)
        console.log(debug());
        await userEvent.click(incrementBtn)
        const headingElement = screen.getByRole("heading")
        expect(headingElement).toHaveTextContent("2")
        
        const decrementBtn = screen.getByRole("button", {
            name: /decrement/i
        })
        
        expect(decrementBtn).toBeInTheDocument()
    })
})