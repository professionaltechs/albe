import React from "react";
import * as style from "/styles/servicebanner.module.css";
import { Fade } from "react-awesome-reveal";

export const ServiceBanner = ({title}) => {
  return (
    <div className={style.serviceBanner}>
      <Fade
        duration={1300}
        delay={300}
        triggerOnce={true}
        className={style.fade}
      >
        <div className={style.bannerTitle}>
          <h1 className={style.title}>{title}</h1>
          <h2>
            Empower Your Business for Growth With Our Automation Solutions
          </h2>
        </div>
        <div className={style.projectsYears}>
          <div>
            <div>
              <h2>50+</h2>
            </div>
            <h3>PROJECTS COMPLETED</h3>
          </div>
          <div>
            <div className={style.shiftToCenter}>
              <h2>10+</h2>
            </div>
            <h3>YEARS IN ROBOTIC INDUSTRY</h3>
          </div>
        </div>
      </Fade>
    </div>
  );
};
