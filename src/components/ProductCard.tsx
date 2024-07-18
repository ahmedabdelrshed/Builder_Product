import { IProduct } from "../interfaces";
import { textSlicer } from "../utilis/functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
  setEditProduct: (product: IProduct) => void;
  openEditModal: () => void;
  indexProductEdit: number;
  setIndexProductEdit: (index: number) => void;
  setProductColors:(colors:string[]) => void;
}

const ProductCard = ({
  product,
  setEditProduct,
  openEditModal,
  indexProductEdit,
  setIndexProductEdit,
  setProductColors
}: IProps) => {
  const { title, description, imageURL, price, colors, category } = product;
  // ----------- HANDLER -----------
  const handleEditClick = () => {
    setEditProduct(product);
    openEditModal();
    setProductColors(colors);
    setIndexProductEdit(indexProductEdit);
  };
  // -------- RENDER --------------------------------
  const renderProductColors = colors.map((color, i) => (
    <CircleColor color={color} key={i} />
  ));
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-3 flex flex-col">
      <Image
        className="rounded-md mb-2  h-52 lg:object-fill "
        src={imageURL}
        alt="Product image"
      />
      <h2 className="font-semibold">{title}</h2>
      <p>{textSlicer(description, 80)}</p>
      <div className="flex my-4 space-x-1">{renderProductColors}</div>
      <div className="flex items-center justify-between ">
        <span className="text-indigo-600 font-semibold">${price}</span>
        <div className="flex items-center space-x-2">
          <span className="text-[12px] font-semibold">{category.name}</span>
          <Image
            className="w-10 h-10  rounded-full  "
            src={category.imageURL}
            alt="Product image"
          />
        </div>
      </div>
      <div className="flex items-center justify-between space-x-2 mt-3">
        <Button className="bg-indigo-600 hover:bg-indigo-800" onClick={handleEditClick}>
          Edit
        </Button>
        <Button className="bg-red-500 hover:bg-red-800" width="w-full">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
