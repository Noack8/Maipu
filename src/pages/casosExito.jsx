import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { casosExitoMX } from '../data/casosExitoMX';
import { casosExitoIntl } from '../data/casosExitoIntl';
import './CasosExito.css'; 

const SuccessCard = ({ item, onViewDetail }) => (
  <div className="caso-card-horizontal">
    <div className="caso-img-placeholder">
      {/* Si el item tiene imagen, la muestra. Si no, muestra el texto */}
      {item.imagen ? (
        <img src={item.imagen} alt={item.titulo} />
      ) : (
        <span>Imagen del Caso</span>
      )}
    </div>
    <div className="caso-info">
      <h3>{item.titulo}</h3>
      <p>{item.descripcion}</p>
      <button 
        className="card-button" 
        onClick={() => onViewDetail(item, 'casos-exito')}
      >
        Ver más
      </button>
    </div>
  </div>
);

function CasosExito({ onViewDetail }) {
  return (
    <div className="casos-exito-page">
      
      <div className="casos-grid-layout">
        <div className="casos-column">
          <h2>Casos en México</h2>
          <Swiper
            direction="vertical"
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            navigation={true} 
            speed={1000}      
            autoplay={{
              delay: 4500,    
              disableOnInteraction: false,
            }}
            className="vertical-swiper"
          >
            {casosExitoMX.map((item) => (
              <SwiperSlide key={item.id}>
                <SuccessCard item={item} onViewDetail={onViewDetail} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="casos-column">
          <h2>Casos Internacionales</h2>
          <Swiper
            direction="vertical"
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            navigation={true} 
            speed={1000}      
            autoplay={{
              delay: 4500,    
              disableOnInteraction: false,
              reverseDirection: true, 
            }}
            className="vertical-swiper"
          >
            {casosExitoIntl.map((item) => (
              <SwiperSlide key={item.id}>
                <SuccessCard item={item} onViewDetail={onViewDetail} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default CasosExito;