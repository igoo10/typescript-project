
// THE JS CODE

// import React from 'react'; 
// const Greeting = ({ name }) => { 
// return <div>Hello, {name}!</div>;
//  };
//  export default Greeting;



//THE TYPESCRIPT CODE
 // I imported React to work with JSX.
import React from 'react';

// Step 1: I defined a TypeScript interface named GreetingProps.
//         This interface specifies that the component expects a `name` prop of type string.
interface GreetingProps {
  name: string;
}

// Step 2: I created the Greeting functional component, and used the GreetingProps type annotation.
//         This type annotation ensures that the component receives a `name` prop of the correct type.
const Greeting: React.FC<GreetingProps> = ({ name }) => { 
  // Step 3: Inside the component, I used the `name` prop and returned the JSX element.
  return <div>Hello, {name}!</div>;
};

// Step 4: I exported the Greeting component as default so it can be used in other parts of the app.
export default Greeting;
