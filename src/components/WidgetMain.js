import React from 'react';
import WidgetMainChatLeft from '../components/WidgetMainChatLeft';
import WidgetMainChatRight from '../components/WidgetMainChatRight';

function WidgetMain() {
  return (
    <div className="widget-main">
      <div className="widget-main__date widget-main__date--active">
        <span>July 2</span>
      </div>
      <div className="widget-main__inner">
        <WidgetMainChatLeft />
        <div className="widget-main-suggestions">
          <button className="widget-main-suggestions__item">Book an appointment</button>
          <button className="widget-main-suggestions__item">View hairstylists</button>
          <button className="widget-main-suggestions__item">View gallery</button>
          <a className="widget-main-suggestions__item widget-main-suggestions__link" href="#">View gallery</a>
        </div>
        <WidgetMainChatRight />
        <WidgetMainChatRight />
        <WidgetMainChatLeft />
        <WidgetMainChatRight />
        <WidgetMainChatLeft />
        <WidgetMainChatRight />
        <WidgetMainChatLeft />
      </div>
    </div>
  );
}

export default WidgetMain;
