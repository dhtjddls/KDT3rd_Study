import './Food.css'
const Food = ({food}) => {
    return (
        <>
            <p><span>{food}</span> 맛이 정말 좋아요</p>
        </>
    )

}
Food.defaultProps = {
    food : '음식',
}

export default Food;