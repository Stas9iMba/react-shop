import React from 'react';
import check from '../images/widget/check.svg';
import checkDouble from '../images/widget/checkDouble.svg';

function WidgetMainChatLeft() {
  return (
    <div className="widget-main__left">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus dolorum qui atque
      culpa. Ex dolorem ipsum totam maiores consectetur consequuntur.
      <div className="time">
        <span>12.43</span>
        <span>
          <img src={check} alt="check" height={12} width={12} />
        </span>
      </div>
    </div>
  );
}

export default WidgetMainChatLeft;
