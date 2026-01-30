import { test, expect } from '@playwright/test';

test.describe('Task Manager E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('user can add a task', async ({ page }) => {
    // Fill the input with a task
    await page.fill('input[placeholder="New task"]', 'E2E Task');
    
    // Click the Add button
    await page.click('text=Add');
    
    // Verify the task appears in the list
    await expect(page.locator('text=E2E Task')).toBeVisible();
  });

  test('user can delete a task', async ({ page }) => {
    // Add a task first
    await page.fill('input[placeholder="New task"]', 'Task to delete');
    await page.click('text=Add');
    
    // Verify task is added
    await expect(page.locator('text=Task to delete')).toBeVisible();
    
    // Click delete button
    await page.click('button:has-text("Delete")');
    
    // Verify task is removed
    await expect(page.locator('text=Task to delete')).not.toBeVisible();
  });

  test('user can mark a task as done', async ({ page }) => {
    // Add a task
    await page.fill('input[placeholder="New task"]', 'Task to complete');
    await page.click('text=Add');
    
    // Find the checkbox and click it
    const checkbox = page.locator('input[type="checkbox"]').first();
    await checkbox.check();
    
    // Verify checkbox is checked
    await expect(checkbox).toBeChecked();
    
    // Verify task has line-through styling
    const taskText = page.locator('text=Task to complete');
    await expect(taskText).toHaveCSS('text-decoration', /line-through/);
  });

  test('user can add multiple tasks', async ({ page }) => {
    // Add first task
    await page.fill('input[placeholder="New task"]', 'First task');
    await page.click('text=Add');
    
    // Add second task
    await page.fill('input[placeholder="New task"]', 'Second task');
    await page.click('text=Add');
    
    // Add third task
    await page.fill('input[placeholder="New task"]', 'Third task');
    await page.click('text=Add');
    
    // Verify all tasks are visible
    await expect(page.locator('text=First task')).toBeVisible();
    await expect(page.locator('text=Second task')).toBeVisible();
    await expect(page.locator('text=Third task')).toBeVisible();
    
    // Verify we have 3 list items
    const listItems = page.locator('li');
    await expect(listItems).toHaveCount(3);
  });

  test('user cannot add empty task', async ({ page }) => {
    // Try to add empty task
    await page.click('text=Add');
    
    // Verify no tasks are added
    const listItems = page.locator('li');
    await expect(listItems).toHaveCount(0);
  });

  test('input clears after adding task', async ({ page }) => {
    // Fill and add task
    const input = page.locator('input[placeholder="New task"]');
    await input.fill('Clear this task');
    await page.click('text=Add');
    
    // Verify input is cleared
    await expect(input).toHaveValue('');
  });
});
