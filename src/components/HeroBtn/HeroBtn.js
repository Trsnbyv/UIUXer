const HeroBtn = ({content, bgBtn}) =>{
    return(
        <button className={ `hero__btn ${bgBtn ? "bg-blue" : "bg-orange"}`}>{content}</button>
    )
}
export default HeroBtn