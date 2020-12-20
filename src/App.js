import Header from "./Header"
import TinderCard from "./TinderCards"
import SwipeButtons from "./SwipeButtons"
import './App.css';

function App() {
  return (
    // Class naming convention 
    <div className="App">
      {/* Main Header */}
      <Header/>
  
      {/* Tinder Card */}
      <TinderCard /><br></br>
      {/* Swipe Buttons */}
      <SwipeButtons />
      
  
    </div>
  );
}

export default App;
 