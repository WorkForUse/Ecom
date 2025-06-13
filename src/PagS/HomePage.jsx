import './HomePage.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { BsStarFill } from 'react-icons/bs';
import { TiTick } from 'react-icons/ti';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const HomePage = () => {
    return (
        <div className="container text-center">
            {/* Swiper Carousel */}
            <div className="position-relative">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    loop={true}
                    spaceBetween={30}
                    className="mySwiper"
                >
                    {/* === First Slide === */}
                    <SwiperSlide>
                        <div className="row">
                            <div className="col position-relative">
                                <br /> <br />
                                <span className="bg_first mx-3 fw-bold d-inline p-2 rounded-pill position-absolute top-0 start-0">
                                    Limited time
                                </span>
                                <h1 className="text-one text-start" style={{ fontSize: '50px', fontWeight: 'bold' }}>
                                    Season <span className="text-two" style={{ borderBottom: '5px solid #eedbe5' }}>Sale</span> Up To <br /> 50% Off
                                </h1>
                                <p className="text-start">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio <br /> veritatis, vitae corrupti voluptatibus earum ducimus repellat, <br /> beatae quam asperiores officia culpa aperiam!
                                </p>
                                <button type="button" className="d-block float-left btn btnBG-two fs-5">
                                    Shop Sale <FaLongArrowAltRight />
                                </button>
                                <h5 className="fw-bold fs-5 text-start py-4">Offer ends in:</h5>

                                <div className="row">
                                    {[{ label: 'Days', value: '17' }, { label: 'Hours', value: '15' }, { label: 'Minutes', value: '40' }, { label: 'Secnds', value: '34' }].map((time, idx) => (
                                        <div key={idx} className="col-sm-2 mb-3 mb-sm-0">
                                            <div className="card border-0 shadow-sm bg-white rounded">
                                                <div className="card-body">
                                                    <h5 className="card-title text-two fw-bold">{time.value}</h5>
                                                    <p className="card-text fw-bold" style={{ fontSize: '10px' }}>{time.label}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="col w-50">
                                <span className="rounded-circle fw-bold float-end BG-two text-center d-inline px-3 py-2">
                                    50% <br /> OFF
                                </span>
                                <div className="position-relative">
                                    <img className="w-75" src="https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-8.webp" alt="Shoe" />
                                    <div className="position-absolute bottom-0 start-0 border-0 shadow p-3 mb-5 bg-body-tertiary rounded">
                                        <h5 className="text-start fw-bolder" style={{ fontSize: '13px' }}>Best Seller</h5>
                                        <strong className="text-two">
                                            <span className="text-decoration-line-through text-secondary">$124.99</span> $64.99
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* === Second Slide === */}
                    <SwiperSlide>
                        <div className="row d-flex align-items-center p-4">
                            <div className="col-md-6 position-relative">
                                <span className="bg_first fw-bold d-inline p-2 rounded-pill position-absolute top-0 start-0">
                                    New Arrivals
                                </span>
                                <h1 className="text-one text-start mt-5" style={{ fontSize: '50px', fontWeight: 'bold' }}>
                                    Discover Our <span className="text-two" style={{ borderBottom: '5px solid #eedbe5' }}>Latest</span> <br /> Collection
                                </h1>
                                <p className="text-start text-muted my-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Vivamus magna justo,
                                    lacinia eget consectetur sed, convallis at tellus.
                                </p>
                                <button type="button" className="btn btnBG-two fs-5 my-4 float-start">
                                    Shop New Arrivals <FaLongArrowAltRight />
                                </button>
                            </div>

                            <div className="col-md-6">
                                <div className="row row-cols-1 row-cols-md-2 g-4">
                                    {[
                                        { label: 'Modern Style', price: '$79.99', img: 'product-1.webp' },
                                        { label: 'Casual Collection', price: '$64.99', img: 'product-9.webp' },
                                        { label: 'Premium Design', price: '$89.99', img: 'product-4.webp' },
                                        { label: 'Elegant Series', price: '$74.99', img: 'product-5.webp' },
                                    ].map((item, idx) => (
                                        <div key={idx} className="col">
                                            <div className="card text-center border-0 shadow-sm">
                                                <img
                                                    src={`https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/${item.img}`}
                                                    className="card-img-top"
                                                    alt={item.label}
                                                />
                                                <div className="card-body">
                                                    <p className="mb-1 text-muted">{item.label}</p>
                                                    <p className="fw-bold" style={{ color: '#920b4d' }}>{item.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* === Third Slide === */}
                    <SwiperSlide>
                        <div className="row">
                            <div className="col position-relative">
                                <br /> <br />
                                <span className="mx-3 bg_first fw-bold d-inline p-2 rounded-pill position-absolute top-0 start-0">
                                    Featured Collection
                                </span>
                                <h1 className="text-one text-start" style={{ fontSize: '50px', fontWeight: 'bold' }}>
                                    Premium <span className="text-two" style={{ borderBottom: '5px solid #eedbe5' }}>Quality</span> <br /> Products
                                </h1>
                                <p className="text-start my-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio <br /> veritatis, vitae corrupti voluptatibus earum ducimus repellat, <br /> beatae quam asperiores officia culpa aperiam!
                                </p>
                                <button type="button" className="my-4 d-block float-left btn btnBG-two fs-5">
                                    Explore Collection <FaLongArrowAltRight />
                                </button>

                                <div className="row d-flex flex-column float-start">
                                    <div className="col-md my-2">
                                        <span><TiTick className="BG-two rounded-circle" /> Premium Material</span>
                                    </div>
                                    <div className="col-md my-2">
                                        <span><TiTick className="BG-two rounded-circle" /> Handcrafted Quality</span>
                                    </div>
                                    <div className="col-md my-2">
                                        <span><TiTick className="BG-two rounded-circle" /> Lifetime Warranty</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col w-50">
                                <span className="rounded-pill d-flex align-items-center gap-1 fw-bold float-start BG-two text-center d-inline px-3 py-2">
                                    <BsStarFill /> Featured
                                </span>
                                <div className="position-relative">
                                    <img className="w-100" src="https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-9.webp" alt="Product" />
                                    <div className="position-absolute bottom-0 end-0 border-0 shadow p-3 mb-5 bg-body-tertiary rounded">
                                        <span className="fs-4 float-start" style={{ color: 'gold' }}>
                                            <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill />
                                        </span>
                                        <h5 className="text-start fw-lighter fst-italic" style={{ fontSize: '15px' }}>Exceptional quality & design</h5>
                                        <strong className="float-start">- Satisfied Customer</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="swiper-pagination"></div>
            </div>

            <style>{`
              .swiper-pagination-bullet {
                background: #ccc;
                opacity: 1;
              }
              .swiper-pagination-bullet-active {
                background: #3e0925;
              }
            `}</style>
        </div>
    );
};

export default HomePage;
