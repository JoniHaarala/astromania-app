import axios from 'axios'

/**
 * It takes in a prop called abba and then logs it to the console.
 */
const Product = ({ abba }) => {
    console.log(abba)
    return (
        <div>Product</div>
    )
}

/**
 * It fetches data from an API and returns it as props
 * @returns The data from the API.
 */
export const getStaticProps = async ({params}) => {
    const id = params.id;
    const data = axios.get("aca va el link de la api");
    return {
        props: {
            abba: "aca van los datos de la api que despues se usan arriba"
        }
    }
}

export default Product; 