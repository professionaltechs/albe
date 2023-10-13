import * as style from '../../../styles/blogs/dynamic/data.module.css'
import Image from 'next/image'
import radio from '../../../public/images/radio.png'
import {BsFacebook, BsLinkedin} from 'react-icons/bs'


export default function Data (){
    return (
        <div className={style.data}>
                <div className={style.dataInner}>
                    <h2 className={style.dataHeading}>Distribute Environment</h2>
                    <p className={style.dataPara}>Every software product that we create is built by a team with the foundation of a fun and empathetic culture. W
                        e embrace every challenge that is set forth, respond and adapt to ensure that mutual expectations are always met. When you
                        engage with us, you become part of our award-winning team and we transfer our capabilities to you.</p>
                    <p className={style.dataPara}>Every software product that we create is built by a team with the foundation of a fun and empathetic culture. W
                        e embrace every challenge that is set forth, respond and adapt to ensure that mutual expectations are always met. When you
                        engage with us, you become part of our award-winning team and we transfer our capabilities to you.</p>
                    <p className={style.dataPara}>Every software product that we create is built by a team with the foundation of a fun and empathetic culture. W
                        e embrace every challenge that is set forth, respond and adapt to ensure that mutual expectations are always met. When you
                        engage with us, you become part of our award-winning team and we transfer our capabilities to you.</p>

                    <h2 className={style.dataHeading}>Do It Right</h2>
                    <p className={style.dataPara}>Every software product that we create is built by a team with the foundation of a fun and empathetic culture. W
                        e embrace every challenge that is set forth, respond and adapt to ensure that mutual expectations are always met. When you
                        engage with us, you become part of our award-winning team and we transfer our capabilities to you.</p>
                    <p className={style.dataPara}>Every software product that we create is built by a team with the foundation of a fun and empathetic culture. W
                        e embrace every challenge that is set forth, respond and adapt to ensure that mutual expectations are always met. When you
                        engage with us, you become part of our award-winning team and we transfer our capabilities to you.</p>

                    <Image src={radio} className={style.radioImage}/>

                    <h2 className={style.dataHeading}>Deployment Methods</h2>
                    <p className={style.dataPara}>Every software product that we create is built by a team with the foundation of a fun and empathetic culture. W
                        e embrace every challenge that is set forth, respond and adapt to ensure that mutual expectations are always met. When you
                        engage with us, you become part of our award-winning team and we transfer our capabilities to you.</p>
                    <p className={style.dataPara} style={{marginBottom: "44px"}}>Every software product that we create is built by a team with the foundation of a fun and empathetic culture. W
                        e embrace every challenge that is set forth, respond and adapt to ensure that mutual expectations are always met. When you
                        engage with us, you become part of our award-winning team and we transfer our capabilities to you.</p>

                    <div className={style.socialLinks}>
                        <span>Share</span>
                        <BsFacebook  className={style.links}/>
                        <BsLinkedin className={style.links} style={{marginLeft: "16px"}}/>
                    </div>
                </div>
            </div>
    )
}