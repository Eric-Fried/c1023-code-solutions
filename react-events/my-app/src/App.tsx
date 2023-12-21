import './App.css';
import { CustomButton } from './CustomButton';

function App() {
  function handleCustomClick(text: string, color: string) {
    window.alert(`${text}  ${color} `);
  }
  return (
    <>
      <div>
        <CustomButton
          onCustomClick={handleCustomClick}
          color="red"
          text="I"></CustomButton>
        <CustomButton
          onCustomClick={handleCustomClick}
          color="green"
          text="Know"></CustomButton>
        <CustomButton
          onCustomClick={handleCustomClick}
          color="aqua"
          text="React!"></CustomButton>
      </div>
    </>
  );
}

export default App;
