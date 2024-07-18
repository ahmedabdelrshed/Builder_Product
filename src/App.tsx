import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import { categories, colors, formInput, productList } from "./data";
import Input from "./components/ui/Input";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMsg from "./components/ErrorMsg";
import CircleColor from "./components/CircleColor";
import { v4 as uuid } from "uuid";
import Select from "./components/ui/Select";

function App() {
  const defaultProduct = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      imageURL: "",
      name: "",
    },
  };
  // ---------- STATE ----------
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [product, setProduct] = useState<IProduct>({
    ...defaultProduct,
  });
  const [error, setError] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [errorEdit, setErrorEdit] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [products, setProducts] = useState(productList);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [editProduct, setEditProduct] = useState<IProduct>(defaultProduct);
  const [indexProductEdit, setIndexProductEdit] = useState(0);
  // ------------ HANDLER ---------
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  function closeModalEdit() {
    setIsOpenModalEdit(false);
  }
  function openModalEdit() {
    setIsOpenModalEdit(true);
  }
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProduct({ ...product, [name]: value });
    setError({ ...error, [name]: "" });
  };
  const onChangeEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setEditProduct({ ...editProduct, [name]: value });
    setErrorEdit({ ...errorEdit, [name]: "" });
  };
  const onCancel = () => {
    setProduct(defaultProduct);
    closeModal();
    setTempColors([]);
  };
  const onCancelEdit = () => {
    setEditProduct(defaultProduct);
    closeModalEdit();
  };
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, price, imageURL } = product;
    const errors = productValidation({ title, description, price, imageURL });
    const checkErrorMsg =
      Object.values(errors).some((err) => err === "") &&
      Object.values(errors).every((err) => err === "");
    if (!checkErrorMsg) {
      setError(errors);
      return;
    }
    console.log("Send Data Success");

    setProducts([
      {
        ...product,
        id: uuid(),
        colors: tempColors,
        category: selectedCategory,
      },
      ...products,
    ]);
    setProduct(defaultProduct);
    setTempColors([]);
    closeModal();
  };
  const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, price, imageURL } = editProduct;
    const errors = productValidation({ title, description, price, imageURL });
    const checkErrorMsg =
      Object.values(errors).some((err) => err === "") &&
      Object.values(errors).every((err) => err === "");
    if (!checkErrorMsg) {
      setErrorEdit(errors);
      return;
    }
    const editProducts = [...products];
    editProducts[indexProductEdit] = { ...editProduct, colors: tempColors };
    setTempColors([]);
    setProducts(editProducts);
    setEditProduct(defaultProduct);
    closeModalEdit();
  };
  // ---------- RENDER -----------
  const renderProductList = products.map((product, index) => (
    <ProductCard
      key={product.id}
      product={product}
      setEditProduct={setEditProduct}
      openEditModal={openModalEdit}
      indexProductEdit={index}
      setIndexProductEdit={setIndexProductEdit}
      setProductColors={setTempColors}
    />
  ));
  const renderFormInputs = (
    product: IProduct,
    onchange: (event: ChangeEvent<HTMLInputElement>) => void,
    error: {
      title: string;
      description: string;
      imageURL: string;
      price: string;
    }
  ) =>
    formInput.map((input) => (
      <div className="flex flex-col" key={input.id}>
        <label
          htmlFor={input.id}
          className="mb-2 font-medium text-sm text-gray-700"
        >
          {input.label}{" "}
        </label>
        <Input
          type={input.type}
          id={input.id}
          name={input.name}
          value={product[input.name]}
          onChange={onchange}
        />
        <ErrorMsg msg={error[input.name]} />
      </div>
    ));

  const renderProductColors = (colors: string[]) =>
    colors.map((color, i) => (
      <CircleColor
        color={color}
        key={i}
        onClick={() => {
          if (tempColors.includes(color)) {
            setTempColors((prev) => prev.filter((c) => c !== color));
            return;
          }
          setTempColors((prev) => [...prev, color]);
        }}
      />
    ));
  const renderTempColors = tempColors.map((color) => (
    <span
      key={color}
      className="p-1 mr-1 mb-1 text-xs rounded-md text-white"
      style={{ backgroundColor: color }}
    >
      {color}
    </span>
  ));
  return (
    <main className="container ">
      <div className="flex justify-between items-center  p-2 m-5">
        <h2 className="font-bold text-xl md:text-2xl italic">
          Product <span className="text-indigo-600">List</span>
        </h2>
        <Button
          className="bg-indigo-600 hover:bg-indigo-800 "
          width="w-fit"
          onClick={openModal}
        >
          New Product
        </Button>
      </div>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add New Product">
        <form className="space-y-2" onSubmit={submitHandler}>
          {renderFormInputs(product, onChangeHandler, error)}
          <Select
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <div className="flex my-4 flex-wrap space-x-1">
            {renderTempColors}
          </div>
          <div className="flex my-4 space-x-1">
            {renderProductColors(colors)}
          </div>
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-600 hover:bg-indigo-800">
              Submit
            </Button>
            <Button
              className="bg-red-600 hover:bg-red-800"
              type="button"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
      <Modal
        isOpen={isOpenModalEdit}
        closeModal={closeModalEdit}
        title="EDIT PRODUCT"
      >
        <form className="space-y-3" onSubmit={submitEditHandler}>
          {renderFormInputs(editProduct, onChangeEditHandler, errorEdit)}
          <Select
            selectedCategory={editProduct.category}
            setSelectedCategory={(value) =>
              setEditProduct({ ...editProduct, category: value })
            }
          />
          <div className="flex my-4 flex-wrap space-x-1">
            {renderTempColors}
          </div>
          <div className="flex my-4 space-x-1">
            {renderProductColors(colors)}
          </div>
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-600 hover:bg-indigo-800">
              Submit
            </Button>
            <Button
              className="bg-red-600 hover:bg-red-800"
              type="button"
              onClick={onCancelEdit}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default App;
