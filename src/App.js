import './App.css';
import Header from './components/Header';
import ClassSolution from './components/challenges/day01/ClassSolution';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  // const name = 'Ty'

  return (
    <div className="App">
      {/* <h1>Welcome to React, {name}</h1>
      <h2>We just modified our root App component</h2>
      <h3>Challenge!</h3>
      <p>Create ./components/challenges/day01 folder</p>
      <p>Create a component with h1 tag of your name, p tag with description of yourself, and an unordered list of two truths and a lie.</p>
      <p>Export, import into App, and mount it.</p> */}

      
      
      <Header /> { /* this is how you mount a component */ }
      <ClassSolution /> { /* child function */ }
      <Home />
      {/* 
      <h2>CHALLENGE!</h2>
      <p>Create Footer and Home components to round off the site</p>
      <p>SPICE MODE: In your Footer, utilize the JS time method to dynamically insert current date after Copyright</p>
      <p>EXTRA: Have some fun with reactstrap if you're brave to utilize some additional elements</p>
      */}

      <Footer />
    </div>
  );
}

export default App;
