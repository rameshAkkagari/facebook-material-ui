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
import React, { useState } from 'react'
import Sidebar from './Components/Sidebar'
import Rightbar from './Components/Rightbar'
import Navbar from './Components/Navbar'
import Feed from './Components/Feed'
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material'
import Add from './Components/Add'
function App() {
    const [mode,setMode] = useState("light")
    const darktheme = createTheme({
        palette:{
            mode:mode
        }
    })
  return (
    <div>
        <ThemeProvider theme={darktheme}>
            <Box bgcolor={"background.default"} color={'text.primary'}>
                <Navbar/>
                <Stack direction='row' spacing={2} justifyContent='space-between' >
                    <Sidebar mode={mode} setMode={setMode}/>
                    <Feed/>
                    <Rightbar/>
                </Stack>
                <Add/>
            </Box>
        </ThemeProvider>
    </div>
  )
}

export default App