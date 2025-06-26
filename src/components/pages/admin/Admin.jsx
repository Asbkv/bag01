import React, { useState } from "react";
import "./Admin.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

const Admin = () => {
  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
   const [sortAZ, setSortAZ] = useState(true);
   const product = useSelector((s) => s.product)

  const dispatch = useDispatch();
  function AddProduct() {
    if (!productUrl || !productName || !productPrice || !productCategory) {
      toast.error("Заполните все пустые поля!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      const isExist = product.some(
        (p) => p.name.trim().toLowerCase() === productName.trim().toLowerCase()
      );
      if (isExist) {
        toast.error("Продукт с таким именем уже существует!", {
        });
        return;
      }
    } else {
      const newData = {
        url: productUrl,
        name: productName,
        price: productPrice,
        category: productCategory,
        count: 1,
      };
      let res = axios.post(
        `https://api-crud.elcho.dev/api/v1/11d9b-bcdb1-01943/bagProduct`,
        newData
      );
      dispatch({ type: "ADD_PRODUCT", payload: newData });
      toast.success("🦄 Wow so easy!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setProductUrl("");
      setProductName("");
      setProductPrice("");
      setProductCategory("");
    }
  }

  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <div className="admin--form">
            <input
              type="text"
              onChange={(e) => setProductUrl(e.target.value)}
              value={productUrl}
              placeholder="Url:"
            />
            <input
              type="text"
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
              placeholder="Product Name"
            />
            <input
              type="number"
              onChange={(e) => setProductPrice(e.target.value)}
              value={productPrice}
              placeholder="Product Price"
            />
            <input
              type="text"
              onChange={(e) => setProductCategory(e.target.value)}
              value={productCategory}
              placeholder="Category"
            />
            <button onClick={AddProduct}>Add</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Admin;
