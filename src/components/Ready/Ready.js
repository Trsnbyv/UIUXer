import HeroBtn from "../HeroBtn/HeroBtn";
import readyImg from "../../assets/images/ready-img.png"
const Ready = () => {
  return (
    <section className="ready-section">
      <div className="container">
        <div className="ready">
           <div className="ready-wrapper">
             <div className="ready-title-wrapper">
               <h2 className="ready__title">Ready to get start with UIUXer?</h2>
             </div>
             <p className="ready__text">
               Well-planned layouts with a clear structure that can be utilized to demonstrate your inventiveness in the digital business field.
             </p>
             <HeroBtn content={"Get Start Now"} bgBtn={false}/>
           </div>
           <img src={readyImg} width={637} height={463} alt="Ready Img"/>
        </div>
      </div>
    </section>
  );
};

export default Ready