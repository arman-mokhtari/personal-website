import { Box, Link, Typography } from "@mui/material";
import { CopyrightRounded } from "@mui/icons-material";

const SidebarFooter = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "text.disabled",
        marginBottom: 0.5,
      }}
    >
      <Typography
        variant="caption"
        sx={{
          cursor: "default",
        }}
      >
        Designed by{" "}
        <Link
          sx={{
            textDecoration: "none",
          }}
          href="https://workfolio.ir"
          title="Developed by Workfolio"
          target="_blank"
        >
          Workfolio
        </Link>
      </Typography>
      <Typography
        variant="caption"
        sx={{
          display: "flex",
          alignItem: "center",
          cursor: "default",
        }}
      >
        <CopyrightRounded
          sx={{
            marginRight: 0.5,
            alignSelf: "center",
            fontSize: "small",
          }}
        />{" "}
        Copyright 2023
      </Typography>
    </Box>
  );
};

export default SidebarFooter;
