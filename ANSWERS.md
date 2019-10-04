- [ ] Why would you use class component over function components (removing hooks from the question)?

Aside from the fact that class components can give you additional functionality such as the lifecycle methods, many companies still primarily use class components so its important to be comfortable using them.

- [ ] Name three lifecycle methods and their purposes.

During the birth/mounting phase the constructor method serves up initial state data for when the time comes to mount up DOM elements. The render method tells react to return some piece of DOM when its called. The componentDidMount method is part of the mounting phase and inside of it setState can be called which forces a re-render of the component making it the place to perform any asynchronous actions.

- [ ] What is the purpose of a custom hook?

Custom hooks allow you to apply non-visual behavior and stateful logic throughout components by reusing the same hook multiple times.  

- [ ] Why is it important to test our apps?

Testing is essential for software quality and should be integrated throughout the development process. Some of benefits of testing include: finding bugs faster, thinking about edge cases, and acting as a safety net and documentation.