import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";

test("should disabled",()=>{
    const {container} = render(
        <Button isDisabled></Button>
        );
    
    expect(container.querySelector("span.disabled")).toBeInTheDocument();
})