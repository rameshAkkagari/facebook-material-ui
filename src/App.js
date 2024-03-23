// import { Button, Typography, styled } from "@mui/material";
// import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
// import AddIcon from '@mui/icons-material/Add';
// function App() {
//     const BlueButton = styled(Button)({
//         backgroundColor:"red",
//             color:"white",
//             padding:"20px",
//             margin:"20px",
//             "&:hover":{
//                 background:"lightblue"
//             }
//     })
//   return (
//     <div>
//        <Button variant="text" startIcon={<SettingsSuggestIcon/>}>Text</Button>
//        <Button variant="contained" color="secondary" >Contained</Button>
//        <Button variant="outlined" color="success" startIcon={<AddIcon/>}>Outlined</Button>

//        <Typography variant="h1" component="h2">
//             h1. Heading
//       </Typography>
//         {/* <Button variant="contained" disabled sx={{
//             backgroundColor:"red",
//             color:"white",
//             padding:"20px",
//             margin:"20px",
//             "&:hover":{
//                 background:"lightblue"
//             }
//         }}>My button</Button>

// <Button variant="contained" disabled sx={{
//             backgroundColor:"red",
//             color:"white",
//             padding:"20px",
//             "&:hover":{
//                 background:"lightblue"
//             }
//         }}>My button</Button> */}
//         <BlueButton>First Button</BlueButton>
//         <BlueButton>First Button</BlueButton>
//         <BlueButton>First Button</BlueButton>

//     </div>
//   );
// }

// export default App;
import React from 'react'
import Sidebar from './Components/Sidebar'
import Rightbar from './Components/Rightbar'
import Navbar from './Components/Navbar'
import Feed from './Components/Feed'
import { Box, Stack } from '@mui/material'
function App() {
  return (
    <div>
        <Box>
            <Navbar/>
            <Stack direction='row' spacing={2} justifyContent='space-between' >
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </Stack>
        </Box>
    </div>
  )
}

export default App