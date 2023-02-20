import "./App.css";
import { Body } from "./components/Body/Body";
import { Header } from "./components/Header/Header";
import {FinanceFooter} from './components/FinanceFooter/FinanceFooter'

function App() {
  return (
    <>
      <Header />
      <Body />
      <FinanceFooter/>
    </>
  );
}

export default App;
