import Counter from "./components/counter";
import "./App.css";
import { Provider } from "react-redux";
import {store} from "./redux";
import Todo from "./components/Todo";

function App() {

  return (
  <div className="app">
    <Provider store={store}>
      <Counter />
      <Todo />
    </Provider>
  </div>  
 
  );
}

export default App;
