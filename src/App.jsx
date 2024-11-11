import './App.css';
import Bookstore from './Bookstore';
import Counter from './Counter';
import User from './user';

function App() {
  const actors = ['ami', 'tumi', 'see', 'sobai']
  const singers = [
    { name: "Jack", age: 20 },
    { name: "Anna", age: 22 },
    { name: "Mike", age: 21 }
  ];

  const books = [
    {
      id: 1,
      name:"physics",
      price: 100
    },
    {
      id: 1,
      name:"Chemistry",
      price: 129
    },
    {
      id: 3,
      name:"Math",
      price: 100
    },
    {
      id: 4,
      name:"Biology",
      price: 159
    },
  ]
  
  return (
    <>
    <User></User>
    <Counter></Counter>
    <Bookstore books={books}></Bookstore>
    


    </>
  )
}



export default App
