
/* import { useState } from 'react'; */
import './App.css';
/* import Input from './components/Shared/Input'; */
import Home from './pages/Home';
import Layout from './pages/Layout';

function App() {
  /* const [value, setValue] = useState(); */

  return (
    <Layout>
      <Home/>
      {/* <Input placeholder={"Valor"} value={value} setValue={setValue} required /> */}
    </Layout>
  );
}

export default App;
