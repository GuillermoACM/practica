import logo from './logo.svg';
import './App.css';

import { Header, Albani, Miguel, Nelson } from './container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
		<Header />
	  <Albani />
	  <Miguel />
	  <Nelson />
    </div>
  );
}

export default App;
