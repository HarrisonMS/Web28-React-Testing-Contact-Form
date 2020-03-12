
import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import ContactForm from './ContactForm';

//render test

test('it renderst to the screen', async () => {
    const { getByText } = render(<ContactForm />);
    await getByText(/form/i);
});

// Test to see if form accepts submissions
test('Correctly accepts submissions', async () => {
    const { getByLabelText, getByText} = render(<ContactForm />);
    // Grab the forms and submit from the component
    const firstName= await getByLabelText(/first name*/i);
    const lastName = await getByLabelText(/last name*/i);
    const email = await getByLabelText(/email*/i);
    const message = await getByLabelText(/message/i);

    // Send in test values and submit
    fireEvent.change(firstName, {
        target: { name: 'firstName', value: 'bill'}
    });
    fireEvent.change(lastName, {
        target: { name: 'lastName', value: 'lou'}
    });
    fireEvent.change(email, {
        target: { name: 'email', value: 'email@email.com'}
    });
    fireEvent.change(message, {
        target: { name: 'message', value: 'Hello world'}
    });
    const submitButton = await getByText(/submit!/i);
    fireEvent.click(submitButton);
});