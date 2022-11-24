import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions";

function App() {
  // useSelectorを通じてstore内のcounter stateにアクセス
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <h3>カウント: {counter}</h3>
      <button onClick={() => dispatch(increment())}>プラス</button>
      {isLogin ? <h3>ログインに成功!</h3> : <h3>ログインして下さい</h3>}
    </div>
  );
}

export default App;
