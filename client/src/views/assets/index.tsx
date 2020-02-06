import * as React from 'react';
// import { TimetableContainer } from 'client/src/containers/timetable-container';
import { SidebarContainer } from 'client/src/containers/sidebar-container';
import { Page } from 'client/src/components/page';
import { Redirect } from 'react-router-dom';
import { styled } from 'client/src/styles';
import { sidebarWidth } from 'client/src/styles/constants';

import Template from './components/template.html';
var htmlDoc = { __html: Template };

export const Assets = React.memo(() => {
  const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-left: 0;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;

    @media screen and (min-width: 700px) {
      width: calc(100% - ${sidebarWidth}px);
      margin-left: ${sidebarWidth}px;
    }
  `;

  if (localStorage.getItem('login') !== 'true') {
    return <Redirect exact from="/admin" to="/login" />;
  }
  return (
    <Page>
      <SidebarContainer />
      <Wrapper>
        <div dangerouslySetInnerHTML={htmlDoc} />
      </Wrapper>
    </Page>
  );
});
