import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state={
    isLoading:true,
    movies:[]
  }

  componentWillMount() {
    setTimeOut(()=>{
      this.setState({isLoading:false});
    },6000);
  }
  
  render(){
    const{isLoading}=this.state;
    return <div>{isLoading?"Loading...":"We are ready"}</div>
  }
}


class App extends React.Component{
  state={
    count:0
  };

  add=()=>{
    this.setState(current=>({count:current.count+1}));
    //console.log("add");
  };

  minus=()=>{
    this.setState(current=>({count:current.count-1}));
    //console.log("minus");
  }

  componentDidMount() {
    console.log("Component redered");
  }
  
  componentDidUpdate() {
    console.log("I just updated");
  }

  componentWillUnmount() {
    console.log("Gooybye, cruel world");
  }

  render(){
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>ADD</button>
        <button onClick={this.minus}>MINUS</button>
      </div>
    )

  }

}

const foodILike=[
  {
    id:1, // react 내부에서 사용하기 위한 것
    name2:"Kimchi",
    images:"http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    id:2,
    name2:"Chicken",
    images:"https://image.chosun.com/sitedata/image/201411/18/2014111803828_0.jpg"
  }
]   

/*
function renderFood(dish){
  console.log(dish);
  return <Food name={dish.name2} picture={dish.images}/>
}
*/

function Food({name,picture}){ // name, picture : property
  return <div>
    <h2>I like {name}.</h2>
    <img src={picture} alt={name}/>
  </div>
  // HTML
}

function App() {
  /*
  return (
  <div>
    {console.log(foodILike.map(renderFood))}
    {foodILike.map(renderFood)}
  </div>
  );
  */
  return (
    <div>
      <h1>김다솔</h1>
      안녕하세요.
      {foodILike.map(dish=> ( //javascript
      <Food key={dish.id} name={dish.name2} picture={dish.images}/>
      // key prop은 사용하지 않기 때문에 Food로 전달되지 않고 react 내부에서 사용하기 위한 것
      ))} 
    </div>
  );
}
 
export default App;