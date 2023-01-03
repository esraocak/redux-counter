import Counter from "./components/counter/counter";
import "./App.css";
import { Provider } from "react-redux";
import {store} from "./redux";


function App() {

  return (
  <div className="app">
    <Provider store={store}>
      <Counter />

    </Provider>
  </div>  
 
  );
}

export default App;
