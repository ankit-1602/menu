import React from 'react';
const Categories = ({filterMenu,allCategories}) => {
  return <div className="btn-container">
    { 
      allCategories.map((category,index)=>{
       return (
       <button 
          type="button"  
          className="filter-btn" 
          key={index}
          onClick={()=>filterMenu(category)}
        >
          {category}
        </button>)
      }) 
    }
  </div>
};

export default Categories;
