import * as style from "../styles/latestProcesses.module.css";

export default function LatestProcesses() {
  return (
    <div className={style.inbox}>
      <div className={style.inboxInner}>
        <div className={style.inboxLeft}>
          <h1 className={style.inboxHeading}>Get our latest processes</h1>
          <p className={style.inboxPara}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className={style.inboxRight}>
          <input
            type="email"
            placeholder="What's your email?"
            className={style.inboxEmail}
          />
          <button className={style.downloadBtn}>DOWNLOAD</button>
        </div>
      </div>
    </div>
  );
}
