import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Employees from './component/Employees';
import AddEmployee from './AddEmployee';


function App() {
    
    return (
        <div>
            <Router>
                <div className="col-md-12">
                    <h1 className="text-center" style={style}/>
                    <Switch>
                        <Route path="/" exact component={Employees} />
                        <Route path="/home" component={Employees} />
                        <Route path="/add" component={AddEmployee} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;
