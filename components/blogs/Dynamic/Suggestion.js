import * as style from '../../../styles/blogs/dynamic/suggestion.module.css'
import Image from 'next/image'
import card from '../../../public/images/blogCard.png'
import {AiOutlineClockCircle} from 'react-icons/ai'


export default function Suggestion() {
    return (
        <div className={style.readMore}>
            <h1 className={style.readMoreHeading}>
                Read More
            </h1>

            <div className={style.cards}>

                {/* CARD 1 */}
                <div className={style.card1}>
                    {/* IMAGE */}
                    <div className={style.cardImageDiv}>
                        <Image src={card} className={style.cardImage} />
                    </div>
                    {/* DATA */}
                    <div className={style.cardData}>
                        <h2 className={style.cardHeading}>Getting Started with Total Recall and True North</h2>
                        <p className={style.cardDateTime}>
                            <span style={{ color: "#4F4F4F" }}>2 Nov 2023</span>
                            <span style={{ color: "#FEC739", display: "flex", alignItems: "center" }}> <AiOutlineClockCircle style={{ marginRight: "8px" }} />3 min read</span>
                        </p>
                    </div>
                </div>

                {/* CARD 1 */}
                <div className={style.card1}>
                    {/* IMAGE */}
                    <div className={style.cardImageDiv}>
                        <Image src={card} className={style.cardImage} />
                    </div>
                    {/* DATA */}
                    <div className={style.cardData}>
                        <h2 className={style.cardHeading}>Getting Started with Total Recall and True North</h2>
                        <p className={style.cardDateTime}>
                            <span style={{ color: "#4F4F4F" }}>2 Nov 2023</span>
                            <span style={{ color: "#FEC739", display: "flex", alignItems: "center" }}> <AiOutlineClockCircle style={{ marginRight: "8px" }} />3 min read</span>
                        </p>
                    </div>
                </div>
                {/* CARD 1 */}
                <div className={style.card1}>
                    {/* IMAGE */}
                    <div className={style.cardImageDiv}>
                        <Image src={card} className={style.cardImage} />
                    </div>
                    {/* DATA */}
                    <div className={style.cardData}>
                        <h2 className={style.cardHeading}>Getting Started with Total Recall and True North</h2>
                        <p className={style.cardDateTime}>
                            <span style={{ color: "#4F4F4F" }}>2 Nov 2023</span>
                            <span style={{ color: "#FEC739", display: "flex", alignItems: "center" }}> <AiOutlineClockCircle style={{ marginRight: "8px" }} />3 min read</span>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}