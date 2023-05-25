import React from 'react';
import Accueil from './Accueil';
import Livres from './Livres';
import Users from './Users';
import Search from './Search';
  
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAccueil: true,
            showSearch: false,
            showLivres: false,
            showUsers: false
        };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleMenuClick() {
        console.log("cliiiiiick");
        
        this.setState(state => ({
            showLivres: true
        }));
    }

    render() {
        return (
        <div>
            <Livres/>
        </div>
        );
    }
}

export default Page;