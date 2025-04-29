import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from "./components/UI/Input";
import Button from "./components/UI/Button";
import Container from "./components/UI/Container";
import Form, {FormHandle} from "./components/UI/Form";

function App() {
  const [count, setCount] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const customForm = useRef(null);

  function handleSave(data: unknown) {
    const extractedData = data as {name: string, age: string;};
    customForm.current.clear();
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input id="name" label="Name" type="text"/>
        <Input id="age" label="Age" type="number" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>

      {/*<Input id="name" label="Your name" type="text"/>
      <Input id="age" label="Your age" type="number" />
      <Button>A Button</Button>
      <Button href="https://www/sharathcv.com">A Link</Button>
      <Container as={Button}>Click me!</Container>
      <Input label="Test" id="test" ref={input} />
      */}

    </main>
  );
}

export default App
