import React from 'react';

const Hello = () => {
    return (
       <div>
          <h1 style={ {color: 'coral'}}>Hello.js</h1>
           <h1>Install Node</h1>
           <p>Install from <a href='https://nodejs.org'>nodejs.org</a></p>
           <h1>Creating React application</h1>
           <h2>Create-react-app</h2>
           <h3>Using npx</h3>
           <code style={ {color: 'teal'}}>npx create-react-app projectName</code>
           <p>Change to the project folder. Then, start npm</p>
           <code style={ {color: 'teal'}}>npm start</code>
           <p>npm start will start a template application in the browser.</p>
           <h3>Using npm</h3>
           <pre style={ {color: 'teal'}}>npm install create-react-app -g</pre>
           <pre style={ {color: 'teal'}}>create-react-app projectName</pre>
           <h2>App.js</h2>
           <p>Most of the code goes inside the App.js file.</p>
           <p>Starting point is <code style={ {color: 'teal'}}>index.js</code> file inside folder <code style={ {color: 'teal'}}>src</code></p>
           <h2>index.js</h2>
           <p><code style={ {color: 'teal'}}>index.js</code> contains <code style={ {color: 'teal'}}>ReactDOM.render()</code> which renders <code style={ {color: 'teal'}}>App</code>.</p>
       </div>
    );
    //return React.createElement('div', {id: 'Hello', className: 'dummyClass'}, React.createElement('h1', null, 'Hello Mithilesh..'));
}
export default Hello;