import React from 'react';
import check from '../images/widget/check.svg';
import checkDouble from '../images/widget/checkDouble.svg';

function WidgetMain() {
  return (
    <div className="widget-main">
      <div className="widget-main__date widget-main__date--active">
        <span>July 2</span>
      </div>
      <div className="widget-main__inner">
        <div className="widget-main__left">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus et dicta sint
            tempore sit nemo quas neque maiores animi. Voluptate?
          </p>
          <div className="time">
            <span>12.43</span>
            <span>
              <img src={check} alt="check" height={12} width={12} />
            </span>
          </div>
        </div>
        <div className="widget-main__right">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
          <div className="time">
            12.45
            <span>
              <img src={checkDouble} alt="check" height={15} width={15} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WidgetMain;
