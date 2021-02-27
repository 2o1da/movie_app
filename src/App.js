import React from "react";

function Food({name,picture}){
  //return <h3>I like {name}!</h3>;
  return <div>
    <h2>I like {name}.</h2>
    <img src={picture}/>
  </div>
}

const foodILike=[
  {
    name:"Kimchi",
    images:"http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  }
]   

function App() {
  return (
    <div>
      <h1>김다솔</h1>
      안녕하세요.
      {foodILike.map(dish=> (
      <Food name={dish.name} picture={dish.images}/>
      ))} 
    </div>
  );
}

export default App;