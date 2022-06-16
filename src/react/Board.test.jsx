import { render, screen } from '@testing-library/react'
import Board from './Board'

    test('Renders userTable component', () => {
        render(<Board/>)
        const linkElement = screen.getByText(/Users/i);
        expect(linkElement).toBeInTheDocument();
    });
