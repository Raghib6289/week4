// Practical Application: Consolidating State Management
// In this section, we'll consolidate our understanding by looking at a slightly more complex scenario where multiple pieces of state interact. This often happens in real-world applications, such as managing the state of a search bar with associated results and loading indicators.

// Scenario: A Search Component with Results

// Imagine a component that allows users to search for something (e.g., users, products) and displays the results. This involves managing:

// The current search query (a string).
// The list of search results (an array).
// A loading indicator (a boolean).
// Potentially, an error message (a string or null).
// We will use multiple useState calls to manage these distinct pieces of state.

// Objective: Build a simple search component that simulates fetching data and displays results, including a loading state.

// Step 1: Create the Search Component

// src/SearchComponent.js
import React, { useState } from 'react';
import './SearchComponent.css'; // For styling

// Mock data for simulation
const mockData = [
  { id: 1, name: 'Alice Smith' },
  { id: 2, name: 'Bob Johnson' },
  { id: 3, name: 'Charlie Brown' },
  { id: 4, name: 'Diana Prince' },
  { id: 5, name: 'Ethan Hunt' }
];

function SearchComponent() {
  // State for the search input query
  const [query, setQuery] = useState('');
  // State for the fetched search results
  const [results, setResults] = useState([]);
  // State for the loading indicator
  const [isLoading, setIsLoading] = useState(false);
  // State for potential errors
  const [error, setError] = useState(null);

  // Simulate fetching data
  const handleSearch = async () => {
    setIsLoading(true); // Set loading to true before fetch
    setError(null);     // Clear previous errors
    setResults([]);     // Clear previous results

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      // Filter mock data based on the query (case-insensitive)
      const filteredResults = mockData.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    } catch (err) {
      setError('Failed to fetch search results.');
      console.error('Search error:', err);
    } finally {
      setIsLoading(false); // Set loading to false after fetch (success or error)
    }
  };

  // Handle input change and trigger search after a short delay (debouncing simulation)
  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);

    // Basic debouncing: only search if query is not empty
    if (newQuery.trim() !== '') {
      handleSearch();
    } else {
      setResults([]); // Clear results if query is empty
    }
  };

  return (
    <div className='search-container'>
      <h3>Search Component</h3>
      <div className='search-input-group'>
        <input
          type='text'
          placeholder='Search for a name...' 
          value={query}
          onChange={handleInputChange}
          className='search-input'
        />
        <button onClick={handleSearch} disabled={isLoading} className='search-button'>
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {error && <p className='error-message'>{error}</p>}

      {isLoading && <p className='loading-message'>Loading results...</p>}

      {!isLoading && !error && query.trim() !== '' && results.length === 0 && (
        <p className='no-results-message'>No results found for "{query}".</p>
      )}

      {!isLoading && !error && results.length > 0 && (
        <ul className='results-list'>
          {results.map(item => (
            <li key={item.id} className='result-item'>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchComponent;