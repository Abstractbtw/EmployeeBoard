import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event'

window.confirm = jest.fn() 

const { AddUserForm } = require('./addUserForm')

render(<AddUserForm />)

test(`Render input attributes`, () => {


    expect(screen.getByTestId("name-input")).toBeInTheDocument()

    userEvent.type(screen.getByTestId("name-input"), "Дмитрий")
    expect(screen.getByTestId("name-input")).toHaveValue("Дмитрий");

    userEvent.type(screen.getByTestId("hours-input"), "60")
    expect(screen.getByTestId("hours-input")).toHaveValue(60);

    userEvent.click(screen.getByText(/Add new user/i));

    expect(window.confirm).toHaveBeenCalled();

})