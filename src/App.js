import logo from './logo.svg';
import './App.css';
function Sim(props){
  return(
    <div>
      <h1>my namftr {props.oye}</h1>
    </div>
  );
}
function App() {
  var slam = ["Yamaha","Kawasaki","BMW","Triumph","Benali"];
  var slambook = slam.map((s)=> <Sim oye={s}/>)
  return (
    <div className="App">
      <h1>{slambook}</h1>
    </div>
  );
}

export default App;

