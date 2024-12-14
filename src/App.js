import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
function App() {
  return (
    <div className="App">  
      {/* <Greet name="Bruce" heroname = "Batman">
        <p>He is a superhero</p>
      </Greet>
      <Greet name="AbC" heroname="Superman">
        <button>Submit</button>
      </Greet>
      <Welcome name="Wayne" heroname="BATMAN"></Welcome>
      <Hello/>
      <Message />
      <Counter/> */}
      <FunctionClick/>
    </div>
  );
}

export default App;
