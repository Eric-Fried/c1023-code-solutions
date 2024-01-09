import { ToggleButton } from './ToggleButton';
import './App.css';

function App() {
  return (
    <>
      <div>
        <ToggleButton color="red" text="click ME" />
      </div>
      <div>
        <ToggleButton color="red" text="No Click ME!!!" />
      </div>
      <div>
        <ToggleButton color="grey" text="click ME Instead!!" />
      </div>
      <div>
        <ToggleButton color="blue" text="NOOOOO click none of us!!!" />
      </div>
    </>
  );
}

export default App;
