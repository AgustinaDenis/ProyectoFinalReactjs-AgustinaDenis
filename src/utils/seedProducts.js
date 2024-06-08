import db from "../db/db.js"
import { addDoc, collection } from "firebase/firestore"


const products = [
    {
        id: "album1" , 
        name: "BLACKPINK:The album",
        description: "versión rosa de The album.",
        price: 45000,
        stock: 10,
        category: "Albums",
        image: "../src/assets/1.jpeg"
    },

    {
        id: "album2" , 
        name: "BLACKPINK:The album",
        description: "versión holográfica de The album.",
        price: 45000,
        stock: 4,
        category: "Albums",
        image: "/src/assets/2.jpeg"
    },

    {
        id: "album3" , 
        name: "TWICE:Ready to be",
        description: "versión blanca y rosa.",
        price: 45000,
        stock: 5,
        category: "Albums",
        image: "/src/assets/3.jpeg"
    },

    {
        id: "album4" , 
        name: "NEWJEANS:NWJNS",
        description: "Album debut, versión original.",
        price: 45000,
        stock: 4,
        category: "Albums",
        image: "/src/assets/4.jpeg"
    },

    {
        id: "album5" , 
        name: "STRAY KIDS:Max Ident",
        description: "versión rosa de MaxIdent.",
        price: 45000,
        stock: 6,
        category: "Albums",
        image: "/src/assets/5.jpeg"
    },

    {
        id: "album6" , 
        name: "BTS:Love yourself",
        description: "versión answer.",
        price: 45000,
        stock: 8,
        category: "Albums",
        image: "/src/assets/6.jpeg"
    },

    {
        id: "album7" , 
        name: "TXT:Thursday´s child",
        description: "versión END. ",
        price: 35000,
        stock: 4,
        category: "Albums",
        image: "/src/assets/7.jpeg"
    },

    {
        id: "album8" , 
        name: "ILLIT:Super real me",
        description: "versión debut.",
        price: 30000,
        stock: 6,
        category: "Albums",
        image: "/src/assets/8.jpeg"
    },

    {
        id: "album9" ,
        name: "BABYMONSTER",
        description: "versión debut.",
        price: 30000,
        stock: 6,
        category: "Albums",
        image: "/src/assets/9.jpeg"
    },

    {
        id: "album10" , 
        name: "IVE: I´ve mine",
        description: "versión Baddie.",
        price: 40000,
        stock: 3,
        category: "Albums",
        image: "/src/assets/10.jpeg"
    },

    {
        id: "album11" , 
        name: "LE SSERAFIM:Antifragile",
        description: "versión Midnight Onyx.",
        price: 40000,
        stock: 5,
        category: "Albums",
        image: "/src/assets/11.jpeg"
    },

    {
        id: "album12" , 
        name: "LE SSERAFIM:Unforgiven",
        description: "versión: 1er álbum de estudio.",
        price: 40000,
        stock: 5,
        category: "Albums",
        image: "/src/assets/12.jpeg"
    },

    {
        id: "album13" , 
        name: "TWICE:Taste of Love",
        description: "versión Taste.",
        price: 45000,
        stock: 8,
        category: "Albums",
        image: "/src/assets/13.jpeg"
    },

    {
        id: "album14" , 
        name: "BLACKPINK:Born Pink",
        description: "versión Pink.",
        price: 45000,
        stock: 7,
        category: "Albums",
        image: "/src/assets/14.jpeg"
    },

    {
        id: "album15" , 
        name: "NEWJEANS:Get up",
        description: "versión Outbox Pink.",
        price: 45000,
        stock: 4,
        category: "Albums",
        image: "/src/assets/15.jpeg"
    },

    {
        id: "album16" , 
        name: "NEWJEANS:Get up",
        description: "versión Powerpuff Girls.",
        price: 40000,
        stock: 3,
        category: "Albums",
        image: "/src/assets/16.jpeg"
    },

    {
        id: "lightstick1" , 
        name: "STRAY KIDS",
        description: "Oficial Lightstick version 2.",
        price: 75000,
        stock: 3,
        category: "Lightsticks",
        image: "/src/assets/lightstick1straykids.jpeg"
    },

    {
        id: "lightstick2" , 
        name: "TWICE",
        description: "Oficial Lightstick CANDYBONG.",
        price: 75000,
        stock: 4,
        category: "Lightsticks",
        image: "/src/assets/lightstick2twice.jpeg"
    },

    {
        id: "lightstick3" , 
        name: "BLACK PINK",
        description: "Oficial Lightstick Bi-Ping-Bong version 2.",
        price: 75000,
        stock: 5,
        category: "Lightsticks",
        image: "/src/assets/lightstick3blackpink.jpeg"
    },

    {
        id: "lightstick4" , 
        name: "NEW JEANS",
        description: "Oficial Lightstick BinkyBong.",
        price: 75000,
        stock: 3,
        category: "Lightsticks",
        image: "/src/assets/lightstick4newjeans.jpeg"
    },

    {
        id: "lightstick5" , 
        name: "BTS",
        description: "Oficial Lightstick Army Bomb.",
        price: 75000,
        stock: 2,
        category: "Lightsticks",
        image: "/src/assets/lightstick5bts.jpeg"
    },

    {
        id: "lightstick6" , 
        name: "IVE",
        description: "Oficial Lightstick.",
        price: 75000,
        stock: 6,
        category: "Lightsticks",
        image: "/src/assets/lightstick6ive.jpeg"
    },

    {
        id: "peluche1" , 
        name: "STRAY KIDS",
        description: "Peluches oficiales.",
        price: 8000,
        stock: 8,
        category: "Peluches",
        image: "/src/assets/peluches1straykids.jpg"
    },

    {
        id: "peluche2" , 
        name: "BLACKPINK",
        description: "Peluches oficiales.",
        price: 8000,
        stock: 4,
        category: "Peluches",
        image: "/src/assets/peluches2blackpink.jpeg"
    },

    {
        id: "peluche3" , 
        name: "BT21",
        description: "Peluches oficiales.",
        price: 8000,
        stock: 7,
        category: "Peluches",
        image: "/src/assets/peluches3bts.jpeg"
    },

    {
        id: "peluche4" , 
        name: "TWICE",
        description: "Peluches oficiales.",
        price: 8000,
        stock: 9,
        category: "Peluches",
        image: "/src/assets/peluches4twice.jpeg"
    },
]


const seedProducts = () =>{
    products.map (({ id, ...rest }) => {
        addDoc(collection(db,"products"), rest)
    })
}


seedProducts()