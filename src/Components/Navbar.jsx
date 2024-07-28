
import { AppBar, Avatar, Box, InputBase, Menu, MenuItem, Toolbar, Typography,styled } from '@mui/material'
import React, { useState } from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import { NotificationAdd } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

const StyledToobar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})

const Search = styled('div')(({ theme })=>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius:"5px",
    width:"40%"
}));


const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));


const UserBox = styled(Box)(({ theme })=>({
    display:"flex",
    gap:"10px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    },
}));



function Navbar() {
   const [open,setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
      <StyledToobar>
        <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>
            Ramesh
        </Typography>
        <PetsIcon sx={{display:{xs:"block",sm:"none"}}}/>
        <Search>
            <InputBase placeholder='search...'/>
            {/* autocomplete component */}
        </Search>
        <Icons>  
            <Badge badgeContent={4} color="error">
                <MailIcon />
            </Badge>  

            <Badge badgeContent={4} color="error">
                <NotificationAdd />
            </Badge>  

            <Avatar sx={{width:30,height:30}} alt="Remy Sharp"
                    src="https://pixlr.com/images/index/remove-bg.webp"
                    onClick={()=>setOpen(true)} 
            />
        </Icons>

        <UserBox onClick={()=>setOpen(true)}>
            <Avatar sx={{width:30,height:30}} alt="Remy Sharp" src="https://pixlr.com/images/index/remove-bg.webp" />
            <Typography variant='span'>Ramesh</Typography>
        </UserBox>
      </StyledToobar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={()=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>
        <MenuItem>Profile</MenuItem></MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar;






// import { Mail, Notifications, Pets } from "@mui/icons-material";
// import {
//   AppBar,
//   Avatar,
//   Badge,
//   Box,
//   InputBase,
//   Menu,
//   MenuItem,
//   styled,
//   Toolbar,
//   Typography,
// } from "@mui/material";
// import React, { useState } from "react";

// const StyledToolbar = styled(Toolbar)({
//   display: "flex",
//   justifyContent: "space-between",
// });

// const Search = styled("div")(({ theme }) => ({
//   backgroundColor: "white",
//   padding: "0 10px",
//   borderRadius: theme.shape.borderRadius,
//   width: "40%",
// }));

// const Icons = styled(Box)(({ theme }) => ({
//   display: "none",
//   alignItems: "center",
//   gap: "20px",
//   [theme.breakpoints.up("sm")]: {
//     display: "flex",
//   },
// }));

// const UserBox = styled(Box)(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   gap: "10px",
//   [theme.breakpoints.up("sm")]: {
//     display: "none",
//   },
// }));
// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <AppBar position="sticky">
//       <StyledToolbar>
//         <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
//           LAMA DEV
//         </Typography>
//         <Pets sx={{ display: { xs: "block", sm: "none" } }} />
//         <Search>
//           <InputBase placeholder="search..." />
//         </Search>
//         <Icons>
//           <Badge badgeContent={4} color="error">
//             <Mail />
//           </Badge>
//           <Badge badgeContent={2} color="error">
//             <Notifications />
//           </Badge>
//           <Avatar
//             sx={{ width: 30, height: 30 }}
//             src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//             onClick={(e) => setOpen(true)}
//           />
//         </Icons>
//         <UserBox onClick={(e) => setOpen(true)}>
//           <Avatar
//             sx={{ width: 30, height: 30 }}
//             src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//           />
//           <Typography variant="span">John</Typography>
//         </UserBox>
//       </StyledToolbar>
//       <Menu
//         id="demo-positioned-menu"
//         aria-labelledby="demo-positioned-button"
//         open={open}
//         onClose={(e) => setOpen(false)}
//         anchorOrigin={{
//           vertical: "top",
//           horizontal: "right",
//         }}
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "right",
//         }}
//       >
//         <MenuItem>Profile</MenuItem>
//         <MenuItem>My account</MenuItem>
//         <MenuItem>Logout</MenuItem>
//       </Menu>
//     </AppBar>
//   );
// };

// export default Navbar;

