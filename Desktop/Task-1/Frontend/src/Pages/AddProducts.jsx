import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../actions/productActions";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const AddProducts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [price, setPrice] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [seller, setSeller] = useState("");
  const [brand, setBrand] = useState("");
  const [stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [picMessage,setPicMessage] = useState("")
  const [imagePreviews, setImagePreviews] = useState([]);

  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [ratings, setRatings] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [isFreeDelivery, setIsFreeDelivery] = useState(false);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const productCreate = useSelector((state) => state.productCreate);
  const { loading, error, success } = productCreate;
  useEffect(() => {
    if (success) {
      navigate("/");
    }
  }, [dispatch, success]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    const filePreviews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(filePreviews);
  };

  const handleColorsChange = (e) => {
    const options = Array.from(e.target.options);
    const selectedColors = options
      .filter((option) => option.selected)
      .map((option) => option.value);
    setColors(selectedColors);
  };

  const handleSizesChange = (e) => {
    const options = Array.from(e.target.options);
    const selectedSizes = options
      .filter((option) => option.selected)
      .map((option) => option.value);
    setSizes(selectedSizes);
  };

 

  const resetHandler = () => {
    setTitle("");
    setDescription("");
    setPrice(0);
    setDiscountPercentage(0);
    setStock(1);
    setBrand("");
    setImages([]);
    setColors([]);
    setSizes([]);
    setCategory("");
    setRatings(0);
    setReviews(0);
    setIsFreeDelivery(false);
    setDeliveryCharge(0);
  };

  const navigate = useNavigate();
  
   const postDetails = async (pics) => {
     const uploadedImages = [];
     for (let pic of pics) {
       if (!pic) {
         setPicMessage("Please Select an Image");
         return;
       }
       setPicMessage(null);
       if (pic.type === "image/jpeg" || pic.type === "image/png") {
         const data = new FormData();
         data.append("file", pic);
         data.append("upload_preset", "TaskManage");
         data.append("cloud_name", "taskpic");
         try {
           const res = await fetch(
             "https://api.cloudinary.com/v1_1/taskpic/image/upload",
             {
               method: "post",
               body: data,
             }
           );
           const result = await res.json();
           uploadedImages.push(result.url.toString());
         } catch (err) {
           console.error(err);
           setPicMessage("Image upload failed");
         }
       } else {
         setPicMessage("Please Select an Image");
       }
     }
     return uploadedImages;
   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !title ||
      !description ||
      !category ||
      !price ||
      !seller ||
      !brand ||
      !stock ||
      !ratings ||
      !reviews ||
      isFreeDelivery === undefined
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    const uploadedImages = await postDetails(images);
     if (uploadedImages.length !== images.length) {
       alert("Some images failed to upload.");
       return;
     }

    dispatch(
      createProduct(
        title,
        description,
        price,
        discountPercentage,
        seller,
        brand,
        stock,
        ratings,
        reviews,
        category,
        isFreeDelivery,
        deliveryCharge,
      uploadedImages,
        colors,
        sizes
      )
    );
     resetHandler()
     navigate("/")
  };

  return (
    <div className="mx-20 ">
      <div className="p-5">
        {loading && <Loading />}
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {picMessage && <ErrorMessage variant="danger">{picMessage}</ErrorMessage>}
        <span className="text-3xl my-4 font-light">
          Create a Product as seller
        </span>
        <hr />
        <form onSubmit={handleSubmit} className="grid grid-cols-2 mt-8 gap-3">
          <div>
            <label htmlFor="title" className="text-gray-900">
              Enter title
            </label>
            <div className="mt-2">
              <input
                id="title"
                name="title"
                type="text"
                value={title}
                required
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="price" className="text-gray-900">
              Enter Product Price
            </label>
            <div className="mt-2">
              <input
                id="price"
                name="price"
                type="number"
                value={price}
                required
                min={1}
                placeholder="like 230"
                onChange={(e) => setPrice(Number(e.target.value))}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="discountPercent" className="text-gray-900">
              Enter Discount in Percentage
            </label>
            <div className="mt-2">
              <input
                id="discountPercent"
                name="discountPercent"
                type="number"
                value={discountPercentage}
                min={1}
                max={99}
                required
                placeholder="like 230"
                onChange={(e) => setDiscountPercentage(Number(e.target.value))}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="seller" className="text-gray-900">
              Seller name
            </label>
            <div className="mt-2">
              <input
                id="sellerr"
                name="seller"
                type="text"
                required
                value={seller}
                placeholder="Seller name"
                onChange={(e) => setSeller(e.target.value)}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="brand" className="text-gray-900">
              Brand
            </label>
            <div className="mt-2">
              <input
                id="brand"
                name="brand"
                type="text"
                required
                value={brand}
                placeholder="Brand name"
                onChange={(e) => setBrand(e.target.value)}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="category" className="text-gray-900">
              Category
            </label>
            <div className="mt-2">
              <input
                id="category"
                name="category"
                type="text"
                required
                value={category}
                placeholder="Category"
                onChange={(e) => setCategory(e.target.value)}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="stock" className="text-gray-900">
              Stock
            </label>
            <div className="mt-2">
              <input
                id="stock"
                name="stock"
                type="number"
                required
                value={stock}
                placeholder="In Stock"
                onChange={(e) => setStock(e.target.value)}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="ratings" className="text-gray-900">
              Rating
            </label>
            <div className="mt-2">
              <input
                id="ratings"
                name="rating"
                type="number"
                required
                value={ratings}
                placeholder="Rating"
                onChange={(e) => setRatings(e.target.value)}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="review" className="text-gray-900">
              Review
            </label>
            <div className="mt-2">
              <input
                id="review"
                name="review"
                type="number"
                required
                value={reviews}
                placeholder="review"
                onChange={(e) => setReviews(Number(e.target.value))}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="images" className="text-gray-900">
              Images
            </label>
            <div className="mt-2">
              <input
                id="images"
                name="images"
                type="file"
                multiple
                required
                placeholder="Images"
                onChange={handleImageChange}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ul>
                {images.map((img, index) => (
                  <li className="bg-slate-100" key={index}>
                    {img.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            {imagePreviews.length > 0 && (
              <div className="w-[12vw]">
                {imagePreviews.map((preview, i) => (
                  <img src={preview} alt="Not working" />
                ))}
              </div>
            )}
          </div>

          <div>
            <label className="text-gray-900">Colors</label>
            <select
              multiple
              onChange={handleColorsChange}
              className="border *:border bg-slate-100"
            >
              <option value="Red">Red</option>
              <option value="Green">Green</option>
              <option value="Blue">Blue</option>
              <option value="Yellow">Yellow</option>
            </select>
            <ul>
              {colors.map((color, index) => (
                <li key={index}>{color}</li>
              ))}
            </ul>
          </div>

          <div>
            <label>Sizes</label>
            <select multiple onChange={handleSizesChange}>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="X-Large">X-Large</option>
            </select>
            <ul>
              {sizes.map((size, index) => (
                <li key={index}>{size}</li>
              ))}
            </ul>
          </div>

          <div>
            <input
              type="checkbox"
              checked={isFreeDelivery}
              onChange={(e) => setIsFreeDelivery(e.target.checked)}
            />
            <label htmlFor="freeDelivery" className="text-gray-900">
              Free delivery
            </label>
          </div>

          <div>
            <label htmlFor="deliveryCharge" className="text-gray-900">
              Delivery charge
            </label>
            <div className="mt-2">
              <input
                id="deliveryCharge"
                name="deliveryCharge"
                type="number"
                value={deliveryCharge}
                disabled={isFreeDelivery}
                placeholder="Delivery charge"
                onChange={(e) => setDeliveryCharge(e.target.value)}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-2">
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              required
              className="border"
            ></textarea>
          </div>

          <button type="submit" className="bg-green-400 p-0.5">
            Submit
          </button>
          <button onClick={resetHandler} className="bg-blue-300 p-0.5">Reset</button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
