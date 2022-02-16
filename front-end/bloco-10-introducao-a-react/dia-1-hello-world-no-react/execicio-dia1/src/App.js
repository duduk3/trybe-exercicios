import './App.css';


const toDoList = ['correr', 'meditar', 'tomar café', 'estudar'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      {toDoList.map((element) => Task(element) )}
    </div>
  );
}

export default App;
