import React from 'react'
import './home.css'

import nameLogo from '../assets/images/sushi-1.png'
import img1 from '../assets/images/project-puzzle-1.jpg'
import img2 from '../assets/images/project-puzzle-2.jpg'
import img3 from '../assets/images/project-puzzle-3.jpg'
import img4 from '../assets/images/project-puzzle-4.jpg'
import img5 from '../assets/images/project-puzzle-5.jpg'
import img6 from '../assets/images/project-puzzle-6.jpg'
import img7 from '../assets/images/project-puzzle-7.jpg'
import imgEvent from '../assets/images/home-1-9-1.jpg'

import imgCS1 from '../assets/images/blog-1-765x510.jpg'
import imgCS2 from '../assets/images/blog-2-580x388.jpg'
import imgCS3 from '../assets/images/blog-3-860x575.jpg'
import imgCS4 from '../assets/images/blog-5-580x388.jpg'

import CardFood from './UI/CardFood'
import CardBlog from './UI/CardBlog'
import CardMenu from './UI/CardMenu'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

function Home() {

  const dataMenu = [
    {
      name: 'The green dragon in tobiko',
      price: '$45',
      explain: 'Crab meat, avocado, cucumber, shrimp, mayo.',
      note: 'RECOMMENDED',
    },

    {
      name: 'Philadelphia with eel',
      price: '$26',
      explain: 'Philadelphia cheese, nori, rice, eel.',
      note: 'NEW',
    },

    {
      name: 'California in sesame',
      price: '$32',
      explain: 'Crab sticks, avocado, cucumber, mayonnaise, sesame.',
      note: 'NEW',
    },

    {
      name: 'Philadelphia in sesame',
      price: '$29',
      explain: 'Philadelphia cheese, nori, rice, salmon, sesame.',
    },

    {
      name: 'Miso soup with salmon',
      price: '$33',
      explain: 'Salmon, tofu, mushrooms, napa cabbage.',
    },

    {
      name: 'Black Rice with Squid',
      price: '$40',
      explain: 'Rice, squid ink, squid meat, vegetables.',
    },

    {
      name: 'Tsukune',
      price: '$22',
      explain: 'Minced chicken, egg, vegetables, spices.',
    },

    {
      name: 'Tsukimi Udon',
      price: '$36',
      explain: 'Soba, raw egg on top of the udon noodles.',
      note: 'NEW',
    },

    {
      name: 'Tonkatsu',
      price: '$30',
      explain: 'Cabbage, rice, miso soup, pickles.',
    },

    {
      name: 'Kitsune Soba',
      price: '$27',
      explain: 'Aburaage, on top of the soba noodles.',
    },

  ]

  const dataOffer = [
    {
      image: img1,
      dish: 'FISH',
      name: 'Tasty Salmon Fillet',
      className: 'TastySalmonFillet'
    },

    {
      image: img2,
      dish: 'RICE',
      name: 'Great Niku Tyahan',
      className: 'GreatNikuTyahan'
    },

    {
      image: img3,
      dish: 'EGGS',
      name: 'New Tomago-Yaki',
      className: 'NewTomagoYaki'
    },

    {
      image: img4,
      dish: 'SOUSES',
      name: 'Crafted Soy Souse',
      className: 'CraftedSoySouse'
    },

    {
      image: img5,
      dish: 'FISH',
      name: 'Zucchini & Salmon',
      className: 'ZucchiniSalmon'
    },

    {
      image: img6,
      dish: 'ROLLS',
      name: 'Classic Roll Set',
      className: 'RollSet'
    },

    {
      image: img7,
      dish: 'VEGETABLES',
      name: 'Zucchini Cooking',
      className: 'ZucchiniCooking'
    }
  ]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  const imgCarousel = [
    {
      imgCS: imgCS1,
      date: 'AUGUST 30, 2018',
      title: '10 Facts You Did not Know About Japanese Food',
      content: 'Lorem ipsum dolor sit amet, adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida. Phasellus velit risus, euismod a lacus et.'
    },
    {
      imgCS: imgCS2,
      date: 'AUGUST 27, 2018',
      title: '6 Classic Ingredients for Japanese Cuisine',
      content: 'Lorem ipsum dolor sit amet, adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida. Phasellus velit risus, euismod a lacus et.'
    },
    {
      imgCS: imgCS3,
      date: 'AUGOUST 21, 2018',
      title: 'Japanese Horseradish: True Facts About Wasabi',
      content: 'Lorem ipsum dolor sit amet, adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida. Phasellus velit risus, euismod a lacus et.'
    },
    {
      imgCS: imgCS4,
      date: 'AUGOUST 13, 2018',
      title: 'The Most Extraordinary International Cuisines',
      content: 'Lorem ipsum dolor sit amet, adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida. Phasellus velit risus, euismod a lacus et.'
    },
  ]


  return (
    <React.Fragment className='homepage'>

    <section className='styleOfSection intro'>
      <h6 className='titleOfSection' >JAPANESE CUISINE & ONLINE DELIVERY</h6>
      <img src={nameLogo} alt="" />
      <button className='btn border-white rounded-0 text-white' >Make a Reservation</button>
      <p className='intro__bt'>
        <span>MONDAY - SATURDAY : SERVICE 12:00 PM</span>
        <span className='mt-3' >9 DOYERS ST #1, NEW YORK, NY 10013</span>
      </p>
    </section>  

    <section className='styleOfSection ourSpecial'>
      <h6 className='titleOfSection title__mt '>OUR SPECIAL</h6>
      <p className='contentOfSection content__mt ourSpecial__screen'>
        <span>Order sushi in your town.</span>
        <span className='ourSpecial__shushiTown'>Food Delivery to the house from "Shushi Town"</span>
      </p>
    </section>

    <section className='mainDishes'>
      <div className='mainDishes__items mainDishes__shushi'>
        <button className='btn'>Shushi</button>
      </div>

      <div className='mainDishes__items mainDishes__sashimi'>
        <button className='btn'>Sashimi</button>
      </div>

      <div className='mainDishes__items mainDishes__hosomaki'>
        <button className='btn'>Hosomaki</button>
      </div>

      <div className='mainDishes__items mainDishes__udon'>
        <button className='btn'>Udon</button>
      </div>
    </section>

    <section className='styleOfSection ourRestaurantMenu'>
      <h6 className='titleOfSection title__mt  mt-4'>OUR RESTAURANT MENU</h6>
      <p className='contentOfSection content__mt mt-2'>Traditional Japanese Rolls</p>
      <div className='ourMenu__items'>
        {
          dataMenu.map((item, index) => (
            <CardMenu props={item} key={index}/>
          ))
        }
      </div>
      <p className='titleOfSection viewOurMenu'>View our Menu</p>
    </section>

    <section className='styleOfSection comeInWithUs'>
      <h6 className='titleOfSection comeInWithUs__title'>MONDAY - SATURDAY : SERVICE 24:00 PM</h6>
      <p className='contentOfSection comeInWithUs__content text-white'>Come In And Eat With Us</p>
      <p className='text-white comeInWithUs__describe'>Our chief making his debut in his hometown Chicago, crafts a  menu drawn from his culinary influences from French technique Asian heritage. His skills are very impressive.</p>
      <button className='btn comeInWithUs__btn text-white'>Make a Reservation</button>
    </section>

    <section className='styleOfSection ourOffers'>
      <h6 className='titleOfSection'>OUR UNIQUE OFFERS</h6>
      <p className='contentOfSection ourOffers__content'>Variety of Flavours from Sushi Town</p>
    </section>

    <section className='imgFood'>
        {
          dataOffer.map((items, index) => (
            <div className={items.className} key={index}>
              <CardFood props={items}/>
            </div>
          ))
        }
    </section>

    <section className='events'>
      <img src={imgEvent} alt="" />
      <div className='events__box'>
        <h6 className='titleOfSection events__title'>MONDAY - SATURDAY : SERVICE 24:00 PM</h6>
        <p className='contentOfSection events__content text-white'>Events & Business Meetings</p>
        <p className='events__describe text-white'>Christine making his debut in his hometown Chicago, crafts a straight-forward yet progressive menu drawn from his culinary influences from French technique.</p>
        <button className='btn events__btn text-white'>Book a Table</button>
      </div>
    </section>

    <section className='styleOfSection theLatestNews'>
      <h6 className='titleOfSection theLatestNews__title'>THE LATEST NEWS</h6>
      <p className='contentOfSection theLatestNews__content'>Our Blog and Events</p>
    </section>

    <section className='blogs'>
      <Carousel
        responsive={responsive}
        itemClass="carousel-item-padding-30-px"  

        showDots={true} 
        renderDotsOutside={true}
        dotListClass="custom-dot-list-style" 

        arrows={false} 

        autoPlay={true}
        autoPlaySpeed={5000}

        rewind={true}
        rewindWithAnimation={true}

      >
        {
          imgCarousel.map((item, index) => (
            <CardBlog props={item} key={index}/>
          ))
        }
      </Carousel>

    </section>

    <section className='styleOfSection discoverOurStory'>
      <p className='contentOfSection comeInWithUs__content text-white'>Discover Our Story</p>
      <p className='text-white comeInWithUs__describe discoverOurStory__scren768'>Asian heritage Bustling cities, delicious food, fascinating culture! Get ready for the trip of a lifetime with our restaurant team. We are always glad to see you.</p>
      <button className='btn comeInWithUs__btn text-white'>About Us</button>
    </section>

    </React.Fragment>
  )
}

export default Home