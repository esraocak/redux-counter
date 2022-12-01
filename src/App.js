import Counter from "./components/counter";
import "./App.css";
import { legacy_createStore as createStore  } from "redux";
import reducer from "./redux";
import { Provider } from "react-redux";

function App() {
  const store = createStore (reducer);
  return (
  <div className="app">
    <Provider store={store}>
      <Counter />
    </Provider>
  </div>  
 
  );
}

export default App;
