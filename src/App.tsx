import Button from "./components/Button";
import Battleship from "./components/icons/Battleship";

function App() {
  return (
    <main>
      <Battleship className="fill-primary" />

      <ul role="menu">
        <li role="menuitem">
          <Button>Play</Button>
        </li>
        <li role="menuitem">
          <Button>Exit</Button>
        </li>
      </ul>
    </main>
  );
}

export default App;
