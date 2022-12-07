import { useParams, useNavigate } from "react-router-dom";
const ProductDetailPage = ({ products }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [ProductDetail] = products.filter(
    (product) => product.id === Number(productId)
  );

  if (!ProductDetail) {
    return <div className="ProductDetailPage">존재하지 않는 상품입니다!</div>;
  }

  return (
    <main className="ProductDetailPage">
      <div>여기는 상품 상세 페이지</div>
      <button onClick={() => navigate(-1)}>목록 보기</button>
      <button onClick={() => navigate("/")}>홈으로 이동하기</button>
      <ul>
        <li>판매번호: {ProductDetail.id}</li>
        <li>상품명: {ProductDetail.name}</li>
        <li>판매처: {ProductDetail.email}</li>
        <li>상세설명: {ProductDetail.body}</li>
      </ul>
    </main>
  );
};

export default ProductDetailPage;
