import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Hello from './components/Hello';
import Greet from './components/Greet';
import Amplify from '@aws-amplify/core';

function App() {
  return (
    <div className='App'>
      <Hello />
      <Greet name={1 + 1} heroName='Superman' />
      <p>I'm Mithilesh.</p>
      <h1>We now have Auth!</h1>
      <AmplifySignOut />
      <Hello />
    </div>
  );
}

export default withAuthenticator(App);
