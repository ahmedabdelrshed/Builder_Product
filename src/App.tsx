import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import { formInput } from "./data";
import Input from "./components/ui/Input";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMsg from "./components/ErrorMsg";

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
  const [product, setProduct] = useState<IProduct>({
    ...defaultProduct,
  });
  const [error, setError] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  // ------------ HANDLER ---------
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProduct({ ...product, [name]: value });
    setError({ ...error, [name]: "" });
  };
  const onCancel = () => {
    console.log("Cancelled");
    setProduct(defaultProduct);
    closeModal();
  };
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, price, imageURL } = product;
    const errors = productValidation({ title, description, price, imageURL });
    console.log(errors);
    const checkErrorMsg =
      Object.values(errors).some((err) => err === "") &&
      Object.values(errors).every((err) => err === "");
    if (!checkErrorMsg) {
      setError(errors);
      return;
    }
    console.log("Send Data Success");
  };
  // ---------- RENDER -----------
  const renderFormInputs = formInput.map((input) => (
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
        onChange={onChangeHandler}
      />
      <ErrorMsg msg={error[input.name]} />
    </div>
  ));

  return (
    <main className="container ">
      <div className="flex justify-between items-center  p-2 m-5">
        <h2>Product Last</h2>
        <Button
          className="bg-indigo-600 hover:bg-indigo-800"
          width="w-fit"
          onClick={openModal}
        >
          Add New Product
        </Button>
      </div>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add New Product">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputs}
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-600 hover:bg-indigo-800">
              Submit
            </Button>
            <Button className="bg-red-600 hover:bg-red-800" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default App;
