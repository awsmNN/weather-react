import { DarkMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Header () {
    return (
        <div className="header">
          <AppBar position="static">
            <Toolbar>
               <Typography variant="h6" sx={{flexGrow: 1}}>Weather app</Typography> 
               <IconButton>
                <DarkModeIcon>

                </DarkModeIcon>
               </IconButton>
            </Toolbar>
        </AppBar>  
        </div>
    )
}

export default Header;