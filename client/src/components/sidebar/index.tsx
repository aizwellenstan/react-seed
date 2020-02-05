import React, { useState, useCallback } from 'react';
// import dayjs from 'dayjs';
// import { Trans, useTranslation } from 'react-i18next';
import { styled } from 'client/src/styles';
import { Event } from 'shared/entities/event';
// import { EventCard } from 'client/src/components/event-card';
// import { EventCardPlaceholders } from './placeholder';
import { sidebarWidth } from 'client/src/styles/constants';

// import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import StorageIcon from '@material-ui/icons/Storage';
import WebAssetIcon from '@material-ui/icons/WebAsset';
// import ReceiptIcon from '@material-ui/icons/Receipt';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import SidebarContainer from './sidebarcontainer';

export interface SidebarProps {
  events: Event[];
}

interface WrapperProps {
  expanded: boolean;
}

const Wrapper = styled.aside<WrapperProps>`
  display: block;
  position: absolute;
  z-index: 999;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: ${({ expanded }) => (expanded ? '100%' : '20%')};
  padding: 18px;
  overflow: scroll;
  transition: 0.3s ease-out;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: ${({ theme }) => theme.backgroundDark};
  -webkit-overflow-scrolling: touch;
  box-shadow: 0 -1.5px 3px rgba(0, 0, 0, 0.16);

  @media screen and (min-width: 700px) {
    display: block;
    z-index: auto;
    top: 0;
    left: 0;
    width: ${sidebarWidth}px;
    height: auto;
    border-radius: 0;
    box-shadow: 0 1.5px 3px rgba(0, 0, 0, 0.16);
  }
`;

const ExpandButton = styled.button`
  display: block;
  width: 100%;
  margin-top: -8px;
  padding: 8px 0 12px;
  border: none;
  background-color: transparent;

  hr {
    display: block;
    width: 100px;
    height: 5px;
    margin: auto;
    border: none;
    border-radius: 99px;
    background-color: ${({ theme }) => theme.foregroundLight};
  }

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

// const Title = styled.h2`
//   margin-bottom: 8px;
//   font-size: 16px;

//   & > strong {
//     color: ${({ theme }) => theme.highlightNormal};
//   }
// `;

// const List = styled.ul`
//   display: block;
// `;

// const ListItem = styled.li`
//   display: block;
// `;

export const Sidebar = () => {
  // const { events } = props;
  // const { t } = useTranslation();
  const [expanded, changeIfExpanded] = useState(false);

  // const unfinishedEvents = events.filter(event =>
  //   dayjs(event.end_date).isAfter(dayjs()),
  // );

  // const streamingEvents = events.filter(
  //   event =>
  //     dayjs(event.start_date).isBefore(dayjs()) &&
  //     dayjs(event.end_date).isAfter(dayjs()),
  // );

  const toggleIfExpanded = useCallback(() => changeIfExpanded(!expanded), [
    expanded,
  ]);

  function onClick(e: Error, item: any) {
    // window.alert(JSON.stringify(item, null, 2));
    window.history.replaceState(null, '', item.name);
    window.location.reload();
  }

  const items = [
    // { name: 'home', label: 'Home', Icon: HomeIcon },
    {
      name: 'alarmlist',
      label: 'Manage Alarm',
      Icon: NotificationsIcon,
      items: [
        { name: 'alarmlist', label: 'Alarm List', onClick },
        { name: 'alarmhistory', label: 'Alarm History', onClick },
        { name: 'alarmsetting', label: 'Alarm Setting', onClick },
      ],
    },
    'divider',
    {
      name: 'createcold',
      label: 'Point Control',
      Icon: StorageIcon,
      items: [
        {
          name: 'createcold',
          label: 'Cold Data',
          items: [
            { name: 'createcold', label: 'Create', onClick },
            { name: 'updatecold', label: 'Update', onClick },
            { name: 'querycold', label: 'Query', onClick },
            { name: 'deletecold', label: 'Delete', onClick },
          ],
        },
        {
          name: 'createhot',
          label: 'Hot Data',
          items: [
            { name: 'createhot', label: 'Create', onClick },
            { name: 'updatehot', label: 'Update', onClick },
            { name: 'queryhot', label: 'Query', onClick },
            { name: 'deletehot', label: 'Delete', onClick },
          ],
        },
        { name: 'schedule', label: 'Schedule', onClick },
      ],
    },
    'divider',
    {
      name: 'asset',
      label: 'Manage Asset',
      Icon: WebAssetIcon,
      onClick,
    },
    'divider',
    {
      name: 'equiplist',
      label: 'Manage Equipment',
      Icon: WebAssetIcon,
      items: [
        { name: 'equiplist', label: 'Equipment List', onClick },
        { name: 'maintance', label: 'Maintaince Record', onClick },
        { name: 'notification', label: 'Notification', onClick },
        { name: 'report', label: 'Report', onClick },
      ],
    },
    'divider',
    {
      name: 'createaccount',
      label: 'Manage Account',
      Icon: SupervisorAccountIcon,
      items: [
        { name: 'createaccount', label: 'Create', onClick },
        { name: 'updateaccount', label: 'Update', onClick },
        { name: 'queryaccount', label: 'Query', onClick },
        { name: 'deleteaccount', label: 'Delete', onClick },
      ],
    },
    'divider',
    {
      name: 'settings',
      label: 'Settings',
      Icon: SettingsIcon,
      onClick,
    },
  ];

  // function Sidebar({ items }) {
  //   return (
  //     <List disablePadding dense>
  //       {items.map(({ label, name, items: subItems, ...rest }) => {
  //         return (
  //           <React.Fragment key={name}>
  //             <ListItem style={{ paddingLeft: 18 }} button {...rest}>
  //               <ListItemText>{label}</ListItemText>
  //             </ListItem>
  //             {Array.isArray(subItems) ? (
  //               <List disablePadding dense>
  //                 {subItems.map((subItem) => {
  //                   return (
  //                     <ListItem
  //                       key={subItem.name}
  //                       style={{ paddingLeft: 36 }}
  //                       button
  //                       dense
  //                     >
  //                       <ListItemText>
  //                         <span className="sidebar-subitem-text">
  //                           {subItem.label}
  //                         </span>
  //                       </ListItemText>
  //                     </ListItem>
  //                   )
  //                 })}
  //               </List>
  //             ) : null}
  //           </React.Fragment>
  //         )
  //       })}
  //     </List>
  //   )
  // }

  return (
    <Wrapper id="sidebar" expanded={expanded} aria-expanded={expanded}>
      <ExpandButton aria-controls="sidebar" onClick={toggleIfExpanded}>
        <hr />
      </ExpandButton>

      {/* <Title>
        {streamingEvents.length > 0 ? (
          <Trans i18nKey="sidebar.title" count={streamingEvents.length}>
            <strong>{{ count: streamingEvents.length }}</strong> streaming is on
            air
          </Trans>
        ) : (
            t('sidebar.no_streaming', {
              defaultValue: "There's no streaming on air",
            })
          )}
      </Title>

      <List>
        {unfinishedEvents.length ? (
          unfinishedEvents.map((event, i) => (
            <ListItem
              key={event.id}
              aria-setsize={events.length}
              aria-posinset={i + 1}
            >
              <EventCard event={event} />
            </ListItem>
          ))
        ) : (
            <EventCardPlaceholders />
          )}
      </List> */}
      <SidebarContainer items={items} />
    </Wrapper>
  );
};
