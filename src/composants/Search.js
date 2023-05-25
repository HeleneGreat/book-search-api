import React from 'react';
import BookCard from './BookCard';

/**
 * Représente un composant de recherche de livres.
 * Utilise l'API Google Books pour effectuer des recherches.
 */
class Search extends React.Component{

     /**
     * Constructeur de classe.
     * Initialise l'état "books" à un tableau vide.
     * @param {Object} props - Les propriétés passées au composant.
     */
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }

    /**
     * Gère l'événement lorsqu'une touche est enfoncée dans l'input de recherche.
     * Si la touche enfoncée est "Enter", appelle la méthode handleClick.
     * @param {Object} event - L'événement du clavier.
     */
    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          this.handleClick(event);
        }
    }
    
    /**
     * Gère l'événement lorsqu'on clique sur le bouton de recherche.
     * Effectue une requête à l'API Google Books avec le nom du livre saisi.
     * Met à jour l'état "books" avec les résultats de la recherche.
     * @param {Object} event - L'événement du clic.
     */
    handleClick = (event) => {
        event.preventDefault();
        let bookName = document.getElementById('input-book').value;
        let results = document.getElementById('results');

        fetch('https://www.googleapis.com/books/v1/volumes?q='+bookName)
        .then(response => response.json())
        .then(data => {
            const books = data.items.map(item => ({
                title: item.volumeInfo.title,
                author: item.volumeInfo.authors ? item.volumeInfo.authors[0] : 'Unknown',
                cover: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : 'no-cover.png',
                link: item.volumeInfo.previewLink
            }));
            this.setState({ books })
        })
        .catch((error) => {
            console.error(error);
        });
        
        console.log("Nom du livre :", bookName);
    }

    /**
     * Rendu du composant Search.
     * @returns {JSX.Element} - Élément JSX représentant le composant.
     */
    render(){
        const { books } = this.state; 
        return (
            <section className='container'>
                <h1 className='mb-5'>Rechercher des livres</h1>

                <div className='text-center'>
                    <input type="text" id="input-book" name="book-name" className='form-control' onKeyDown={this.handleKeyDown}/>
                    <button onClick={this.handleClick} className='btn'>Rechercher</button>
                </div>

                <ul id="results" className='mt-5'>
                    <div className='row'>
                        {books.map((book, index) => (
                            <BookCard
                                key={index}
                                title={book.title}
                                author={book.author}
                                cover={book.cover}
                                link={book.link}
                            />
                        ))}
                    </div>
                </ul>
            </section>
        );

    }
}

export default Search;