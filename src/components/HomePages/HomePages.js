import homepageImgLeft from "../../assets/images/homepage-left-img.png"
import homepageImgRight from "../../assets/images/homepage-right-img.png"
let HomePage = () => {
  return (
    <section className="homepage-section">
      <div className="container">
        <div className="homepage">
          <div className="homepage__text-wrapper">
            <h2 className="homepage__title">Professional Home Pages</h2>
            <p className="homepage__text">
              Attractive and stylish home layouts bring your portfolio website
              to the next level.
            </p>
          </div>
          <div className="homepage__img-wrapper">
            <div className="wrapper-left">
               <img src={homepageImgLeft} width={645} height={958} alt="img ux designer"/>
               <p className="homepage-wrapper-text">Home UX Designer</p>
            </div>
            <div className="wrapper-right">
               <img src={homepageImgRight} width={645} height={958} alt="img ui designer"/>
               <p className="homepage-wrapper-text">Home UI Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
