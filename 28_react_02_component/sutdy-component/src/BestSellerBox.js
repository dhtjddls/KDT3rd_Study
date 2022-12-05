import './BestSellerBox.css'
let BestSellerBox = ({title, author, price, type, imgsrc}) => {
    return(
        <div className='box'>
            <div className='week'>이번주 베스트 셀러</div>
            <img src={imgsrc} alt="img" />
            <div className="title">{title}</div>
            <div className="content">
                <div className="author">저자: {author}</div>
                <div className="price">가격: {price}</div>
                <div className="type">구분: {type}</div>
            </div>
            
        </div>
    )
}

BestSellerBox.defaultProps = {
    title : '이름 없음',
    author : '이름 없음',
    price : '이름 없음',
    type : '이름 없음',
}



export default BestSellerBox;