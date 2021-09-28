import React, { useEffect, useState } from 'react';
import Meal from './../Meal/Meal';
import Cart from './../Cart/Cart';


const Shop = () => {
    //  set meals 
    const [meals,setMeals] = useState([]);
   //    cart set 
    const [cart,setCart] = useState([]);


    useEffect(()=>{
     fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish")
     .then(res => res.json())
     .then(data => {
      setMeals(data.meals)
      setSearch(data.meals)
     })
    },[]);

    // add to cart 
    const addToCart = meal => {
        const newMeal = [...cart,meal];
        setCart(newMeal)
       
    }
   
    // set search 
    const [search,setSearch] = useState([]);

    // search change 
    const searchChangeHandle =(event)=>{
         const searchText = event.target.value;
         const matchProduct = meals.filter(meal => meal.strMeal.toLowerCase().includes(searchText.toLowerCase()))
       setSearch(matchProduct);
    }
    return (
       <div className="row">
            <div className="p-2 bg-secondary ">
              <form className="w-75 mx-auto">
                 <input onChange={searchChangeHandle} className="form-control me-2" type="search"  placeholder="Search Product" aria-label="Search"/>
              </form>
            </div>

            <div className="row mt-3">
           <div className="col-md-9">
            <div className="row">
              {
                  search.map(meal => <Meal 
                    key={meal.idMeal}
                   meal={meal}
                   addToCart={addToCart}
                  />)
              }
             </div>
            </div>

            <div className="col-md-3">
             <Cart cart={cart}/>
            </div>
           
        </div>
        </div>
    );
};

export default Shop;