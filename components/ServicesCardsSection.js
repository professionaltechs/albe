
import * as style from "/styles/servicesCardsSection.module.css";
import { Fade } from "react-awesome-reveal";

export const ServicesCardsSection = ({cardTitle, cardPara, imgSrc, imgAlt, iconSrc, iconAlt, iconTitle}) => {
  return (
    <div className={style.servicesCardsSection}>
      <Fade
        duration={1300}
        delay={300}
        triggerOnce={true}
        className={style.fade}
      >
        <div className={style.servicesCards}>
          <div className={style.servicesCard}>
            <img
              className={style.servicesCardImg}
              id="service-image"
              src={imgSrc}
              alt={imgAlt}
            />
            <img
              loading={"lazy"}
              src={iconSrc}
              height={60}
              width={60}
              alt={iconAlt}
              title={iconTitle}
              className={style.cardIcon}
            />
            <div className={style.serviceCardText}>
              <h2>{cardTitle}</h2>
              <p>
                {cardPara}
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};
