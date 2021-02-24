import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const products = [
    { name: "photoshop", price: "$90.99" },
    { name: "ilusstrator", price: "$60.99" },
    { name: "pdf reader", price: "$6.99" },
  ];
  const friends = [
    { name: "emon", age: "23", job: "marchandizer" },
    { name: "rana", age: "26", job: "developer" },
    { name: "rabby", age: "25", job: "freelancer" },
  ];

  const nayoks = [
    { name: "sakib khan", age: 32 },
    { name: "bappa raj", age: 30 },
    { name: "salman shah", age: 21 },
    { name: "omar sani", age: 35 },
  ];
  const productNames = products.map((pd) => pd.name);

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        {/* <Todos></Todos> */}
        <Counter></Counter>
        <MovieCounter></MovieCounter>
        <Users></Users>
        <ul>
          {nayoks.map((nayok) => (
            <li>{nayok.name}</li>
          ))}
        </ul>
        {products.map((pd) => (
          <Product product={pd}></Product>
        ))}

        {friends.map((frnd) => (
          <Friend friend={frnd}></Friend>
        ))}
        {nayoks.map((nayok) => (
          <Nayok name={nayok.name} age={nayok.age}></Nayok>
        ))}
        <Person name="piash" profession="web developer"></Person>
        <Person name="priya" profession="house wife"></Person>
        <Person name="rafi" profession="jobless"></Person>
      </header>
    </div>
  );
}

function MovieCounter() {
  const [movieCount, setMovieCount] = useState(0);

  return (
    <div>
      <button onClick={() => setMovieCount(movieCount + 1)}>add movie</button>
      <h5>number of movies:{movieCount} </h5>
      <MovieDisplay movies={movieCount}></MovieDisplay>
    </div>
  );
}
function MovieDisplay(props) {
  return <h4>movies i have acted: {props.movies}</h4>;
}
function Todos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);
  return (
    <div>
      <h3>to do list</h3>
      <ul>
        {todos.map((todo) => (
          <li>
            to do: {todo.title} completed:{todo.completed.toString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
        <h5>user count:{users.length}</h5>
      {users.map((user) => {
        return (
          <div style={{border:'5px solid green',borderRadius:'5px',margin:'5px'}}>
            <h5>user No:{users.indexOf(user)+1}</h5>
            <p>User Name:{user.name}</p>
            <p> User email:{user.email}</p>
            <p>User phone:{user.phone}</p>
          </div>
        );
      })}
    </div>
  );
};

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </div>
  );
}
function Product(props) {
  const productStyle = {
    border: "1px solid gery",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "250px",
    width: "250px",
    float: "left",
    margin: "5px",
    boxShadow: "5px 5px 10px white",
  };
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h3>Price:{price}</h3>
      <button>Buy Now</button>
    </div>
  );
}

function Friend(props) {
  const friendStyle = {
    height: "250px",
    width: "200px",
    margin: "5px",
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "#dddccc",
    color: "black",
  };
  const { name, age, job } = props.friend;
  return (
    <div style={friendStyle}>
      <h3>Name:{name}</h3>
      <h4>Age:{age}</h4>
      <h6>Job:{job}</h6>
    </div>
  );
}

function Person(props) {
  var style = {
    border: "2px solid gold",
    padding: "5px",
    margin: "5px",
    width: "400px",
  };
  return (
    <div style={style}>
      <h3>My name: {props.name}</h3>
      <p>My profession: {props.profession}</p>
    </div>
  );
}
function Nayok(props) {
  const nayokStyle = {
    border: "2px solid red",
    margin: "5px",
  };
  return (
    <div style={nayokStyle}>
      <h1>Ami nayok: {props.name}</h1>
      <h3>i have done 5 movies in {props.age} years</h3>
    </div>
  );
}
export default App;
