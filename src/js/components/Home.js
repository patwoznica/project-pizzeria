/* Global Flickity */

import { select, templates } from '../settings.js';

class Home {
  constructor(element){
    const thisHome = this;
    thisHome.render(element);
    thisHome.initWidgets();
  }
  render(element){
    const thisHome = this;
    const generatedHTML = templates.homeWidget();
    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
    thisHome.dom.order = thisHome.dom.wrapper.querySelector(select.widgets.home.order);
    thisHome.dom.book = thisHome.dom.wrapper.querySelector(select.widgets.home.book);
  }

  initWidgets(){
    const thisHome = this;
    setTimeout(() => {
      thisHome.element = document.querySelector('.main-carousel');
      thisHome.flkty = new Flickity(thisHome.element, {
        prevNextButtons: false,
        wrapAround: true,
        autoPlay: 4000,
        cellAlign: 'left',
        contain: true,
      });
    }, 2000);
  }
}

export default Home;