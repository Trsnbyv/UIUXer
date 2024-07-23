import utilityImgFirst from "../../assets/images/utility-img-first.png"
import utilityImgSecond from "../../assets/images/utility-img-second.png"
import utilityImgThird from "../../assets/images/utility-img-third.png"
import utilityImgFourth from "../../assets/images/utility-img-fourth.png"
import utilityImgFifth from "../../assets/images/utility-img-fifth.png"
let Utility = () => {
  return (
    <section className="utility-section">
      <div className="container">
        <div className="utility">
          <div className="utility__text-wrapper">
            <h2 className="utility__title">Utility Pages</h2>
            <p className="utility__text">
              Default templates for your site & you can customize these pages to look the way you want.
            </p>
          </div>
          <div className="utility__img-wrapper">
            <div className="wrapper-left">
               <img src={utilityImgFirst} width={645} height={368} alt="Changelog"/>
               <p className="utility-wrapper-text">Changelog</p>
            </div>
            <div className="wrapper-right">
               <img src={utilityImgSecond} width={645} height={368} alt="Protected Page"/>
               <p className="utility-wrapper-text">Protected Page</p>
            </div>
          </div>
          <div className="utility__img-wrapper">
            <div className="wrapper-left">
               <img src={utilityImgThird} width={645} height={847} alt="Licenses"/>
               <p className="utility-wrapper-text">Licenses</p>
            </div>
            <div className="wrapper-right">
               <img src={utilityImgFourth} width={645} height={847} alt="Style Guide"/>
               <p className="utility-wrapper-text">Style Guide</p>
            </div>
          </div>
            <div className="wrapper-content">
               <img src={utilityImgFifth} width={645} height={397} alt="404 Error Page"/>
               <p className="utility-wrapper-text">404 Error Page</p>
            </div>
         </div>
      </div>
    </section>
  );
};

export default Utility;
