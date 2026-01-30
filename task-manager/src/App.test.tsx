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

  test("deletes a task from the list", () => {
    render(<App />);
    
    // Add a task first
    fireEvent.change(screen.getByPlaceholderText("New task"), {
      target: { value: "Task to delete" },
    });
    fireEvent.click(screen.getByText("Add"));
    
    // Verify task exists
    expect(screen.getByText("Task to delete")).toBeInTheDocument();
    
    // Delete the task
    const deleteButton = screen.getByRole('button', { name: /delete/i });
    fireEvent.click(deleteButton);
    
    // Verify task is removed
    expect(screen.queryByText("Task to delete")).not.toBeInTheDocument();
  });

  test("marks a task as done", () => {
    render(<App />);
    
    // Add a task
    fireEvent.change(screen.getByPlaceholderText("New task"), {
      target: { value: "Task to complete" },
    });
    fireEvent.click(screen.getByText("Add"));
    
    // Find and click the checkbox to mark as done
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    
    fireEvent.click(checkbox);
    
    // Verify checkbox is now checked
    expect(checkbox).toBeChecked();
    
    // Verify task text has completed styling
    const taskText = screen.getByText("Task to complete");
    expect(taskText).toHaveStyle({ textDecoration: 'line-through' });
  });
});
