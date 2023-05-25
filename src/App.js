import './App.css';
import Header from './composants/Header';
import Users from './composants/Users';
import Livres from './composants/Livres';
import Accueil from './composants/Accueil';
import Search from './composants/Search';
import {useState} from "react";

function App(props) {
  const [currentPage, setCurrentPage] = useState('');

  function handleChangeMenu(cible){
    setCurrentPage(cible);
    console.log("App" + cible);
  }

  let content;
  if(currentPage == "users"){
    content = <Users/>;
  }else if(currentPage == "books"){
    content = <Livres/>;
  }else if(currentPage == "search"){
    content = <Search/>;
  }else{
    content = <Accueil/>;
  }

  return (
    <div>
      <Header onChoixMenu={handleChangeMenu}/>
      {content}
    </div>
  );
}



export default App;
