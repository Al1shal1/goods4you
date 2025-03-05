import { useGetSingleProductQuery } from "@api/productApi";
import { Navigate, useParams } from "react-router-dom";
import { Galery } from "./galery";
import { Info } from "./info";
import { Helmet } from "react-helmet-async";


export const ProductContent = () => {
    const { id } = useParams<{ id: string }>();
    const { data: content, error, isLoading } = useGetSingleProductQuery(Number(id));

    if (isLoading) {
        return <h1 className="title_informational">Loading...</h1>;
    }
    if (error || !content) {
        return <Navigate to="*" />;
    }

    return (
        <>
            <Helmet>
                <title>{content.title} | Goods4you</title>
                <meta
                    name="description"
                    content="“Any products from famous brands with worldwide delivery”"
                />
            </Helmet>
            <div className="container">
                <div className="products">
                    <Galery content={content} />
                    <Info content={content} />
                </div>
            </div>
        </>
    );
} 