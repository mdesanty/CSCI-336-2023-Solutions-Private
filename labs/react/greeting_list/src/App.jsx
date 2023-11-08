import Greeting from '../components/Greeting';
import './App.css';

function App() {
  const greetings = [
    {greeting: 'Hello', firstName: 'Roger', lastName: 'Smith'},
    {greeting: 'Hi', firstName: 'Peter', lastName: 'Griffin'},
    {greeting: 'Yo', firstName: 'Bob', lastName: 'Belcher'},
    {greeting: 'Howdy', firstName: 'Rick', lastName: 'Sanchez'}
  ]

  return (
    <>
      { greetings.map((greeting, index) =>
        <Greeting
          key={index}
          greeting={greeting.greeting}
          firstName={ greeting.firstName }
          lastName={ greeting.lastName }
        />
      ) }
    </>
  );
}

export default App;
