import {Component, StrictMode} from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello World!</h2>
};

// const Field = () => {
//    const holder = "TypeHere"
//    const styleField = {
//       width: '300px'
//   };
//    return <input 
//       placeholder={holder} 
//       type="text" 
//       style={styleField}/>
//       };  

class Field extends Component {
  render(){
    const holder = "TypeHere"
   const styleField = {
      width: '300px'
  };
   return <input 
      placeholder={holder} 
      type="text" 
      style={styleField}/>
      };  
  }


function Btn() {
  // const text = 'Log in';
   const res = () => {
     return 'Log in'};
  return <button>{res()}</button>
};
function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header/>
      </StrictMode>
      <Field/>
      <Btn/>
    </div>
  );
}
export {Header};
export default App;
