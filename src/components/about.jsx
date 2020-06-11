import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    
                    <h2 className="colorlib-heading">Би хэн бэ?</h2>
                    <p>Ховд аймагт 1980.04.22 –нд төрсөн. Бичин жилтэй, үхрийн орд. Эхнэр, 3 хүүхдийн хамт амьдардаг.</p>
                    <p>Би 1988-1998 онд ерөнхий боловсролын дунд сургуульд суралцаж дараа нь 2002 онд Санхүү Эдийн Засгийн Дээд сургуулийг бизнес судлаач мэргэжлээр төгссөн. Өнгөрсөн хугацаанд маркетингийн менежерээр ажиллаж байсан.
                     Цаашдаа програм хөгжүүлэгчээр ажиллах хүсэлтэй.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              
                <h2 className="colorlib-heading">Ур чадвар, туршлага</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web хөгжүүлэх </h3>
                    <p>2019 оноос Энэтхэгийн Их Сургуулийн програм хангамжийн инженерийн ангид суралцаж байна. Ирэх жил буюу 2021 онд төгсөнө. Өнгөрсөн хугацаанд HTML, CSS, JAVASCRIPT, REACT JS зэрэг  хичээлийг үзэж судалсан бөгөөд одооноос C++, MYSQL хичээлийг үзэж эхэлж байна. </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>График дизайн</h3>
                    <p>Компьютерийн програм хангамж судлах, мэдээлэл унших, мэдлэг олж авахад багагүй хугацааг зарцуулдаг. 
Мөн өөрийгөө хөгжүүлэх үүднээс курс дамжаанд боломж гарвал суухыг хичээдэг. 
2006 онд  Бест төвд график дизайнерийн ангид суралцсан. Photoshop, Illustrator, Adobe XD дээр ажиллаж чадна.
</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Интернет ашиглах</h3>
                    <p>Компьютерийн үндсэн хэрэглээ, интернет хэрэглээ сайн. Өөрт шаардлагатай мэдээллийг google, youtube, freepik, facebook  зэрэг сайтуудаас хурдан шуурхай олж ашиглаж чадна.  </p>
                </div>
                </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
