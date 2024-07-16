// ** productObj === validationObj (TITLE,DESCRIPTION,IMAGE,PRICE)

export const productValidation = (product: {
    title: string, description: string, imageURL: string;

    price: string;
}) => {
    const error: {
        title: string;

        description: string;

        imageURL: string;

        price: string;
    } = {
        title: "",
        description: "",
        imageURL: "",
        price: "",
    }
    if (product.title.trim().length < 10 || product.title.trim().length > 80) {
        error.title = "Title must be between 10 and 80 characters long."
    }
    if (product.description.trim().length < 10 || product.description.trim().length > 900) {
        error.description = "Description must be between 10 and 900 characters long."
    }
    // Image URL
    const imageUrlPattern = /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|\d{1,3}(\.\d{1,3}){3}|\[([a-f\d]{1,4}:){7,7}[a-f\d]{1,4}\]|[a-f\d]{1,4}::[a-f\d]{1,4})((:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(#[-a-z\d_]*)?)$/i;
    if (!imageUrlPattern.test(product.imageURL)) {
        error.imageURL = "Invalid image URL. Please provide a valid URL ."
    }

    // validate Price 
    if (isNaN(Number(product.price)) || product.price === '') {
        error.price = "Invalid price. Please provide a valid Price."
    }
    return error
}