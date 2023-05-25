import logo from './../logo.svg';
import Menu from './Menu';

function Header(props) {
    
    function handleChangeMenu(cible){
        props.onChoixMenu(cible);
        console.log("header" + cible);
    }

    return (
        <header className="header">
            <div className='presentation'>
                <img src={logo} className="App-logo" alt="logo" />
                <span className="app-title">Biblio app</span>
            </div>
            <Menu onChoixMenu={handleChangeMenu}/>
        </header>
    );


}
  
export default Header;