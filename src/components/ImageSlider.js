// JavaScript source code
import React, { useState } from 'react'
import { SliderData } from './SliderDate'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import '../css/slideshow.css';


const ImageSlider = ({ slides }) => {
    const [ current, setCurrent ] = useState(0);
    const length = slides.length;
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    //return (
    //    <section className="slider">
    //        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}  />
    //        {SliderData.map((slide, index) => {
    //                return (
    //                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
    //                        {index === current && (
    //                            <img src={slide.image} alt='Me' className="myimages" />
    //                        )}
    //                    </div>
    //                ) 
    //            }
    //            )
    //        }
    //        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

    //    </section>
    //)
    //return (
    //    <section className="slider">
    //        {SliderData.map((slide, index) => {
    //            return (
    //                <div className={index === current ? 'slide active' : 'slide'} key={index}>
    //                    {index === current && (
    //                        <div class="flex1">
    //                            <div>
    //                                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
    //                            </div>
    //                            <div>
    //                                <img src={slide.image} alt='Me' className="myimages" />
    //                            </div>
    //                            <div>
    //                                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
    //                            </div>
    //                        </div>
    //                    )}
    //                </div>
    //            )
    //        }
    //        )
    //        }

    //    </section>
    //)
    return (
        <section className="slider">
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            <div class="flex1">
                                <div class="arrowl">
                                    <a class="arrowleft" onClick={prevSlide}></a>
                                </div>
                                <div>
                                    <img src={slide.image} alt='Me' className="myimages" />
                                </div>
                                <div class="arrowr">
                                    <a class="arrowright" onClick={nextSlide}></a>
                                </div>
                            </div>
                        )}
                    </div>
                )
            }
            )
            }

        </section>
    )
    //return (
    //    <section className="slider">
    //        {SliderData.map((slide, index) => {
    //            return (
    //                <div className={index === current ? 'slide active' : 'slide'} key={index}>
    //                    {index === current && (
    //                        <div class="flex1">
    //                            <div>
    //                                <button><img src={arrow}/></button>
    //                            </div>
    //                            <div>
    //                                <img src={slide.image} alt='Me' className="myimages" />
    //                            </div>
    //                            <div>
    //                                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
    //                            </div>
    //                        </div>
    //                    )}
    //                </div>
    //            )
    //        }
    //        )
    //        }

    //    </section>
    //)
    //return (
    //    <section className="slider">
    //        {SliderData.map((slide, index) => {
    //            return (
    //                <div className={index === current ? 'slide active' : 'slide'} key={index}>
    //                    {index === current && (
    //                        <div>
    //                            <div class="left">
    //                                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
    //                            </div>
    //                            <div class="middle">
    //                                <img src={slide.image} alt='Me' className="myimages" />
    //                            </div>
    //                            <div class="right">
    //                                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
    //                            </div>
    //                        </div>
    //                    )}
    //                </div>
    //            )
    //        }
    //        )
    //        }

    //    </section>
    //)
}

export default ImageSlider
