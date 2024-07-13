export interface IProduct {

    id?: string | undefined;

    title: string;

    description: string;

    imageURL: string;

    price: string;

    colors: string[];

    category: {

        name: string;

        imageURL: string;

    }
}

export interface IInput{
    id: string;
    name: string;
    type: string;
    label: string;
} 