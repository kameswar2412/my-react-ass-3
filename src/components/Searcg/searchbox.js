import React from 'react';
const Searchbox = ({searchVal}) => {
  console.log(searchVal)
    return ( 
        <nav className="">
        <div className="">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => searchVal(e.target.value)}
          />
        </div>
      </nav>
     );
}
 
export default Searchbox;