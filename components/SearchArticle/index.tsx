import React, { useState, useEffect, useRef } from 'react';
import { Post } from '../../types'; // eslint-disable-line
import { FiSearch } from 'react-icons/fi';
import contentful from '../../services/contentful';
import { Form } from './styles';
import { Entry } from 'contentful'; // eslint-disable-line

interface Props {
    updatePosts: React.Dispatch<React.SetStateAction<Entry<Post>[]>>;
}

const Search: React.FC<Props> = ({ updatePosts }) => {
    const [query, setQuery] = useState<string>('');
    const [error, setError] = useState<string>('');

    const inputRef = useRef<HTMLInputElement | null>(null);
    const searchRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setTimeout(() => setError(''), 5000);

        inputRef.current.onblur = () => {
            searchRef.current.style.border = '2px solid transparent';
        };

        inputRef.current.onfocus = () => {
            searchRef.current.style.border = '2px solid #51c7da';
        };
    }, [error]);

    async function submitHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            const response = await contentful.getEntries<Post>({
                content_type: 'postagem',
                'fields.titulo[match]': query,
            });

            updatePosts(response.items);
        } catch (err) {
            setError('Ocorreu um erro ao pesquisar os artigos');
        }
    }

    return (
        <React.Fragment>
            <Form onSubmit={submitHandler} ref={searchRef}>
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
