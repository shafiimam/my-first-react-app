import logo from "./logo.svg";
import "./App.css";

function App() {
    var person = {
        name: 'Dr. Mahfuz',
        job:'singer'
    };
    var style = {
        color: '#FF0000',
        backgroundColor: 'yellow'
    }
    return ( 
    <div className = "App" >
        <header className = "App-header" >
        <img src = { logo }
        className = "App-logo"
        alt = "logo"/>
        <p> Edit <code> src / App.js </code> and save to reload. </p> 
        <p> my first paragraph </p> 
        <p>my second paragraph </p>
        <h1 style={style}>my heading: {person.name + ' ' + person.job}</h1>
        <h3>singer: {person.name} job: {person.job}</h3>
        <p>my third paragraph </p>
        <a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn React </a> 
        </header> 
    </div>
    );
}

export default App;