import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ReactComponent as ChatIcon } from './Icons/Chat.svg';
import { ReactComponent as HomeIcon } from './Icons/Home.svg';
import { ReactComponent as PropsearchIcon } from './Icons/Propsearch.svg';
import { ReactComponent as RMsearchIcon } from './Icons/RMsearch.svg';
import { ReactComponent as MaintenanceIcon } from './Icons/Maintenance.svg';
import { ReactComponent as PaymentsIcon } from './Icons/Payments.svg';
import { ReactComponent as AwardIcon } from './Icons/award.svg';

// There is an issue when resizing that pushes the main page over and squishes the Sidebar. Have to figure that out.



function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other} 
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const tabStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    height: '91vh', 
  },
  TabPanel: {
    flexGrow: 1,
       
  },
  sideIcons: {
    flexGrow: 1,
    marginTop: '30%',
    height: 'auto', 
    width: '30%',
    marginRight: '50%',
  },
  sideIconAward: {
    flexGrow: 1,
    marginTop: '30%',
    height: 'auto', 
    width: '20%',
    marginRight: '50%',
  },
  active: {
    // Have to figure out highlighting.
  },
  
}));

export default function VerticalTabs() {
  const sideNavClasses = tabStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <div className={sideNavClasses.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Left Tab Menu"
        style={{
          backgroundColor: '#787ae3',
          display: 'flex',
          width: '5vw',
        }}
        indicatorColor="transparent" // I've been running into issues getting the sidebar icon to change color on active. So that's a priority.
      >

        <Tab 
          aria-label="HomeIcon" 
          disableRipple={true}
          icon={
          <HomeIcon 
            alt="Logo" 
            className={sideNavClasses.sideIcons}
          />} 
          
        />

        <Tab
          aria-label="PropSrchIcon" 
          disableRipple={true}
          icon={
          <PropsearchIcon 
            alt="Logo" 
            className={sideNavClasses.sideIcons}
          />} 
          
        />

        <Tab
          aria-label="RMSIcon" 
          disableRipple={true}
          icon={
            <RMsearchIcon
              alt="Logo" 
              className={sideNavClasses.sideIcons}
            />
          } 
        />

        <Tab
          aria-label="ChatIcon"
          disableRipple={true}
          icon={
            <ChatIcon 
              className={sideNavClasses.sideIcons}
            />
          }
        />
        <Tab
          aria-label="Reward" 
          disableRipple={true}
          icon={
            <AwardIcon 
              className={sideNavClasses.sideIconAward}
            />
          } 
        />

        < Tab
          aria-label="PayIcon" 
          disableRipple={true}
          icon={
            <PaymentsIcon 
              className={sideNavClasses.sideIcons}
            />
          } 
        />

        <Tab
          aria-label="MnIcon" 
          disableRipple={true}
          icon={
            <MaintenanceIcon 
              alt="Logo" 
              className={sideNavClasses.sideIcons}
            />
          }
        />
      </Tabs>

      <TabPanel value={value} index={0}>
      My Home
      </TabPanel>

      <TabPanel  value={value} index={1}>
        Property Search
      </TabPanel>

      <TabPanel value={value} index={2}>
        Room Mate Search
      </TabPanel>

      <TabPanel value={value} index={3}>
        Chat
      </TabPanel>

      <TabPanel value={value} index={4}>
        Rewards
      </TabPanel>

      <TabPanel value={value} index={5}>
        Payments
      </TabPanel>

      <TabPanel value={value} index={6}>
        Maintenance
      </TabPanel>

    </div>
  );
}