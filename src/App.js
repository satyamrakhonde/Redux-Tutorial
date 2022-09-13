
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { incNumber, decNumber } from './actions/index';
import  Counter  from './Component/Counter';


function App() {
  // const myState = useSelector((state) => state.changeTheNumber )
  // const dispatch = useDispatch();
  return (
   <>
    <Counter/>
   </>
  );
}

export default App;
