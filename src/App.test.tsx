import { render, screen, fireEvent } from '@testing-library/react'
import { expect, test, describe } from 'vitest'
import App from './App'

describe('App component', () => {
  test('renders get started text', () => {
    render(<App />)
    expect(screen.getByText(/Get started/i)).toBeInTheDocument()
  })

  test('increments counter on click', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is/i })
    expect(button).toHaveTextContent('Count is 0')
    fireEvent.click(button)
    expect(button).toHaveTextContent('Count is 1')
  })
})
