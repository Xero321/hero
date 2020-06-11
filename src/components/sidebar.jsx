import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Бүргэдийн Баатархүү</a></h1>
              <span className="email"><i className="icon-mail"></i> b_baatarkhuu@yahoo.com</span>
              <span className="email"><i className="icon-phone"></i> 976 86992900</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Танилцуулга</a></li>
                  <li><a href="#about" data-nav-section="about">Миний тухай</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Зан чанар, Онцлог</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="" target="" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="" target="" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="" target="" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="" target="" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="" target="" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                
              </ul>
            </nav>
            <div className="colorlib-footer">
              
              <p><small>
                Миний хуудсаар зочилсонд  баярлалаа.
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
