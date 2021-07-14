import React from 'react';
import check from '../images/widget/check.svg';
import checkDouble from '../images/widget/checkDouble.svg';

function WidgetMainChatright() {
  return (
    <div className="widget-main__right">
      <p> 
      Lorem 
      <div className="time">
        12.45
        <span>
          <img src={checkDouble} alt="checkDouble" height={15} width={15} />
        </span>
      </div>
      </p>
      {/* <div className="time">
        12.45
        <span>
          <img src={checkDouble} alt="checkDouble" height={15} width={15} />
        </span>
      </div> */}
    </div>
  );
}

export default WidgetMainChatright;
