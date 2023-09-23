import { useState } from "react"
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from '@mui/icons-material/People';
import ContactsIcon from '@mui/icons-material/Contacts';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HelpIcon from '@mui/icons-material/Help';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChatIcon from '@mui/icons-material/PieChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import MenuIcon from '@mui/icons-material/Menu';
import MapIcon from '@mui/icons-material/Map';


const PageSidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard")

    const Item = ({ title, icon, selected, setSelected }) => {
        const theme = useTheme();
        const colors = tokens(theme.palette.mode);
    
        return (
            <MenuItem active={selected === title} style={{ color: colors.gray[100] }}
                onClick={() => setSelected(title)}
                icon={icon}
            >
                <Typography>{title}</Typography>
            </MenuItem>
        )
    }

    return (
        <Box

            sx={{
                "& .pro-sidebar-inner": {

                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <Sidebar collapsed={isCollapsed}
                rootStyles={{ "& .ps-sidebar-container": { backgroundColor: `${colors.primary[400]} !important`, height: '100vh',
                  } 
                }}>

                <Menu iconShape="square"
                    menuItemStyles={{
                        button: {
                              '&:hover': {
                                 backgroundColor: colors.greenAccent[500],
                            },                           
                        }
                    }}
                >
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.gray[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h3" color={colors.gray[100]}>
                                    ADMINIS
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={`../../assets/user.png`}
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.gray[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    Ed Roh
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>
                                    VP Fancy Admin
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    {/* MENU ITEMS */}
                    <Box paddingLeft={isCollapsed ? undefined : "10%" }>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Item
                                title="Dashboard"
                                icon={<HomeIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </Link>
                        <Typography
                            variant="h6"
                            color={colors.gray[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Data
                        </Typography>
                        <Link to="/team" style={{ textDecoration: "none" }}>
                            <Item
                                title="Manage Team"
                                icon={<PeopleIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </Link>

                        <Link to="/contacts" style={{ textDecoration: "none" }}>
                            <Item
                                title="Contacts Information"
                                icon={<ContactsIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </Link>

                        <Link to="/invoice" style={{ textDecoration: "none" }}>
                            <Item
                                title="Invoices Balances"
                                icon={<ReceiptIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </Link>

                        <Typography
                            variant="h6"
                            color={colors.gray[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Pages
                        </Typography>

                        <Link to="/form" style={{ textDecoration: "none" }}>
                            <Item
                                title="Profile Form"
                                icon={<PersonIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </Link>

                        <Link to="/calender" style={{ textDecoration: "none" }}>
                            <Item
                                title="Calendar"
                                icon={<CalendarTodayIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </Link>

                        <Link to="/faq" style={{ textDecoration: "none" }}>
                            <Item
                                title="FAQ Page"
                                icon={<HelpIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </Link>

                        <Typography
                            variant="h6"
                            color={colors.gray[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Charts
                        </Typography>

                        <Link to="/bar" style={{ textDecoration: "none" }}>
                            <Item
                                title="Bar Chart"
                                icon={<BarChartIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </Link>

                        <Link to="/pie" style={{ textDecoration: "none" }}>
                            <Item
                                title="Pie Chart"
                                icon={<PieChatIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </Link>

                        <Link to="/line" style={{ textDecoration: "none" }}>
                            <Item
                                title="Line Chart"
                                icon={<TimelineIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </Link>

                        <Link to="/geography" style={{ textDecoration: "none" }}>
                            <Item
                                title="Geography Chart"
                                // to="/geography"
                                icon={<MapIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </Link>
                    </Box>
                </Menu>
            </Sidebar>
        </Box >
    )
}

export default PageSidebar