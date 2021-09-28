import React from 'react';

const Meal = (props) => {
    
    const {strMeal,strMealThumb,strInstructions} = props.meal;
    return (

      <div className="col-md-4 mb-3">
      <div className="card">
        <img src={strMealThumb} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h4 className="card-title text-primary">{strMeal}</h4>
        <p className="card-text text-success">{strInstructions.slice(0,100)}</p>
        <button onClick={()=>props.addToCart(props.meal)} className="btn btn-warning me-2">Add to Cart</button>
        <button className="btn btn-primary">Show Deatails</button>
      </div>
    </div>
  </div>

    );
};

export default Meal;