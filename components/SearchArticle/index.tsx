import React, { useState, useEffect, useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Form } from './styles';

const Search: React.FC = () => {
    const [query, setQuery] = useState<string>('');
    const [error, setError] = useState<string>('');

    const inputRef = useRef<HTMLInputElement | null>(null);
    const searchRef = useRef<HTMLFormElement | null>(null);

    return (
        <React.Fragment>
            <Form onSubmit={() => {}} ref={searchRef}>
                <input
                    ref={inputRef}
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    type="text"
                    placeholder="React Native..."
                />
                <button type="submit">
                    <FiSearch color="#333" size={30} />
                </button>
            </Form>
            {error && (
                <span
                    style={{
                        fontSize: 18,
                        fontFamily: "'Roboto', 'Arial', 'sans-serif'",
                        textAlign: 'center',
                        fontWeight: 'normal',
                        color: '#e02041',
                        marginTop: 2,
                        marginBottom: 5,
                    }}
                >
                    {error}
                </span>
            )}
        </React.Fragment>
    );
};

export default Search;
