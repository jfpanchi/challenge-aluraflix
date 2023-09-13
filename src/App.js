
import './App.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import RegisterCategory from './pages/Register/Category';
import RegisterVideo from './pages/Register/Video';

function App() {

  return (
    <Layout>
      {/* <Home/> */}
      <RegisterCategory/>
      {/* <RegisterVideo/> */}
    </Layout>
  );
}

export default App;
