1. [ ] Why would you use class component over function components (removing hooks from the question)?

  - There are more methods that you can use within a class component that you cant with a functional component, you can also be able to access state via this and props when needing to pass from parent to child components.

2. [ ] Name three lifecycle methods and their purposes.

  - Mounting: component is being built from the ground up, componentDidMount gets called.
  - Updating: setState is used to change the components state data with render, shouldComponentUpdate can be used to stop a component from calling render.
  - Un-mounting: Component is removed, componentWillUnmount can be called and used to for any clean up.

3. [ ] What is the purpose of a custom hook?

  - To apply non-visual behavior and stateful logic throughout your app by reusing the hooks you made.

4. [ ] Why is it important to test our apps?

  - Testing prior to final production is the best way to minimize bugs finding their way into your code, reduces regression, trust the code more, think about edge cases, safety net, and write more testable (better) code.