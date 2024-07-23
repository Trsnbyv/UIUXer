import supportImgLeft from "../../assets/images/support-img-left.png"
import supportImgRight from "../../assets/images/support-img-right.png"
import supportImgLeftBottom from "../../assets/images/support-img-left-bottom.png"
import supportImgRightBottom from "../../assets/images/support-img-right-bottom.png"
let Support = () => {
  return (
    <section className="support-section">
      <div className="container">
        <div className="support">
          <div className="support__text-wrapper">
            <h2 className="support__title">Supportive Pages</h2>
            <p className="support__text">
              Feel the feature of creativity with these inner page layouts that perfectly match your site.
            </p>
          </div>
          <div className="support__img-wrapper">
            <div className="wrapper-left">
               <img src={supportImgLeft} width={645} height={881} alt="Web"/>
               <p className="support-wrapper-text">About Me</p>
            </div>
            <div className="wrapper-right">
               <img src={supportImgRight} width={645} height={881} alt="Mobile"/>
               <p className="support-wrapper-text">Blog</p>
            </div>
          </div>
          <div className="support__img-wrapper">
            <div className="wrapper-left">
               <img src={supportImgLeftBottom} width={645} height={881} alt="Web"/>
               <p className="support-wrapper-text">Blog Single</p>
            </div>
            <div className="wrapper-right">
               <img src={supportImgRightBottom} width={645} height={881} alt="Mobile"/>
               <p className="support-wrapper-text">Contact Us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
