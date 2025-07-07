

import { render,screen } from "@testing-library/react";
import { New } from "./new";

test('test case one' ,()=>{
     render(<New/>);
     let title = screen.getAllByTestId(title)
     expect(title).toHavetextContect('Name')
})