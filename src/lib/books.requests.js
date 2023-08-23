const BOOKS = [
    {

      title: "Metal Gear Solid 3: Snake Eater",
      category: "aventura",
      price: 800,
      description:
        "El juego salió al mercado el 17 de noviembre de 2004 en Norte América, el 16 de diciembre de 2004 in Japón; el 4 de marzo de 2005 en Europa y el 17 de marzo de 2005 en Australia.",
      img: "https://im.ziffdavisinternational.com/ign_es/screenshot/default/60225-metal-gear-solid-3-subsistence-playstation-2_umwf.jpg",
      stock: 20,
    },
    {
      
      title: "Red Dead Redemption 2",
      category: "aventura",
      description:
        "Red Dead Redemption 2 es un juego de aventura y acción en mundo abierto, ambientado en el lejano oeste. Este título ofrece decenas de horas increíbles con tiroteos, cinemáticas y personajes memorables. Manejas a Arthur Morgan en sus días con la banda Van der Linde, un grupo que se verá en numerosos problemas.",
      
        price: 1000,
      img: "https://cdn.ligadegamers.com/imagenes/red-dead-redemption-2-3-cke.jpg",
      stock: 20,
    },
    {
      
      title: "Martha Is Dead",
      description:
        "Martha is Dead va más sobre la angustia, el misterio y lo desagradable que sobre el propio terror, aunque hay algún momento que puede dar algo de miedo.",
  
      category: "terror",
      price: 900,
      stock: 20,
      img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/02/martha-dead-2617705.jpg?tf=640x",
    },
    {
      
      title: "The Legend of Zelda: Breath of the Wild",
      category: "fantasia",
      description:
        "Es un RPG de acción y aventura desarrollado y distribuido por Nintendo. Es la decimoctava entrega de la serie y el primer juego de The Legend of Zelda para Nintendo Switch.",
  
      price: 800,
      img: "https://cdn.alfabetajuega.com/alfabetajuega/2019/06/the-legend-of-zelda-breath-of-the-wild.jpg?height=400&aspect_ratio=9:12?width=1200",
      stock: 20,
    },
    {
      
      title: "The Witcher 3: Wild Hunt",
      category: "aventura",
      description:
        "El mundo de The Witcher 3 está basado en la fantasía medieval, donde la magia está muy presente y todo tiene una belleza mística. Este mundo es el escenario perfecto para contar una historia más ambiciosa con gran sistema de progresión para el protagonista. En Wild Hunt podrás disfrutar de una aventura que te absorberá por completo por todos sus componentes.",
  
      price: 2000,
      img: "https://cdn.alfabetajuega.com/alfabetajuega/2019/06/the-witcher-3-wild-hunt.jpg?height=400&aspect_ratio=9:12?width=1200",
      stock: 20,
    },
    {
      
      title: "Immortals Fenyx Rising",
      category: "aventura",
      description:
        "Es un videojuego de acción y aventura ambientado en la mitología griega desarrollado y distribuido por Ubisoft. La historia trata de una heroína olvidada llamada Fenyx, la cual tiene que demostrar su valía luchando contra criaturas mitológicas y así lograr eliminar a su líder.",
  
      price: 690,
      img: "https://cdn.alfabetajuega.com/alfabetajuega/2020/09/immortals-fenyx-rising-2.jpg?height=400&aspect_ratio=9:12?width=1200",
      stock: 20,
    },
    {
      
      title: "Diablo II",
      category: "fantasia",
      description:
        "Diablo II: El mal supremo incluye el juego base y la expansión Reaper of Souls. Es uno de los mejores paquetes de rastreadores de mazmorras de fantasía oscura que existen, y el juego sigue siendo relevante y divertido.",
  
      price: 5000,
      img: "https://stevecochrane.com/img/v7/diablo4-2.webp",
      stock: 20,
    },
    {
      
      title: "Dragon Age",
      category: "fantasia",
      description:
        "Dragon Age: Origins es un juego de rol de acción ambientado en la fantasía medieval. Eliges el origen de tu personaje entre tres razas jugables (enanos, elfos y humanos), y también está la expansión Awakening en Ultimate Edition.",
  
      price: 3000,
      img: "https://m.media-amazon.com/images/I/511DUHqfibL.jpg",
      stock: 20,
    },

  ];

  import { collection, getDocs, doc, getDoc, where, query, addDoc } from "firebase/firestore";
  import { db } from "./config";
  const gamesRef = collection(db, "items");

  


  export const getBooks = async (category) => {
    const q = category
      ? query(gamesRef, where("category", "==", category))
      : gamesRef;


    
    let books = [];
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      books = [...books, { ...doc.data(), id: doc.id }];
    });
  
    return books;
   
  };
  
  export const getBook = async (id) => {
    const document = doc(db, "items", id);
    const docSnap = await getDoc(document);
    if (docSnap.exists()) return { id: docSnap.id, ...docSnap.data() };
  
    return null;
  
    
  };

  export const updateBook = async (id, item) => {
    const newBook = await updateDoc(doc(db, "items", id), item);
    return;
  };
  