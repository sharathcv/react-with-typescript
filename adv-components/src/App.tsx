import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Input id="name" label="Your name" type="text"/>
      <Input id="age" label="Your age" type="number" />
      <Button el="button">A Button</Button>
      <Button el="anchor" href="https://www/sharathcv.com">A Link</Button>
    </main>
  );
}

export default App
