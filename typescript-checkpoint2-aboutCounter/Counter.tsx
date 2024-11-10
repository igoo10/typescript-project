// THE JS CODE

//import React, { Component } from 'react'; 
// class Counter extends Component { 
// state = {
//  count: 0
//  }; increment = () => {
//  this.setState({ count: this.state.count + 1 }); 
// }; 
// render() { 
// return 
// ( <div> 
// <p>Count: {this.state.count}</p> 
// <button onClick={this.increment}>Increment</button> 
// </div> );
//  }
//  } 
// export default Counter;

//THE TYPESCRIPT CODE
// I imported React and Component, since Counter will be a class component.
import React, { Component } from 'react';

// Step 1: I defined an empty interface named CounterProps
//         because this component doesn't use any props.
interface CounterProps {}

// Step 2: I created an interface named CounterState to specify the `count` property as a number.
interface CounterState {
  count: number;
}

// Step 3: I extended the Component class with CounterProps and CounterState types.
//         This way, TypeScript knows what to expect for props and state in this component.
class Counter extends Component<CounterProps, CounterState> { 
  // Step 4: I initialized the state with `count` set to 0.
  state: CounterState = {
    count: 0
  }; 
  
  // Step 5: I defined the increment method and typed it to return void.
  increment = (): void => {
    // Step 6: I used setState to update the `count` in the state by incrementing it by 1.
    this.setState({ count: this.state.count + 1 }); 
  }; 
  
  // Step 7: I implemented the render method to display the component's structure.
  render() { 
    return (
      <div> 
        <p>Count: {this.state.count}</p> 
        <button onClick={this.increment}>Increment</button> 
      </div>
    );
  }
}

// Step 8: I exported the Counter component as the default export so it can be used elsewhere in the app.
export default Counter;
