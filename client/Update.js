import React from "react";

const Update = props => {
    // return (
    //         <div className="category-listtwo">
    //         {/* <div className="category-data"> CATNIP</div>
    //           <div className="category-data">Trader Hoes</div>
    //           <div className="category-data">Tapioca</div>
    //           <div className="category-data">DeLorean</div>
    //           <div className="category-data">Pesos</div> */}

    //         {props.lastOne.map((item, index) => {
    //             return(
    //             <div key={index.id}>
    //                 <div>{item.category}</div>
    //             </div>
    //         )
    //         })}
    //       </div>
                

    return (
        <div>
        {props.jobs.map((item, index) => {
          return (
            <div key={index.id}>
              <div className="txn-data">JobEntry{item.id}{"DOit"}{item.job}</div>

            </div>
            )
          }
        )}
      </div>
    
    );
  }
export default Update