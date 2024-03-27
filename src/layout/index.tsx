import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import Sidebar from '../sidebar'

interface LayoutProps {
  children: ReactNode;
}

function layout({ children }: LayoutProps) {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#10141F",
          display: "flex",
          flexDirection: {  
            xs: "column", 
            lg: "row",
          },
          color: "white",
          padding: 3,
          gap: 3,
          overflowY: "hidden",  
          height: "100vh",
        }}
      >
        <Sidebar/>
        <Box sx={{width: '100%' , overflowY:'hidden'}}>{children}</Box>
      </Box>
    </>
  );
}

export default layout;
