import './App.css';
import Hello from './components/Hello';
import Greet from './components/Greet';

function App() {
  return (
    <div className='App'>
      <Hello />
      <Greet name={1 + 1} heroName='Superman' />
      <p>I'm Mithilesh.</p>
    </div>
  );
}

export default App;
