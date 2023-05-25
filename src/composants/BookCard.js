/**
 * Représente un composant de livre.
 * Affiche les détails d'un livre avec une image de couverture, un titre, un auteur et un lien pour en savoir plus.
 * @param {Object} props - Les propriétés passées au composant.
 * @returns {JSX.Element} - Élément JSX représentant une card avec un livre.
 */
function BookCard(props) {

    return (
        <div className="card col-12 col-md-4 col-lg-3 mb-4">
            <img src={props.cover} className="car-img-top" alt="Image de couverture" />
            <div className='card-body'>
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.author}</p>
                <a className="btn" href={props.link} target="_blank">En savoir plus</a>
            </div>
        </div>
    );
}
  
export default BookCard;