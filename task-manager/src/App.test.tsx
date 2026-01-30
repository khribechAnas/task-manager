import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import App from './App';

describe('Task Manager - TDD Demo', () => {
  test("adds a task to the list", () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText("New task"), {
      target: { value: "Learn testing" },
    });
    fireEvent.click(screen.getByText("Add"));
    expect(screen.getByText("Learn testing")).toBeInTheDocument();
  });
});
