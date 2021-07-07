import React from 'react';
import check from '../images/widget/check.svg';
import checkDouble from '../images/widget/checkDouble.svg';

function WidgetMainChatLeft() {
  return (
    <div className="widget-main__left">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus et dicta sint tempore
        sit nemo quas neque maiores animi. Voluptate?Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Temporibus et dicta sint tempore sit nemo quas neque maiores animi.
        Voluptate? tempore sit nemo quas neque maiores animi. Voluptate?Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Temporibus et dicta sint tempore sit nemo quas neque maiores
        animi.
      </p>
      {/* <img src={product_1} alt="" /> */}

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
