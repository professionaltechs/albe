import * as style from "../../../styles/services/plcSoftware/plcProgramming.module.css";
import trophy from "../../../public/images/trophy.png";
import automation from '../../../public/images/Automation_Software.webp'
import Image from "next/image";

export default function MechanicalAssemblyProgramming() {
  return (
    <div className={style.plcProgrammingMain}>
      <div className={style.plcProgramming}>
        <img
          src="/images/Mechanical_Assembly.webp"
          // src={automation}
          className={style.photo}
          alt="Plc"
        />
        <div className={style.plcProgrammingData}>
          <h1 className={style.plcProgrammingHeading}>PLC Programming</h1>
          <hr className={style.yellowRow} style={{ marginBottom: "32px" }} />
          <p className={style.plcProgrammingQuestion}>
            What is the key to building a market-ready software?
          </p>
          <p className={style.itsTeam}>It’s the Team!</p>
          <p className={style.plcProgrammingPara}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className={style.contactUsBtn}>CONTACT US</button>
        </div>
      </div>

      <div className={style.plcProgrammingCards}>
        <div className={style.plcProgrammingCard1}>
          <div className={style.cardImage}>
            <img
              loading={"lazy"}
              src="/icons/Mechanical-Assembly-White.png"
              height={65}
              width={65}
              alt="Mechanical Assembly"
              title="Mechanical Assembly"
            />
          </div>
          <div className={style.cardData}>
            <h2 className={style.cardHeading}>Process Automation</h2>
            <p className={style.cardPara}>
              We can automate up to 90% of you long manual operations, allowing
              convenience and ease in your business processes.
            </p>
          </div>
        </div>

        <div className={style.plcProgrammingCard1}>
          <div className={style.cardImage}>
            <img
              loading={"lazy"}
              src="/icons/Project-Manager-White.png"
              height={65}
              width={65}
              alt="Project Manager"
              title="Project Manager"
            />
          </div>
          <div className={style.cardData}>
            <h2 className={style.cardHeading}>Process Automation</h2>
            <p className={style.cardPara}>
              We can automate up to 90% of you long manual operations, allowing
              convenience and ease in your business processes.
            </p>
          </div>
        </div>

        <div className={style.plcProgrammingCard1}>
          <div className={style.cardImage}>
            <img
              loading={"lazy"}
              src="/icons/PC-Software-White.png"
              height={65}
              width={65}
              alt="Software developers"
              title="Software developers"
            />
          </div>
          <div className={style.cardData}>
            <h2 className={style.cardHeading}>Process Automation</h2>
            <p className={style.cardPara}>
              We can automate up to 90% of you long manual operations, allowing
              convenience and ease in your business processes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
