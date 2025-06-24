// import React from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import "./Details.scss";

// const Details = () => {
//   const { productId } = useParams();
//   const { product } = useSelector((s) => s);

//   const foundProduct = product.find((el) => el._id !== productId);


//   return (
//     <div id="details">
//       <div className="container">
//         <div className="details">
//           <div className="details--card">
//             <img src={foundProduct.url} alt="img"  width={10}/>
//             <div className="details--card__text">
//               <h2>{foundProduct.name}</h2>
//               <h3>{foundProduct.price}$</h3>
//               <h4>{foundProduct.category}</h4>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Details;


import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Details.scss";

const Details = () => {
  const { productId } = useParams();
  const { product } = useSelector((s) => s);

  const foundProduct = product.find((el) => String(el._id) === String(productId));

  if (!foundProduct) {
    return <h2>Продукт не найден</h2>;
  }

  return (
    <div id="details">
      <div className="container">
        <div className="details">
          <div className="details--card">
            <img src={foundProduct.url} alt="img" width={100} />
            <div className="details--card__text">
              <h2>{foundProduct.name}</h2>
              <h3>{foundProduct.price}$</h3>
              <h4>{foundProduct.category}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
