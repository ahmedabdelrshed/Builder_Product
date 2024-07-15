import { textSlicer } from "../utilis/functions";
import Image from "./Image";
import Button from "./ui/Button";

// interface IProps {

// }

const ProductCard = () => {
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-3 flex flex-col">
      <Image
        className="rounded-md mb-2 w-full h-52 lg:object-cover "
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QaRqKWxfrGdQ9r5U5mWg-RWItNxzmphX-Q&s"
        alt="Product image"
      />
      <h3>Cars dddddd</h3>
      <p>
        {textSlicer(
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse rem ratione reprehenderit, ducimus fugit animi repudiandae vitae accusantium maiores incidunt perspiciatis libero assumenda dolore corrupti voluptate, mollitia alias quo voluptates?"
        ,80)}
      </p>
      <div className="flex my-4 space-x-3">
        <span className="w-5 h-5 rounded-full bg-red-600 cursor-pointer" />
        <span className="w-5 h-5 rounded-full bg-yellow-600 cursor-pointer" />
      </div>
      <div className="flex items-center justify-between ">
        <span>$500,000</span>
        <Image
          className="w-10 h-10  rounded-full "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QaRqKWxfrGdQ9r5U5mWg-RWItNxzmphX-Q&s"
          alt="Product image"
        />
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
