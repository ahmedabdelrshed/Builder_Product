import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";

function App() {
  // ---------- State ----------
  const [isOpen, setIsOpen] = useState(false);
  // ------------ HANDLER ---------
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

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
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className="flex items-center space-x-2">
        <Button className="bg-indigo-600 hover:bg-indigo-800">Submit</Button>
        <Button className="bg-red-600 hover:bg-red-800" onClick={closeModal}>Cancel</Button>
        </div>
      </Modal>
    </main>
  );
}

export default App;
