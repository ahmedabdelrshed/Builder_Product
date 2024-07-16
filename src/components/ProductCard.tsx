import { IProduct } from "../interfaces";
import { textSlicer } from "../utilis/functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./ui/Button";

// interface IProps   {

// }

const ProductCard = (product: IProduct) => {
  const { title, description, imageURL, price, colors, category } = product;
  // -------- RENDER --------------------------------
  const renderProductColors = colors.map((color, i) => (
    <CircleColor color={color} key={i} />
  ));
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-3 flex flex-col">
      <Image
        className="rounded-md mb-2 w-full h-52 lg:object-fill "
        src={imageURL}
        alt="Product image"
      />
      <h2 className="font-semibold">{title}</h2>
      <p>{textSlicer(description, 80)}</p>
      <div className="flex my-4 space-x-1">{renderProductColors}</div>
      <div className="flex items-center justify-between ">
        <span>${price}</span>
        <div className="flex items-center space-x-2">
          <span>{category.name}</span>
          <Image
            className="w-10 h-10  rounded-full  "
            src={category.imageURL}
            alt="Product image"
          />
        </div>
      </div>
      <div className="flex items-center justify-between space-x-2 mt-3">
        <Button
          className="bg-indigo-700"
          onClick={() => {
            console.log("Clicked button");
          }}
        >
          Edit
        </Button>
        <Button className="bg-red-700" width="w-full">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
