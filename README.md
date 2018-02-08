I learned how to create a React App from bare bones 
using NPM and Webpack.
I also learned how to integrate SASS and bootstrap into the application along with animations.
The end product was awesome. 

##Some main points to remember with React:
1. Props are perfect in scenarios where components itself doesn't need to be aware of changes that it might have.
2. States are for when you want components to be aware of changes happening within itself
3. Whenever we send in props, we never change those props UNLESS there is a change happening in parent component. BUT a component will never change props on its own
4. the way props changes inside a component are via state
5. state is declared in the constructor
6. Arrow functions keep this within scope of component
7. To render current component content to a parent component you may use 
 {this.props.children} in the child component
8. Using SASS and mixings will cut down tons of repetition
9. Variables defined with 'let' depends on the enclosure that its within
9b. for (var a) will exist in the same context, lifecycle of the app
10. Variables defined with 'var' depend on the 'this' that you're within
10a. for(let a) will only exist in the 'for' enclosure
11. const does not change but content inside const may change
12. React expect only one root element
13. A good practice for setting up the application is to write esomorphic code, which means create the minimal code in each file
