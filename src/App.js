import './App.css';
import Home from "./components/Home"
import DataProvider from './store/DataProvider';

function App() {
  return (
    <>
    <DataProvider>
      <Home></Home>
    </DataProvider>
    </>
  );
}

export default App;
