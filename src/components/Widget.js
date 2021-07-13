import React from 'react';

import WidgetFooter from '../components/WidgetFooter';
import WidgetMain from '../components/WidgetMain';
import WidgetHeader from '../components/WidgetHeader';

function Widget(props) {
  return (
    <section className="widget">
      <WidgetHeader onCloseWidget={props.onCloseWidget}/>
      <WidgetMain />
      <WidgetFooter />
    </section>
  );
}

export default Widget;
