import React, { useEffect } from 'react'
// import {motion} from 'framer-motion'
import DesignTabHeading from './DesignTabHeading';
import {motion,useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'



export default function Gallery() {

  //heading 1 view point and animation hook
  const [mh_1_ref,mh_1_Inview] = useInView({threshold:0.1})
  const MH_1_animation = useAnimation();

  const data = [
    {
      title:'Laundry',
      para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.',
      img:'https://cozystay.app/static/home_app/assets_new/cozyhome/cm1.png'
    },
    {
      title:'Homely Food',
      para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.',
      img:'https://cozystay.app/static/home_app/assets_new/cozyhome/cm3.png'
    },
    {
      title:'House keeping',
      para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.',
      img:'https://cozystay.app/static/home_app/assets_new/cozyhome/cm4.png'
    },
    {
      title:'Common Dinning',
      para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.',
      img:'https://cozystay.app/static/home_app/assets_new/cozyhome/cm2.png'
    }]

    // useEffect(()=>{
    //   //for heading - 1
    //   if(mh_1_Inview){
    //     MH_1_animation.start({
    //       opacity:1,
    //       y:'0',
    //       transition:{
    //         ease: "linear",
    //         duration:0.7
    //       }
    //     })
    //   }else{
    //     MH_1_animation.start({
    //       opacity:0,
    //       y:'20vh',
    //     })
    //   }
    // },[mh_1_Inview])

  return (
    <section style={{"width":"100%","height":"70%","overflow":"hidden"}}>
      <div className="containerd">

          {/* <DesignTabHeading 
            title={'Feel like Home with '}
            span={"Zestos"}
            subtitle="Memories are encoded through repetition"
            reff={mh_1_ref}
            bool_reff={mh_1_Inview}
            animate={MH_1_animation}
            /> */}
        {
            data.map((item,index)=>{
              return(
                
                  <motion.div className="box" key={index}>
                    <div className="imgBx">
                      <img src={item.img}/>
                    </div>
                    <div className="content">
                      <div>
                        <h2>{item.title}</h2>
                        {/* <p>{item.para}</p> */}
                      </div>
                    </div>
                  </motion.div>
              )
            })
        }

      </div>
    </section>
  );
}

