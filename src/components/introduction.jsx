import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Сайн уу? <br />Намайг Баатархүү гэдэг.</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/1yqinovevD8aGcBwxG12dw6I9_baWBqnAcBwO5ZyRlQM/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Дэлгэрэнгүй CV үзэх<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Компьютерийн <br /> програм хангамж <br /> график дизайн <br /> судлах дуртай.</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://online.flippingbook.com/view/513077/2/" target="_blank" rel="noopener noreferrer">Хийсэн ажлууд... <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/movie1.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{ color: 'darkgray' }}> Шинжлэх ухааны <br/> зөгнөлт кино <br/>  үзэх дуртай.  </h1>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
