import React from 'react';

import ButtonList from './ButtonList/ButtonList';
import SvgDrawer from './SvgDrawer/SvgDrawer';
import SelectOptionBar from './SelectOptionBar';
import ZoomBox from './ZoomBox/ButtonList';

export default function SvgDrawerPage(): JSX.Element {
  return (
    <div>
      <ZoomBox />
      <SvgDrawer />
      <ButtonList />
      <SelectOptionBar />
    </div>
  );
}
