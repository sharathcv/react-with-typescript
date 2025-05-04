import './App.css'
import AddTimer from './components/AddTimer';
import Header from './components/Header';
import Timers from './components/Timers';
import TimersContextProvider from "./store/timers-context";

function App() {
  // const [count, setCount] = useState(0);
  // const input = useRef<HTMLInputElement>(null);
  // const customForm = useRef(null);

  // function handleSave(data: unknown) {
  //   const extractedData = data as {name: string, age: string;};
  //   customForm.current.clear();
  // }

  return (
    <TimersContextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimersContextProvider>
  );
}

export default App
