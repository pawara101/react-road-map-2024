import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import Search from '../components/Search';

describe('Search Component', () => {
  
  it('should render the input field with the correct placeholder and initial value', () => {
    const mockSetSearchTerm = vi.fn();
    
    // Render the component with an initial search term
    render(<Search searchTerm="Inception" setSearchTerm={mockSetSearchTerm} />);
    
    // Find the input element by its placeholder text
    const inputElement = screen.getByPlaceholderText('Search a Movie') as HTMLInputElement;
    
    // Assert it is in the DOM and holds the correct value
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe('Inception');
  });

  it('should call setSearchTerm with the correct value when the user types', async () => {
    const user = userEvent.setup();
    const mockSetSearchTerm = vi.fn();
    
    // Render with an empty search term
    render(<Search searchTerm="" setSearchTerm={mockSetSearchTerm} />);
    
    const inputElement = screen.getByPlaceholderText('Search a Movie');
    
    // Simulate typing the letter "A" into the field
    await user.type(inputElement, 'A');
    
    // Assert that the function was triggered with the keyed-in value
    expect(mockSetSearchTerm).toHaveBeenCalledTimes(1);
    expect(mockSetSearchTerm).toHaveBeenCalledWith('A');
  });

});
