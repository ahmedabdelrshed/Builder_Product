import { ICategory, IInput, IProduct } from "../interfaces";
import { v4 as uuid } from 'uuid';
export const productList: IProduct[] = [
    {
        id: uuid(),
        title: "Dell Alienware 2024",
        description: "R5 Gaming Laptop | Core Ryzen 9 - 1TB SSD- 64GB RAM - 3080 Ti | 8 Cores @ 4.9 GHz - 12GB GDDR6X",
        imageURL: "https://ahmedabdelrshed.github.io/online-store/images/81whwdW8ERL._AC_UY327_FMwebp_QL65_.webp",
        price: "3000",
        colors: [
            "#a855f7",
            "#2563eb",
            "#84D2C5",
        ],
        category: {
            name: "Lap Tops",
            imageURL: "https://ahmedabdelrshed.github.io/online-store/images/71bphKmt0DL._AC_UY327_FMwebp_QL65_.webp"
        },
    },
    {
        id: uuid(),
        title: "Dell Alienware 2024",
        description: "R5 Gaming Laptop | Core Ryzen 9 - 1TB SSD- 64GB RAM - 3080 Ti | 8 Cores @ 4.9 GHz - 12GB GDDR6X",
        imageURL: "https://ahmedabdelrshed.github.io/online-store/images/71bphKmt0DL._AC_UY327_FMwebp_QL65_.webp",
        price: "3000",
        colors: [
            "#a855f7",
            "#2563eb",
            "#84D2C5",
        ],
        category: {
            name: "Lap Tops",
            imageURL: "https://ahmedabdelrshed.github.io/online-store/images/71bphKmt0DL._AC_UY327_FMwebp_QL65_.webp"
        },
    },
    {
        id: uuid(),
        title: "ASUS ROG 2024",
        description: "R5 Gaming Laptop | Core Ryzen 9 - 1TB SSD- 64GB RAM - 3080 Ti | 8 Cores @ 4.9 GHz - 12GB GDDR6X",
        imageURL: "https://ahmedabdelrshed.github.io/online-store/images/71OyrTkxpGL._AC_UY327_FMwebp_QL65_.webp",
        price: "3000",
        colors: [
            "#3C2A21",
            "#6C4AB6",
            "#CB1C8D",
        ],
        category: {
            name: "Lap Tops",
            imageURL: "https://ahmedabdelrshed.github.io/online-store/images/81whwdW8ERL._AC_UY327_FMwebp_QL65_.webp"
        },
    },
    {
        id: uuid(),
        title: "Dell Alienware 2024",
        description: "R5 Gaming Laptop | Core Ryzen 9 - 1TB SSD- 64GB RAM - 3080 Ti | 8 Cores @ 4.9 GHz - 12GB GDDR6X",
        imageURL: "https://ahmedabdelrshed.github.io/online-store/images/71Ekj79pZtL._AC_UY327_FMwebp_QL65_.webp",
        price: "5000",
        colors: [
            "#645CBB",
            "#1F8A70",
            "#820000",
            "#FF0032"
        ],
        category: {
            name: "Lap Tops",
            imageURL: "https://ahmedabdelrshed.github.io/online-store/images/81whwdW8ERL._AC_UY327_FMwebp_QL65_.webp"
        },
    }

]
export const formInput: IInput[] = [
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
    , {
        id: "price",
        name: "price",
        type: "text",
        label: "Product Price",
    }
]

export const colors: string[] = [
    "#a855f7",
    "#2563eb",
    "#84D2C5",
    "#13005A",
    "#A31ACB",
    "#FF6E31",
    "#3C2A21",
    "#6C4AB6",
    "#CB1C8D",
    "#645CBB",
    "#1F8A70",
    "#820000",
    "#FF0032"
]

export const categories: ICategory[] = [
    {
        id: uuid(),
        name: "Lap Tops",
        imageURL: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQxN4dSft1Rpe-bp1LmpVYDjhm5cpwoYUYMYyngmhCnN7kwS9QoG2e6WZ87A2ZS7T2XiiZTDm-5LtJKxGJyW1XgWTEl5Wu-6yzF7D8P7cV8jaQrs8MLh6HhFgweOoP947YvAcc5Aw&usqp=CAc"
    }
    , {
        id: uuid(),
        name: "Shoes",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QaRqKWxfrGdQ9r5U5mWg-RWItNxzmphX-Q&s"
    }
    , {
        id: uuid(),
        name: "T-Shirt",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiTskihLm4bPE1fLtzKVc1VaFwqANnFExovA&s"
    }
    , {
        id: uuid(),
        name: "Mobile Phone",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSmG-lAwP3Pyu62zaY0k-zAIkL03yHKJYF4A&s"
    }
]