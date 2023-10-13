import Image from "next/image";
import topImg from '../../public/images/Tablet.png'

import * as style from '../../styles/blogs/top.module.css'

export default function index(){
    return (
        <>
            <div className={style.blogBackground}>
                    <div className={style.blogTopContainer}>
                        <div className={style.blogImageDiv}>
                            <Image src={topImg} className={style.blogImage} />
                        </div>
                        <div className={style.gettingStarted}>
                            <p className={style.dateTime}>
                                <span>2 Nov 2023</span>
                                <span>3 min read</span>
                            </p>
                            <h1 className={`${style.h1Heading} ${style.gettingStartedHeading}`}>
                                Getting Started with Total Recall and True North
                            </h1>
                            <p className={style.gettingStartedPara}>
                                Lorem ipsum dolor sit amet consectetur. Mauris at nisi etiam aliquam consectetur in nulla. Est vitae lacus proin imperdiet lectus euismod quam amet. Sem malesuada quam eu augue id senectus nisl rhoncus dictum. Amet volutpat curabitur hendrerit mi mi euismod nibh quis.
                            </p>
                            <button className={style.readMoreBtn}>
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
        </>
    )
}