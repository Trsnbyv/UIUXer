import studiesImgLeft from "../../assets/images/studies-img-left.png"
import studiesImgRight from "../../assets/images/studies-img-right.png"
let Studies = () => {
  return (
    <section className="studies-section">
      <div className="container">
        <div className="studies">
          <div className="studies__text-wrapper">
            <h2 className="studies__title">Stunning Case Studies</h2>
            <p className="studies__text">
              Create an optimal visual experience for your users with these inspiring layouts.
            </p>
          </div>
          <div className="studies__img-wrapper">
            <div className="wrapper-left">
               <img src={studiesImgLeft} width={645} height={881} alt="Web"/>
               <p className="studies-wrapper-text">Case Study Single - Web</p>
            </div>
            <div className="wrapper-right">
               <img src={studiesImgRight} width={645} height={881} alt="Mobile"/>
               <p className="studies-wrapper-text">Case Study Single - Mobile</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studies;
