import React from 'react';

const Greet = props => {
    const {name, heroName} = props;
    return(
        <div>
            <h1 style={ {color: 'coral'}}>Greet.js</h1>
            <p>This is a functional component.</p>
            <p>It defines a function that returns a div that may contain many children.</p>
            <p>The parameter to the function is usually called <code>props</code> that stands for properties. These parameters make the dom dynamic. The javascript expressions are enclosed between braces.</p>
            <p>The functions virtually define a new html like tag. This tag can be given any number of parameters. For example, the following h1 tag is obtained using the following code</p>
            <code>&lt;Greet name={1 + 1} heroName='Superman' /&gt;</code>
            <h1>Hello {name } as { heroName}</h1>
            {props.children}
        </div>
    );  
}
    

export default Greet;