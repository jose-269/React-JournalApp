import { Toolbar } from "@mui/material";
import { Box } from "@mui/system"
import { Navbar, SideBar } from "../components";

export const JournalLayout = ({ children }) => {

	const drawerWidth = 240;

	return (
		<>
			<Box sx={{ display: 'flex' }}>

				{/* Navbar */}
				<Navbar drawerWidth={drawerWidth} />
				{/* Sidebar */}
				<SideBar drawerWidth={ drawerWidth } />

				<Box component='main' sx={{ flexGrow: 1, p: 3 }}>
					<Toolbar />
					{children}
				</Box>
			</Box>
		</>
	)
}
