import HeroBtn from "../HeroBtn/HeroBtn";
import HeroImg from "../../assets/images/hero-img.svg";
const Hero = () =>{
    return(
        <section className="hero-section">
        <div className="container">
          <div className="hero">
            <div className="hero__title-wrapper">
              <h2 className="hero__title">
                Tell your creativity to the world with{" "}
                <span className="hero__title-span">UIUXer</span>
              </h2>
            </div>
            <div className="hero__text-wrapper">
              <p className="hero__text">
                UIUXer is a creative, minimal, and cleanly designed personal
                and portfolio Webflow template.
              </p>
            </div>
            <div className="hero__btn-wrapper">
              <HeroBtn content={"Buy Template"} bgBtn={false}/>
              <HeroBtn content={"Explore Page"} bgBtn={true}/>
            </div>
            <img src={HeroImg} width={203} height={205} alt="hero img"/>
          </div>
        </div>
      </section>
    )
}

export default Hero