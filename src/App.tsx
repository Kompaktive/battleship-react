import Button from "./components/Button";
import BattleshipIcon from "./components/icons/BattleshipIcon";

function App() {
  return (
    <main>
      <BattleshipIcon className="fill-primary" />

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
