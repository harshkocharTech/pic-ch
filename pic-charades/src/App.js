import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {

  const list =['actor','gold','painting','advertisement','grass','parrot','afternoon','greece','pencil','airport','guitar','piano','ambulance','hair','pillow','animal','hamburger','pizza','answer','helicopter','planet','apple','helmet','plastic','army','holiday','portugal','australia','honey','potato','balloon','horse','queen','banana','hospital','quill','battery','house','rain','beach','hydrogen','rainbow','beard','ice','raincoat','bed','insect','refrigerator','belgium','insurance','restaurant','boy','iron','river','branch','island','rocket','breakfast','jackal','room','brother','jelly','rose','camera','jewellery','russia','candle','jordan','sandwich','car','juice','school','caravan','kangaroo','scooter','carpet','king','shampoo','cartoon','kitchen','shoe','china','kite','soccer','church','knife','spoon','crayon','lamp','stone','crowd','lawyer','sugar','daughter','leather','sweden','death','library','teacher','denmark','lighter','telephone','diamond','lion','television','dinner','lizard','tent','disease','lock','thailand','doctor','london','tomato','dog','lunch','toothbrush','dream','machine','traffic','dress','magazine','train','easter','magician','truck','egg','manchester','uganda','eggplant','market','umbrella','egypt','match','van','elephant','microphone','vase','energy','monkey','vegetable','engine','morning','vulture','england','motorcycle','wall','evening','nail','whale','eye','napkin','window','family','needle','wire','finland','nest','xylophone','fish','nigeria','yacht','flag','night','yak','flower','notebook','zebra','football','ocean','zoo','forest','oil','garden','fountain','orange','gas','france','oxygen','girl','furniture','oyster','glass','garage','ghost'];


  const [word, setWord] = useState("");

  const [imageUrls, setUrls] = useState([]);



  async function setword(val)
  {
    setWord(val);
  }

  useEffect(() => {


    // let word = fetch("https://random-word-api.herokuapp.com/word")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setWord(data[0]);

    //     console.log(data[0]);
      // });


      let len = list.length;


      let randomIndex = Math.floor(Math.random()*100 );

      setWord( list[randomIndex] );


      





   
      let images = fetch(`https://pixabay.com/api/?key=27970311-7e51639eb64990c633d80fa26&q=${list[randomIndex]}&image_type=photo&pretty=true&per_page=20`).then(res=>res.json()).then(data=>
        {
              let temp = data.hits.map((i)=>
              {
                return i.largeImageURL;

              });

              console.log(temp);





        }
        )


     



  }, []);

  return <Button word={word} />;


  
}

export default App;


