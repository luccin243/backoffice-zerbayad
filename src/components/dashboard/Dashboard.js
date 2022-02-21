
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Order from 'components/order';
import * as React from 'react';
import homeIcon from '../../assets/images/Icon feather-home.png';
import mapIcon from '../../assets/images/Icon feather-map.png';
import pluginIcon from '../../assets/images/Icon material-extension.png';
import { LogoIcon } from '../../components';
import NewProduct from '../newProduct';
import Orders from '../orders';
import ProductsList from '../productsList';

import ProductTable from '../productsList/ProductTable';







const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor:'#F9F9FE',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const LogoIconContainer = styled(Stack)({
    margin: 'auto',
    width: 35,
    height: 35,
    justifyContent: 'center',
  });

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const TestCompo = ()=>{
  return(<h1>Hello From Test</h1>)
}
export default function Dashboard() {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [showCompo, setShowCompo] = React.useState(0);
  const [productSelected, setProductSelected] = React.useState();


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Home
          </Typography>
          <LogoIconContainer >
          <LogoIcon />
        </LogoIconContainer>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{

          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#091952',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >

        <DrawerHeader >

        <LogoIconContainer sx={{
          marginTop : '8px',
          marginBottom : '8px',
          width: 100,
          height: 80,
          justifyContent: 'center',
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="99.558" height="81.699" viewBox="0 0 99.558 81.699">
        <g id="smart-city-networks-logo-vector" transform="translate(-18.716 -78)">
          <path id="Path_2" data-name="Path 2" d="M133.17,102.578l6.733-6.733,7.855,7.855v22.843M111.081,96.967a9.6,9.6,0,0,1,10.484.369v25.087m-31.819-3.366v-13.85h3V93.6h3V76h8.239V92.847h3v12.728h3.751v20.6M81.137,110.817H89.5m-19.6,9.361,6.556-6.556,8.047,8.047" transform="translate(-42.573 3)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
          <path id="Path_3" data-name="Path 3" d="M19.2,430.016l1.026-2.5a5.63,5.63,0,0,0,3.238,1.154c1.635,0,2.453-.577,2.453-1.715a2.488,2.488,0,0,0-.577-1.539,7.624,7.624,0,0,0-2.388-1.635,11.961,11.961,0,0,1-2.437-1.491,3.883,3.883,0,0,1-.962-1.395,4.514,4.514,0,0,1-.337-1.779,3.87,3.87,0,0,1,1.33-3.014,4.907,4.907,0,0,1,3.414-1.2,6.3,6.3,0,0,1,3.991,1.026l-.85,2.4a5.192,5.192,0,0,0-3.094-1.058,2.076,2.076,0,0,0-1.491.513,1.763,1.763,0,0,0-.529,1.33c0,.9.994,1.843,3,2.805a9.559,9.559,0,0,1,2.276,1.427,4.289,4.289,0,0,1,1.058,1.507,4.957,4.957,0,0,1,.369,1.924,3.871,3.871,0,0,1-1.507,3.142,6.185,6.185,0,0,1-4.023,1.234,7.059,7.059,0,0,1-3.959-1.138m27.363.882v-7.582a4.078,4.078,0,0,0-1.074-3.014,3.931,3.931,0,0,0-2.982-1.106,5.082,5.082,0,0,0-1.8.337,3.512,3.512,0,0,0-1.411.9,4.465,4.465,0,0,0-3.446-1.234,3.7,3.7,0,0,0-2.885,1.218l-.545-1.01H30.581V430.9h2.693v-8.255a2.38,2.38,0,0,1,.866-.818,2.152,2.152,0,0,1,1.09-.369,2.029,2.029,0,0,1,1.475.5,1.774,1.774,0,0,1,.529,1.346v7.614h2.693v-8.3a2.105,2.105,0,0,1,.785-.818,2.072,2.072,0,0,1,1.154-.353q2.02,0,2.02,2.26v7.2Zm8.592-5.386a5.44,5.44,0,0,0-1.026-.144c-2.1,0-3.158.689-3.158,2.068q0,1.539,1.779,1.539a2.125,2.125,0,0,0,2.4-2.4v-1.058Zm.256,5.178v-.93a2.629,2.629,0,0,1-1.266.978,4.809,4.809,0,0,1-1.892.385,4.251,4.251,0,0,1-2.917-.93,3.314,3.314,0,0,1-1.058-2.629,3.674,3.674,0,0,1,1.491-3.11,6.941,6.941,0,0,1,4.248-1.122,4.277,4.277,0,0,1,1.106.16c0-1.362-.85-2.036-2.549-2.036a5.709,5.709,0,0,0-2.533.5l-.577-2.084a7.7,7.7,0,0,1,3.286-.657,5.321,5.321,0,0,1,3.847,1.2c.818.8,1.218,2.308,1.218,4.536V427.4c0,.609-.064,3.3-.064,3.3h-2.34Zm10.836-11.061c.016-.272-.625-.3-1.539-.3a3.051,3.051,0,0,0-2.661,1.154V419.42H59.355v11.493h2.693v-6.54a3.067,3.067,0,0,1,.721-2.068,2.165,2.165,0,0,1,1.667-.85c.577,0,1.731-.08,1.7.224Zm2.773,7.742a3.777,3.777,0,0,0,.93,2.757,3.533,3.533,0,0,0,2.645.978,8.859,8.859,0,0,0,2.677-.321v-2.469a3.482,3.482,0,0,1-1.811.513,1.631,1.631,0,0,1-1.363-.513,2.961,2.961,0,0,1-.385-1.747v-5.033h3.158v-2.148H71.714V416.07l-2.693-.032V419.4H66.969v2.148h2.052Z" transform="translate(0 -281.724)" fill="#fff" stroke="#fff" stroke-width="1"/>
          <path id="Path_4" data-name="Path 4" d="M19.2,430.016l1.026-2.5a5.63,5.63,0,0,0,3.238,1.154c1.635,0,2.453-.577,2.453-1.715a2.488,2.488,0,0,0-.577-1.539,7.624,7.624,0,0,0-2.388-1.635,11.961,11.961,0,0,1-2.437-1.491,3.883,3.883,0,0,1-.962-1.395,4.514,4.514,0,0,1-.337-1.779,3.87,3.87,0,0,1,1.33-3.014,4.907,4.907,0,0,1,3.414-1.2,6.3,6.3,0,0,1,3.991,1.026l-.85,2.4a5.192,5.192,0,0,0-3.094-1.058,2.076,2.076,0,0,0-1.491.513,1.763,1.763,0,0,0-.529,1.33c0,.9.994,1.843,3,2.805a9.559,9.559,0,0,1,2.276,1.427,4.289,4.289,0,0,1,1.058,1.507,4.957,4.957,0,0,1,.369,1.924,3.871,3.871,0,0,1-1.507,3.142,6.185,6.185,0,0,1-4.023,1.234A7.059,7.059,0,0,1,19.2,430.016Zm27.363.882v-7.582a4.078,4.078,0,0,0-1.074-3.014,3.931,3.931,0,0,0-2.982-1.106,5.082,5.082,0,0,0-1.8.337,3.512,3.512,0,0,0-1.411.9,4.465,4.465,0,0,0-3.446-1.234,3.7,3.7,0,0,0-2.885,1.218l-.545-1.01H30.581V430.9h2.693v-8.255a2.38,2.38,0,0,1,.866-.818,2.152,2.152,0,0,1,1.09-.369,2.029,2.029,0,0,1,1.475.5,1.774,1.774,0,0,1,.529,1.346v7.614h2.693v-8.3a2.105,2.105,0,0,1,.785-.818,2.072,2.072,0,0,1,1.154-.353q2.02,0,2.02,2.26v7.2Zm8.592-5.386a5.44,5.44,0,0,0-1.026-.144c-2.1,0-3.158.689-3.158,2.068q0,1.539,1.779,1.539a2.125,2.125,0,0,0,2.4-2.4v-1.058Zm.256,5.178v-.93a2.629,2.629,0,0,1-1.266.978,4.809,4.809,0,0,1-1.892.385,4.251,4.251,0,0,1-2.917-.93,3.314,3.314,0,0,1-1.058-2.629,3.674,3.674,0,0,1,1.491-3.11,6.941,6.941,0,0,1,4.248-1.122,4.277,4.277,0,0,1,1.106.16c0-1.362-.85-2.036-2.549-2.036a5.709,5.709,0,0,0-2.533.5l-.577-2.084a7.7,7.7,0,0,1,3.286-.657,5.321,5.321,0,0,1,3.847,1.2c.818.8,1.218,2.308,1.218,4.536V427.4c0,.609-.064,3.3-.064,3.3h-2.34Zm10.836-11.061c.016-.272-.625-.3-1.539-.3a3.051,3.051,0,0,0-2.661,1.154V419.42H59.355v11.493h2.693v-6.54a3.067,3.067,0,0,1,.721-2.068,2.165,2.165,0,0,1,1.667-.85c.577,0,1.731-.08,1.7.224Zm2.773,7.742a3.777,3.777,0,0,0,.93,2.757,3.533,3.533,0,0,0,2.645.978,8.859,8.859,0,0,0,2.677-.321v-2.469a3.482,3.482,0,0,1-1.811.513,1.631,1.631,0,0,1-1.363-.513,2.961,2.961,0,0,1-.385-1.747v-5.033h3.158v-2.148H71.714V416.07l-2.693-.032V419.4H66.969v2.148h2.052Z" transform="translate(0 -281.724)" fill="none" stroke="#fff" stroke-width="0.5"/>
          <path id="Path_6" data-name="Path 6" d="M416.047,281.467h-4.488v-9.73h-5.242V260.5H399.2" transform="translate(-319.087 -152.523)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
          <path id="Path_7" data-name="Path 7" d="M155.357,416.187,154.2,418.5a4.1,4.1,0,0,0-3-.93A3.827,3.827,0,0,0,148,419.217a6.676,6.676,0,0,0-1.25,4.168,6.289,6.289,0,0,0,1.154,3.991,3.764,3.764,0,0,0,3.11,1.475,4.247,4.247,0,0,0,3.479-1.571l1.3,2.26a6.56,6.56,0,0,1-5,1.8,6.32,6.32,0,0,1-5.114-2.164,8.864,8.864,0,0,1-1.827-5.9,8.643,8.643,0,0,1,2.02-5.835,6.554,6.554,0,0,1,5.178-2.34,7.386,7.386,0,0,1,4.312,1.09m3.414-1.058a1.533,1.533,0,0,0-1.555,1.555,1.564,1.564,0,0,0,.449,1.106,1.559,1.559,0,1,0,1.106-2.661m1.33,15.934V419.57h-2.757v2.2h.032v9.281H160.1Zm3.687-3.527a3.777,3.777,0,0,0,.93,2.757,3.533,3.533,0,0,0,2.645.978,8.857,8.857,0,0,0,2.677-.321v-2.469a3.482,3.482,0,0,1-1.811.513,1.631,1.631,0,0,1-1.363-.513,2.96,2.96,0,0,1-.385-1.747V421.7h3.158v-2.148h-3.158v-3.318l-2.693-.048v3.366h-2.356V421.7h2.356Zm18.482-7.967h-2.789l-2.837,7.951L173.5,419.57h-2.789l3.607,8.929a9.474,9.474,0,0,1,.866,3.158c0,1.042-1.042,1.555-3.11,1.555v2.356a7.017,7.017,0,0,0,3.3-.753,3.706,3.706,0,0,0,1.843-1.908ZM98.9,433.307l4.472,4.3a9.441,9.441,0,0,1,.769.85v-4.889H105.2v7.326l-4.552-4.376a5.141,5.141,0,0,1-.673-.785v4.889H98.916v-7.31Zm10,7.31h3.927v-1.026h-2.789v-2.276h2.789V436.3h-2.789v-1.763h2.789v-.978H108.9Zm10.692-6.059h1.859v-.978h-4.873v.978h1.875v6.059h1.138Zm5.242-.978,2.725,7.31,1.571-3.991a9.318,9.318,0,0,0,.337-1.01,10.168,10.168,0,0,0,.337.978l1.6,4.007,2.725-7.31H133l-1.314,3.575a10.574,10.574,0,0,0-.353,1.09,11.545,11.545,0,0,0-.369-1.122l-1.491-3.831-1.427,3.767c-.032.112-.176.5-.385,1.186-.112-.369-.24-.737-.369-1.106l-1.33-3.559h-1.122ZM142.6,439.7a3.639,3.639,0,0,0,0-5.226,3.833,3.833,0,0,0-5.322,0,3.677,3.677,0,0,0,0,5.226,3.745,3.745,0,0,0,2.661,1.074A3.679,3.679,0,0,0,142.6,439.7m-.85-4.472a2.6,2.6,0,0,1,.753,1.875,2.631,2.631,0,0,1-.753,1.859,2.524,2.524,0,0,1-1.811.769,2.56,2.56,0,0,1-1.827-.769,2.591,2.591,0,0,1-.753-1.859,2.656,2.656,0,0,1,.753-1.875,2.56,2.56,0,0,1,1.827-.769,2.436,2.436,0,0,1,1.811.769m6.332,2.228h.128l2.34,3.158h1.282l-2.421-3.206a1.7,1.7,0,0,0,1.619-1.908,1.91,1.91,0,0,0-.673-1.539,2.73,2.73,0,0,0-1.747-.4h-1.6V440.6h1.074Zm.064-.882v-2.02h.208c1.026,0,1.507.192,1.507,1.058,0,.85-.5.962-1.507.962Zm7.326,4.04h1.138v-3.591l2.789,3.591h1.475l-3.126-3.911,2.789-3.126H159.14l-2.533,2.917V433.58h-1.138Zm8.32-1.427a2.059,2.059,0,0,0,2.228,1.6,2.1,2.1,0,0,0,2.324-2.18c0-1.01-.577-1.523-1.827-2.084-.785-.369-1.347-.577-1.347-1.25a.889.889,0,0,1,1.01-.882,1.167,1.167,0,0,1,1.042.641l.9-.465a1.952,1.952,0,0,0-2.036-1.154,1.925,1.925,0,0,0-2.116,1.924c0,1.058.689,1.539,1.94,2.148.721.353,1.25.529,1.25,1.218a1,1,0,0,1-1.106,1.042,1.277,1.277,0,0,1-1.363-.962Zm17.761-8.127a1.508,1.508,0,1,1,1.507,1.555,1.493,1.493,0,0,1-1.507-1.555m1.523,1.859a1.86,1.86,0,1,0-1.892-1.859,1.854,1.854,0,0,0,1.892,1.859m-.4-1.715h.369l.561.93h.369l-.609-.946a.556.556,0,0,0,.561-.593c0-.417-.256-.609-.753-.609h-.818v2.148h.321Zm0-.272v-.657h.449c.224,0,.465.048.465.321,0,.337-.24.353-.529.353h-.385Z" transform="translate(-66.924 -281.889)" fill="#fff" stroke="#fff" stroke-width="0.5"/>
          <path id="Path_8" data-name="Path 8" d="M155.357,416.187,154.2,418.5a4.1,4.1,0,0,0-3-.93A3.827,3.827,0,0,0,148,419.217a6.676,6.676,0,0,0-1.25,4.168,6.289,6.289,0,0,0,1.154,3.991,3.764,3.764,0,0,0,3.11,1.475,4.247,4.247,0,0,0,3.479-1.571l1.3,2.26a6.56,6.56,0,0,1-5,1.8,6.32,6.32,0,0,1-5.114-2.164,8.864,8.864,0,0,1-1.827-5.9,8.643,8.643,0,0,1,2.02-5.835,6.554,6.554,0,0,1,5.178-2.34A7.386,7.386,0,0,1,155.357,416.187Zm2.324-.593a1.5,1.5,0,0,0-.449,1.106,1.564,1.564,0,0,0,.449,1.106,1.559,1.559,0,1,0,1.106-2.661A1.418,1.418,0,0,0,157.682,415.594Zm2.421,15.469V419.57h-2.757v2.2h.032v9.281H160.1Zm3.687-3.527a3.777,3.777,0,0,0,.93,2.757,3.533,3.533,0,0,0,2.645.978,8.857,8.857,0,0,0,2.677-.321v-2.469a3.482,3.482,0,0,1-1.811.513,1.631,1.631,0,0,1-1.363-.513,2.96,2.96,0,0,1-.385-1.747V421.7h3.158v-2.148h-3.158v-3.318l-2.693-.048v3.366h-2.356V421.7h2.356Zm18.482-7.967h-2.789l-2.837,7.951L173.5,419.57h-2.789l3.607,8.929a9.474,9.474,0,0,1,.866,3.158c0,1.042-1.042,1.555-3.11,1.555v2.356a7.017,7.017,0,0,0,3.3-.753,3.706,3.706,0,0,0,1.843-1.908ZM98.9,433.307l4.472,4.3a9.441,9.441,0,0,1,.769.85v-4.889H105.2v7.326l-4.552-4.376a5.141,5.141,0,0,1-.673-.785v4.889H98.916v-7.31Zm10,7.31h3.927v-1.026h-2.789v-2.276h2.789V436.3h-2.789v-1.763h2.789v-.978H108.9Zm10.692-6.059h1.859v-.978h-4.873v.978h1.875v6.059h1.138Zm5.242-.978,2.725,7.31,1.571-3.991a9.318,9.318,0,0,0,.337-1.01,10.168,10.168,0,0,0,.337.978l1.6,4.007,2.725-7.31H133l-1.314,3.575a10.574,10.574,0,0,0-.353,1.09,11.545,11.545,0,0,0-.369-1.122l-1.491-3.831-1.427,3.767c-.032.112-.176.5-.385,1.186-.112-.369-.24-.737-.369-1.106l-1.33-3.559h-1.122ZM143.7,437.09a3.6,3.6,0,0,0-1.106-2.613,3.833,3.833,0,0,0-5.322,0,3.677,3.677,0,0,0,0,5.226,3.745,3.745,0,0,0,2.661,1.074A3.814,3.814,0,0,0,142.6,439.7,3.548,3.548,0,0,0,143.7,437.09Zm-1.186,0a2.659,2.659,0,0,1-.753,1.859,2.524,2.524,0,0,1-1.811.769,2.56,2.56,0,0,1-1.827-.769,2.591,2.591,0,0,1-.753-1.859,2.656,2.656,0,0,1,.753-1.876,2.56,2.56,0,0,1,1.827-.769,2.524,2.524,0,0,1,1.811.769A2.726,2.726,0,0,1,142.517,437.09Zm5.562.369h.128l2.34,3.158h1.282l-2.421-3.206a1.7,1.7,0,0,0,1.619-1.908,1.91,1.91,0,0,0-.673-1.539,2.73,2.73,0,0,0-1.747-.4h-1.6V440.6h1.074Zm.064-.882v-2.02h.208c1.026,0,1.507.192,1.507,1.058,0,.85-.5.962-1.507.962Zm7.326,4.04h1.138v-3.591l2.789,3.591h1.475l-3.126-3.911,2.789-3.126H159.14l-2.533,2.917V433.58h-1.138Zm8.32-1.427a2.059,2.059,0,0,0,2.228,1.6,2.1,2.1,0,0,0,2.324-2.18c0-1.01-.577-1.523-1.827-2.084-.785-.369-1.347-.577-1.347-1.25a.889.889,0,0,1,1.01-.882,1.167,1.167,0,0,1,1.042.641l.9-.465a1.952,1.952,0,0,0-2.036-1.154,1.925,1.925,0,0,0-2.116,1.924c0,1.058.689,1.539,1.94,2.148.721.353,1.25.529,1.25,1.218a1,1,0,0,1-1.106,1.042,1.277,1.277,0,0,1-1.363-.962Z" transform="translate(-66.924 -281.889)" fill="none" stroke="#fff" stroke-width="0.04"/>
        </g>
      </svg>

      </LogoIconContainer>

          <IconButton onClick={handleDrawerClose} sx={{color:'white'   }} >
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{
          color:'white'
        }}>
          {['Home', 'Products','New Product', 'Orders'].map((text, index) => (
              <>
            <ListItem button key={text} onClick={()=>setShowCompo(index)}>
              <ListItemIcon>
                {index  === 0 ? <img src={homeIcon} alt="Logo" /> : null}
                {index  === 1 ? <img src={mapIcon} alt="Logo" /> : null}
                {index  === 3 ? <img src={pluginIcon} alt="Logo" /> : null}
              </ListItemIcon>
              <ListItemText primary={text} />

            </ListItem>

                </>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
      <DrawerHeader />


      {showCompo === 0 ? null : null}
      {showCompo === 1 ? <ProductTable /> : null}
      {showCompo === 2 ? <NewProduct /> : null}
      {showCompo === 3 ? <Orders setProductSelected={setProductSelected} setShowCompo={setShowCompo} /> : null}
      {showCompo === 4 ? <Order id={productSelected} setShowCompo={setShowCompo}/> : null}
          
      </Main>
    </Box>
  );
}
