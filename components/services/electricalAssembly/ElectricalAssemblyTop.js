import * as style from "../../../styles/services/electricalAssembly/electricalTop.module.css";

export default function ElectricalAssemblyTop() {
  return (
    <div className={style.plcMain}>
      {/* <img src="/icons/PLC-Software-White.png" className={style.devicesLogo} /> */}
      <h1 className={style.plcHeading}>PLC SOFTWARE DEVELOPMENT</h1>
      <p className={style.locations}>
        SYDNEY | MELBOURNE | BRISBANE | ADELAIDE | PERTH
      </p>
      <hr className={style.yellowRow} />
      <p className={style.plcPara}>
        ALorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <button className={style.ourWorkBtn}>OUR WORK</button>
    </div>
  );
}
