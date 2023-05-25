function Menu(props) {
  
  function handleMenuClick(e){
    let cible = e.target.value;
    props.onChoixMenu(cible);
    console.log("Menu" + cible);
  }

  return (
      <nav className="menu">
        <ul>
          <li className='menu-item'><button onClick={handleMenuClick} value="home">Accueil</button></li>
          <li className='menu-item'><button onClick={handleMenuClick} value="search">Recherche</button></li>
          <li className='menu-item'><button onClick={handleMenuClick} value="books">Livres</button></li>
          <li className='menu-item'><button onClick={handleMenuClick} value="users">Utilisateurs</button></li>
        </ul>
      </nav>
  );
    
}

  
export default Menu;