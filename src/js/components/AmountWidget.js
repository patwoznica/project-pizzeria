import {select, settings} from '../settings.js';
import BaseWidget from './BaseWidget.js';

class AmountWidget extends BaseWidget{
  constructor(element){
    super(element, settings.amountWidget.defaultValue);
    const thisWidget = this;
    thisWidget.getElements(element);
    //    thisWidget.setValue(thisWidget.input.value || settings.amountWidget.defaultValue); 
    //    thisWidget.value = settings.amountWidget.defaultValue;
    thisWidget.initActions();
    //      console.log('AmountWidget', thisWidget);
    //      console.log('constructor arguments:', element);
  }

  getElements(){
    const thisWidget = this;
    thisWidget.dom.input = thisWidget.dom.wrapper.querySelector(select.widgets.amount.input);
    thisWidget.dom.linkDecrease = thisWidget.dom.wrapper.querySelector(select.widgets.amount.linkDecrease);
    thisWidget.dom.linkIncrease = thisWidget.dom.wrapper.querySelector(select.widgets.amount.linkIncrease);
    //  thisWidget.value = settings.amountWidget.defaultValue;
  }
//  setValue(value){
//    const thisWidget = this;
//    const newValue = parseInt(value);
//    //TODO: Add validation 
//
//    if(thisWidget.value !== newValue && !isNaN(newValue) && newValue <= settings.amountWidget.defaultMax && newValue >= settings.amountWidget.defaultMin){
//      thisWidget.value = newValue;
//    }
//    //thisWidget.announce();
//    thisWidget.dom.input.value = thisWidget.value;
//    thisWidget.announce();
//  }
//  parseValue(value){
//    return parseInt(value);
//  }

  isValid(value){
    return !isNaN(value)
      && value >= settings.amountWidget.defaultMin 
      && value <= settings.amountWidget.defaultMax;
  }

  renderValue(){
    const thisWidget = this;
    thisWidget.dom.input.value = thisWidget.value;
  }

  initActions(){
    const thisWidget = this;

    thisWidget.dom.input.addEventListener('change', function(){
      thisWidget.value = thisWidget.dom.input.value;
    });

    thisWidget.dom.linkDecrease.addEventListener('click', function(event){
      event.preventDefault();
      thisWidget.setValue(thisWidget.value - 1);
    });

    thisWidget.dom.linkIncrease.addEventListener('click', function(event){
      event.preventDefault();
      thisWidget.setValue(thisWidget.value + 1);
    });
  }
}
export default AmountWidget;