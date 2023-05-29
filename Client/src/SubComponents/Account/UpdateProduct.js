import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../../Context/DataContext";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [allData, setAllData] = useContext(DataContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const item = allData?.filter((d) => {
    return d._id === params.id;
  });
  console.log(item);
  const [data, setData] = useState({
    imgs: [],
    name: item[0].name,
    price: item[0].price,
    description: item[0].description,
    category: item[0].category,
    stock: item[0].stock,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleImage = (e) => {
    const { name, files } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: files,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < data.imgs.length; i++) {
      formData.append("imgs", data.imgs[i]);
    }
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("category", data.category);
    const response = await axios.put(
      process.env.REACT_APP_PATH + `product/update/${item[0]._id}`,
      formData
    );
    const index = allData.findIndex((d) => d._id === item[0]._id);
    allData[index] = data;
    setAllData([...allData]);
    toast(response.data.message);
    navigate("../products");
    window.location.reload();
  };

  return (
    <div className="md:p-10">
      <form
        className="mx-auto md:w-2/3 lg:w-1/2 shadow  flex flex-col p-6"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-3xl mb-6 font-bold">Update Product</h1>
        <label htmlFor="imgs" className="font-bold">
          Images :
        </label>
        <input
          type="file"
          accept="image/*"
          name="imgs"
          multiple
          id="imgs"
          className="border-b outline-none border-black p-1 text-sm w-full text-gray-500"
          onChange={handleImage}
        />
        <label htmlFor="name" className="font-bold mt-6">
          Name :
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="border-b outline-none border-black p-1 text-sm w-full text-gray-500"
          placeholder="Item Name"
          value={data.name}
          onChange={handleChange}
        />
        <label htmlFor="price" className="font-bold  mt-6">
          Price :
        </label>
        <input
          type="number"
          name="price"
          id="price"
          className="border-b outline-none border-black p-1 text-sm w-full text-gray-500"
          placeholder="Item Price"
          value={data.price}
          onChange={handleChange}
        />

        <label htmlFor="description" className="font-bold  mt-6">
          Description :
        </label>
        <input
          type="text"
          name="description"
          id="description"
          className="border-b outline-none border-black p-1 text-sm w-full text-gray-500"
          placeholder="Item Description"
          value={data.description}
          onChange={handleChange}
        />

        <label htmlFor="category" className="font-bold  mt-6">
          Category :
        </label>
        <select
          name="category"
          id="category"
          className="border-b outline-none border-black p-1 text-sm w-full text-gray-500"
          value={data.category}
          onChange={handleChange}
        >
          <option selected value={item[0].category} disabled>
            {item[0].category}
          </option>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kids">Kids</option>
        </select>
        <button className="text-sm text-center bg-black text-white mt-6  hover:border-gray-400 py-2.5 px-3.5">
          UPDATE
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
