import './App.css';
import Task from './components/Main/Task'
import Complete from './components/Complete'
import Header from './components/Header/Header'


function App() {
  return (
    <div className="App">
      <Header/>
      <Task/>
      <Complete/>
    </div>
  );
}

export default App;
