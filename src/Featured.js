import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import modules from swiper/modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function Featured() {
  const features = [
    { title: "The Stealthy Way of the Shadow", author: "Tanaka", tags: ["Stealth"], initial: "T" },
    { title: "Subtle art of Shuriken Mastery", author: "Smith", tags: ["Weapons"], initial: "S" },
    { title: "Ancient Scrolls of old Ninjutsu", author: "Johnson", tags: ["History"], initial: "J" },
    { title: "Ninja Fitness and Agility Training", author: "Yamada", tags: ["Fitness", "Agility"], initial: "Y" },
    { title: "Meditative Practices for the Mindful Ninja", author: "Kobayashi", tags: ["Meditation"], initial: "K" },
  ];
  return (
    <div>
      <h2 style={{ color: "var(--main)" }}>Senpai's picks</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Activate the modules
        spaceBetween={0}
        slidesPerView={2}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        loop={true}
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <div className='feature-card' style={{ color: 'var(--main)' }}>
              <h3>{feature.title}</h3>
              <div>{feature.tags.map(tag => <span className='feature-tag' key={tag}>{tag} </span>)}</div>
              <div className='pair'>
                <div className="profile-pic">{feature.initial}</div>
                <p><span className='author'>{feature.author}</span></p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Featured;
