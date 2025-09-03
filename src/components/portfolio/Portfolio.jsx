import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import RoundedButton from "../../common/RoundedButton";

const items = [ 

  {
    id: 43282,
    title: "Ms Angry Girlfriend",
    img: "/public/tan/a.jpg",
    desc: "pagli ta ragle oneeeeeeeeeek cute lage....just look at her.. wow koto cute ..but ragle ekdom chire fele ...car e or rag dekhe ami bhoye sesh hoye gesilam",
    link: "",
    link2: "",

  },


  {
    id: 22,
    title: "An Angel in Saree",
    img: "/public/tan/b.jpg",
    desc: "Angel ta saree te kotooooo cute lage ....just wooooooow...harami tay amare ei pic ta deynai first e ...amake matha kata pic dise...pore main ta dise chaisi bade,,,,,eto cute eta uffff",
    link: "",
    link2: "https://github.com/maruf449/CarZ-rental",

  },

  {
    id: 33,
    title: "Nil Saree te",
    img: "/public/tan/c.jpg",
    desc: "দেখি তোমাকে আছো দাঁড়িয়ে আনমনে নীল শাড়িতে হাজার ভিড়ে সব ছাড়িয়ে শুধু তুমি আমার চোখে পথের ধারে তোমার আশায় ভালোবাসার ধূসর আলোতে আছি দাঁড়িয়ে স্বপ্ন নিয়ে তোমার আকাশে সুর ঝরাতে এক গুচ্ছ কদম হাতে ভিজতে চাই তোমার সাথে এক গুচ্ছ কদম হাতে ভিজতে চাই তোমার সাথে....rate dekha hobe tata.....tomake dekhe ami shock ....and loved the risky kiss ",
    link: "",
    link2: "https://github.com/maruf449/Academyz",

  },

  {
    id: 44,
    title: "2 angry Pookies",
    img: "/public/tan/d.jpg",
    desc: "2 angry Pookies....but 1 is my pookie and other is my dads.... my pookie kotooooo cute lage ....just look at her.. wow koto cute ..but ragle ekdom chire fele both :) ...",
    link: "",
    link2: "https://github.com/maruf449/ZihAD-S-BLOG",

  },
  
  {
    id: 1231,
    title: "picchi pookie",
    img: "/public/tan/e.jpg",
    desc: "harami pic dite chaynah picchi kaler ...but picchi kaleo harami tay cute chilo ....tai to eto valo lagto picchi tare",
    link: "",
    link2: "https://github.com/Zihad-Hasan-Dev/e-com",

  },



  {
    id: 5,
    title: "Lucky bastard", 
    img: "/public/tan/f.jpg",
    desc: "Someone can cry for me can you believe it??? for someone as useless as pathetic person like someone cried.........i am really a lucky bastard",
    link: "https://zihadhasandeveloper.vercel.app/",
    link2: "https://github.com/Zihad-Hasan-Dev",

  },

  {
    id: 5,
    title: "vallagse", 
    img: "/public/tan/g.jpg",
    desc: "well harami theke ei pic screen share dia nisilam ...pagli tay eto cute pic ta deynai......koto cute lagtase ummmmaaaaaaaaaaaaaaaaahhhhhhhhhhhhhhhhhhhhh",
    link: "",
    link2: "https://github.com/Zihad-Hasan-Dev",

  },

  {
    id: 5,
    title: "Pori", 
    img: "/public/tan/h.jpg",
    desc: "well onno rokom charm pic tay hehehe lage akashe ure jaba ekhoni",
    link: "",
    link2: "https://github.com/Zihad-Hasan-Dev",

  },

  {
    id: 5,
    title: "Wallpaper", 
    img: "/public/tan/i.jpg",
    desc: "harami tay amare wallpaper er pic ta deynai ...pore ami screen share theke dekhsi...uff eto joss wallpaper kemne thake ekjoner hum????",
    link: "",
    link2: "https://github.com/Zihad-Hasan-Dev",

  },

  {
    id: 5,
    title: "Madam", 
    img: "/public/tan/j.jpg",
    desc: "amar pookie kintu oneeeek smart....oy always right ...ja info de sob right dey ami always here jai chatgpt re ask koira .........please teach me madam",
    link: "",
    link2: "https://github.com/Zihad-Hasan-Dev",

  },

  {
    id: 5,
    title: "Wish", 
    img: "/public/tan/k.jpg",
    desc: "amar pookie er friend ta lucky baaaal ami erokom or orna dhore tan dite parlam nah ufff eto cute lagtase pookie reh ar tumi sotti oneeeeeeeeek red like koro....70% red dress uhuuuuuuu ekhon harami bolbo bou sajte chai tai ufff baaaaaal",
    link: "",
    link2: "https://github.com/Zihad-Hasan-Dev",

  },

  {
    id: 5,
    title: "lets go to this park Together", 
    img: "/public/tan/l.jpg",
    desc: "ei park ta valo lagse amar ..... mon chay tomr sathe ei park e guri hat dhore but tumi red dress poiro cute e lage",
    link: "",
    link2: "https://github.com/Zihad-Hasan-Dev",

  },


  {
    id: 5,
    title: "Angry=Cute", 
    img: "/public/tan/o.jpg",
    desc: "Angry deklei amar neuron active hoye jay and horny hoye jai....eto cute lage angry thakleeeeeeee",
    link: "",
    link2: "https://github.com/Zihad-Hasan-Dev",

  },{
    id: 5,
    title: "pichon theke hug korte chai", 
    img: "/public/tan/p.jpg",
    desc: "harami ex er basay gese gurte....ufff ar eto cute bhabe gese red e ...........abar erokom hot hot pic tulse ja dekle ure jete mon chay hotness e",
    link: "",
    link2: "https://github.com/Zihad-Hasan-Dev",

  },{
    id: 5,
    title: "Dslr er dam nai", 
    img: "/public/tan/q.jpg",
    desc: "tomr bhaiye biye te je eto valo camera diye pic tullo...kono metter e hoynai,,,,,tumi always cute....real ....komdami camera....valo camera....always cute ...........i will never fall in love again",
    link: "",
    link2: "https://github.com/Zihad-Hasan-Dev",

  },

  {
    id: 5,
    title: "red pookie with red cow", 
    img: "/public/tan/r.jpg",
    desc: "i dont know but ei pic ta cuteness overlord tomr expression ta onek mayabi just hug korte mon chay uffffffff",
    link: "",
    link2: "https://github.com/Zihad-Hasan-Dev",

  },


  


];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}> 

         <h2>{item.title}</h2>

<p> {item.desc} </p>

            <div className="box">

           
                 <a href={item.link} target="_blank"> <RoundedButton> <p>Pakhi</p> </RoundedButton> </a>

                

             </div>
          
       
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>You Are Really Cute</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
