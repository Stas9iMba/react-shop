import React from 'react';

import WidgetFooter from '../components/WidgetFooter';
import WidgetMain from '../components/WidgetMain';
import WidgetHeader from '../components/WidgetHeader';

function Widget() {
  return (
    <section className="widget" style={{ display: 'none' }}>
      <WidgetHeader />
      <WidgetMain />
      <WidgetFooter />
    </section>
  );
}

export default Widget;
