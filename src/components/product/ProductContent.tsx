import { useGetSingleProductQuery } from "../../api/productApi";
import { Navigate, useParams } from "react-router-dom";
import { Galery } from "./galery";
import { Info } from "./info";


export const ProductContent = () => {
    const { id } = useParams<string>();
    const { data: content, error, isLoading } = useGetSingleProductQuery(`${id}`);

    if (isLoading) {
        return <h1 className="title_informational">Loading...</h1>;
    }

    if (error || !content) {
        return <Navigate to="*" />;
    }

    return (
        <div className="container">
            <div className="products">
                <Galery content={content} />
                <Info content={content} />
            </div>
        </div>
    );
} 