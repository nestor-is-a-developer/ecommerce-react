import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

	//UseEffect se ejecuta despuès de que react hace el render del componente
	useEffect(async () => {
		const response = await axios(API);
		setProducts(response.data);
	}, []);

    return products;
};

export default useGetProducts