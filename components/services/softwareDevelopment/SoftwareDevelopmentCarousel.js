import * as style from "../../../styles/services/softwareDevelopment/softwareCarousel.module.css";
import Image from "next/image";
import black from "../../../public/images/black.png";
import { AiOutlineLeft, AiOutlineArrowRight } from "react-icons/ai";
import science from "../../../public/images/science.png";
import { CarouselItem } from "react-bootstrap";

export default function SoftwareDevelopmentCarousel() {
  return (
    <div className={style.carouselBg}>
      <div className={style.carousel}>
        <h1 className={style.partnersHeading}>Partners and Clients</h1>
        <hr className={style.yellowRow} />
        <div id="carouselExample" className="carousel slide">
          <button
            type="button"
            style={{ border: "none" }}
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <AiOutlineLeft className={style.carouselControl} />
          </button>
          <div className={`carousel-inner ${style.carouselInner}`}>
            <div className="carousel-item active">
              <div className={style.carouselItem}>
              <img
                  src="/images/ScienceHairCareRnD.jpg"
                  className={style.carouselInnerImage}
                  alt="..."
                />
                <div className={style.carouselInnerData}>
                  <Image src={science} className={style.scienceLogo} />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </p>
                  <h1 className={style.foodAndBeverage}>Food & Beverage</h1>
                  <div className={style.learnMore}>
                    <p>Learn More</p>
                    <AiOutlineArrowRight className={style.rightLogo} />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className={style.carouselItem}>
              <img
                  src="/images/ScienceHairCareRnD.jpg"
                  className={style.carouselInnerImage}
                  alt="..."
                />
                <div className={style.carouselInnerData}>
                  <Image src={science} className={style.scienceLogo} />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                   
                  </p>
                  <h1 className={style.foodAndBeverage}>Food & Beverage</h1>
                  <div className={style.learnMore}>
                    <p>Learn More</p>
                    <AiOutlineArrowRight className={style.rightLogo} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <button className={`carousel-control-next`} type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className={`carousel-control-next`} type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
        </div>
      </div>
    </div>
  );
}
