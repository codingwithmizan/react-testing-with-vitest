import {test, describe, expect} from 'vitest';
import {screen, render} from '@testing-library/react';
import Greet from '@/components/Greet'


describe("Greet component", ()=>{
    test("render correctly", ()=>{
        render(<Greet/>)
        const text = screen.getByText(/Hello john/i)
        // expect(text).toHaveLength(10)
    })
})