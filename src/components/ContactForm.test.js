import React from "react";
import { render, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";
import userEvent from "@testing-library/user-event";

test("ContactForm render without errors", () => {
    render (<ContactForm />);

    const firstNameInput = screen.getByLabelText(/name/i);
    const lastNameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
    const messageInput = screen.getByLabelText(/message/i);

    
    userEvent.type(firstNameInput, "Edd");
    userEvent.type(lastNameInput, "Burke");
    userEvent.type(emailInput, "bluebill1049@hotmail.com");
    userEvent.type(messageInput, "");
    
    const newFirstNameInput = screen.findAllByText(/Bob/i);
    const newLastNameInput = screen.findAllByText(/Random/i);
    const newEmailInput = screen.findAllByText(/Bob@Randomemail.com/i)
    const newMessageInput = screen.findAllByText(/Hello World/i)
    
    expect(newFirstNameInput).toMatchObject(/Bob/i);
    expect(newLastNameInput).toMatchObject(/Random/i);
    expect(newEmailInput).toMatchObject(/Bob@Randomemail.com/i);
    expect(newMessageInput).toMatchObject(/Hello World/i)

    const button = screen.getByRole( "button", {name: /submit/i })
    userEvent.click(button);
});

