import ProductItem from "./ProductItem";
const productList = ({ products }) => {
  return products.map((product) => {
    return <ProductItem key={product.id} product={product}></ProductItem>;
  });
};

export default productList;
