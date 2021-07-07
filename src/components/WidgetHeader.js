import React from 'react';

function WidgetHeader() {
  return (
    <div className="widget-header">
      <div className="widget-header__title">
        <h1>Тестовый виджет W11</h1>
        <p>Итерация №1</p>
      </div>
      <button className="widget-header__btn btn__close">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" widget="20px" height="20px">
          <path
            fill="#f0f0f6"
            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
        </svg>
      </button>
    </div>
  );
}

export default WidgetHeader;
