import * as style from '../../../styles/blogs/dynamic/top.module.css'
import Image from 'next/image'
import topImage from '../../../public/images/dynamicBlog.png'
import radio from '../../../public/images/radio.png'
import { AiOutlineClockCircle } from 'react-icons/ai'
import {BsFacebook, BsLinkedin} from 'react-icons/bs'

export default function Top() {
    return (
        <>
            <div className={style.top}>
                <Image src={topImage} className={style.topImage} />
                <div className={style.topDetails}>
                    <h1 className={style.gettingStarted}>
                        Getting Started with Total Recall and True North
                    </h1>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <span style={{ color: "#DDD" }}>2 Nov 2023</span>
                        <span style={{ color: "#FEC739", display: "flex", alignItems: "center" }}>
                            <AiOutlineClockCircle className={style.clockLogo} />3 min read
                        </span>
                    </div>
                </div>
            </div>
        </>

    )
}