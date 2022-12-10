import { Drawer, List, ListItem, ListItemIcon, ListItemButton, ListItemText, Toolbar, Collapse } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import React, { useState } from "react";
import PostAddIcon from '@mui/icons-material/PostAdd';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddIcon from '@mui/icons-material/Add';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import BookIcon from '@mui/icons-material/Book';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
const drawerWidth = 240;
const initial_menuItems = [
  {
    
    menuTitle: "Home Page",
    visible: false,
    icon: <AddIcon/>,
    enteries: [{
      title: "View Profile",
      path: '/home/viewprofile',
      icon: <AccountBoxIcon />
    },
      {
      title: "Add Post",
      path: '/home/addpost',
      icon: <PostAddIcon />
    },
    {
      title: "View Posts",
      path: '/home/viewposts',
      icon: <AllInboxIcon />
    }
  ]
},
{

menuTitle: "Hobbies",
    visible: false,
    
    enteries: [{
      title: "Add Hobby",
      path: '/home/addhobby',
      icon: <BookIcon />
    },
    {
      title: "View Hobby",
      path: '/home/viewhobby',
      icon: <VisibilityIcon/>
    }

    ]
  },
    
  {
    menuTitle: "Events",
    visible: false,
    
    enteries: [{
      title: "View Events",
      path: '/home/viewevents',
      icon: <BookIcon />
    },
  ]
  }



]


const SDrawerV = (props) => {
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState(initial_menuItems);

  const updateMenuItemsVisibility = (index) => {
    let temp_menu_items = menuItems;
    temp_menu_items[index].visible = !temp_menu_items[index].visible;
    setMenuItems(temp_menu_items);
  }

  const { mobileOpen } = props;
  const { handleDrawerToggle } = props;

  const handleSideBarClick = (path) => {
    if (mobileOpen) handleDrawerToggle();
    navigate(path, { replace: true });
  }
  const [studentMenuOpen, setStudentMenuOpen] = React.useState(true);

  const handleStudentMenuClick = (index) => {
    updateMenuItemsVisibility(index);
    setStudentMenuOpen(!studentMenuOpen);
  };

  return (
    <div>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <List >

          {menuItems.map((menu, index) => (
            <>
              <ListItemButton onClick={()=>handleStudentMenuClick(index)}>
                <ListItemText primary={menu.menuTitle} />
                {menu.visible ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={menu.visible} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                  {menu.enteries.map(item => (
                    <>
                      <ListItem button key={item.title} onClick={() => handleSideBarClick(item.path)} sx={{ pl: 4 }}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.title} />
                      </ListItem>
                    </>
                  ))}
                </List>
              </Collapse>
            </>
          ))}

        </List>
      </Drawer>


      
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <List>

          {menuItems.map((menu, index) => (
            <>
              <ListItemButton onClick={()=>handleStudentMenuClick(index)}>
                <ListItemText primary={menu.menuTitle} />
                {menu.visible ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={menu.visible} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                  {menu.enteries.map(item => (
                    <>
                      <ListItem button key={item.title} onClick={() => handleSideBarClick(item.path)} sx={{ pl: 4 }}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.title} />
                      </ListItem>
                    </>
                  ))}
                </List>
              </Collapse>
            </>
          ))}

        </List>
      </Drawer>

    </div>
  );
};

export default SDrawerV;
