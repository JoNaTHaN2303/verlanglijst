import React from 'react'
import Product from "./components/Product"
import * as images from "./images/images"

function App() {

  return (
    <div className="min-w-full min-h-screen bg-[#373A36] text-gray-400 text-lg font-mono font-semibold">
      <p className='flex justify-center items-center text-3xl md:text-4xl lg:text-5xl pt-10'>Verlanglijstje 2022</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 pt-10 pb-10 px-10 sm:px-15 lg:px-20'>
        <Product 
          key={"p1"} 
          naam="iPhone 13 mini Back Cover"
          info="Ik heb eigenlijk een nieuwe nodig want de oude is een beetje kapot."
          foto={images.SpigenUltraHybrid}
          url="https://www.coolblue.be/nl/product/889965/spigen-ultra-hybrid-apple-iphone-13-mini-back-cover-transparant-zwart.html"/>
        <Product 
          key={"p2"} 
          naam="JohnToy Badeendjes"
          info="Eendjes omdat ze cute zijn."
          foto={images.Badeendjes}
          url="https://www.bol.com/be/nl/p/johntoy-badeendjes-8-stuks-badspeelgoed/1004004013327866/"/>
        <Product 
          key={"p3"} 
          naam="Thermosbeker 500 ml"
          info="Ss makkelijk om veel thee of warme chocomelk in te steken."
          foto={images.Thermosfles}
          url="https://www.bol.com/be/nl/p/kambukka-olympus-thermosbeker-500-ml-makkelijk-reinigen-lekvrije-koffiebeker-rvs-darkness/9200000107761622/"/>
        <Product 
          key={"p4"} 
          naam="Trimmer - Bodygroomer"
          info="Gewoon handig om te hebben, geen ambetant scheermesjes meer."
          foto={images.Trimmer}
          url="https://www.bol.com/be/nl/p/balzac-trimmer-bodygroomer-mannen-manscaped-waterdicht-gemaakt-voor-schaamstreek/9300000017895415/"/>
        <Product 
          key={"p5"} 
          naam="The King's Man"
          info="Om aan de collectie toe te voegen."
          foto={images.TheKingsman}
          url="https://www.bol.com/be/nl/p/the-king-s-man/9300000075597124/"/>
        <Product 
          key={"p6"} 
          naam="Steam Gift Card"
          info="Kan altijd van pas komen als er een nieuw leuk spelletje is."
          foto={images.Steam}
          url="https://store.steampowered.com/digitalgiftcards/"/>
        <Product 
          key={"p7"} 
          naam="Nike Fleece Trui"
          info="Voor tijdens de wintermaanden het warm te hebben + het is mooi. (maat L)"
          foto={images.FleeceTrui}
          url="https://www.zalando.be/nike-sportswear-fleece-trui-hazel-rushblack-ni122s0iy-n12.html"/>
        <Product 
          key={"p8"} 
          naam="Fleece deken"
          info="Als we ergens naartoe gaan om een dekentje mee te nemen."
          foto={images.FleeceDeken}
          url="https://www.zalando.be/brandit-strandaccessoire-black-brm54g003-q11.html"/>
        <Product 
          key={"p9"} 
          naam="Drinkfles"
          info="Voor de voetbal of voor op school."
          foto={images.Drinkfles}
          url="https://www.zalando.be/urban-classics-lettered-survival-bottle-unisex-bidon-black-ur654e00e-q11.html"/>
        <Product 
          key={"p10"} 
          naam="Lunch Box"
          info="Om mee te nemen naar school of ergens anders."
          foto={images.Lunchbox}
          url="https://www.zalando.be/urban-classics-lettered-lunch-box-overige-accessoires-black-ur654e00d-q11.html"/>
        <Product 
          key={"p11"} 
          naam="Zonnebril Jack & Jones"
          info="Ik heb een nieuwe zonnebril wegens kapotgaan van oude. (een andere mag ook zolang hij mooi is natuurlijk)"
          foto={images.Zonnebril}
          url="https://www.zalando.be/jack-and-jones-jacmaverick-sunglasses-zonnebril-ja252k01k-a11.html"/>
        <Product 
          key={"p12"} 
          naam="Riem Jack & Jones / G-Star"
          info="De oude beginnen hun vorm te krijgen. (maat 85) Die van G-Star zijn wel goed."
          foto={images.Riem}
          url="https://www.zalando.be/jack-jones-jaclee-riem-black-ja252d027-q11.html"/>
        <Product 
          key={"p13"} 
          naam="Powerbank"
          info="De oude kan mijn gsm niet meer 1 maal volledig opladen."
          foto={images.Powerbank}
          url="https://www.bol.com/be/nl/p/anker-powercore-slim-10k/9300000050269096/"/>
      </div>
    </div>
  );
}

export default App;
