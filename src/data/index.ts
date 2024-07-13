import { IInput } from "../interfaces";

export const formInput:IInput[] = [
    {
        id: "title",
        name: "title",
        type: "text",
        label: "Product Title",
    }
    ,
    {
        id: "description",
        name: "description",
        type: "text",
        label: "Product Description",
    },
    {
        id: "image",
        name: "imageURL",
        type: "text",
        label: "Product Image URL",
    }
    ,{
        id: "price",
        name: "price",
        type: "text",
        label: "Product Price",
    }
]