
import { Box,Modal, Fab, styled, Tooltip, Typography, Avatar, TextField, Stack, ButtonGroup, Button, } from "@mui/material";
import React, { useState } from "react";
import { Add as AddIcon} from '@mui/icons-material'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ImageIcon from '@mui/icons-material/Image';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
const StyledModal = styled(Modal)({
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
})

const UseBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"
})


const Add =()=>{
    const [open,setOpen] = useState(false)
    return(
        <>
            <Tooltip title="Delete" 
                onClick={()=>setOpen(true)}
                 sx={{position:"fixed" , bottom:"20px" , left:{xs:"calc(50%-25px)",md:"30"}}} >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>

            <StyledModal
                open={open}
                onClose={()=>setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box width={400} height={280} bgcolor={"background.default"} color={'text.primary'} p={3} borderRadius={5}>
                    <Typography variant="h6" color='gray' textAlign='center'>
                        Create Post
                    </Typography>
                <UseBox>
                     <Avatar sx={{width:30,height:30}} alt="Remy Sharp" src="https://pixlr.com/images/index/remove-bg.webp" />
                    <Typography fontWeight={500} variant="span">
                        Josh der
                    </Typography>
                </UseBox>
                <TextField
                    sx={{width:"full"}}
                    id="standard-helperText"
                    multiline
                    rows={2}
                    placeholder="what's  on your mind"
                    variant="standard"
                    />
                <Stack direction='row' gap={1} mt={2}mb={3}>
                    <EmojiEmotionsIcon color="primary"/>
                   <PersonAddIcon color="secondary"/>
                   <ImageIcon color="success"/>
                   <VideocamOffIcon color="error"/>
                </Stack>

                <ButtonGroup fullWidth variant="contained" aria-label="Basic button group">
                    <Button>Post</Button>
                    <Button sx={{width:"100px"}}>
                        <CalendarMonthIcon/>
                    </Button>
                </ButtonGroup>
                </Box>

            </StyledModal>
        </>
    )
}
export default Add;