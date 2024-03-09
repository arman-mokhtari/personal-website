import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CustomAvatar } from "../common";

const SidebarHeader = () => {
  const theme = useTheme();
  return (
    <>
      <CustomAvatar
        h={120}
        w={120}
        sm="block"
        xs="block"
        md="block"
        lg="block"
        xl="block"
        mt={2}
        b="7px solid"
      />

      <Typography
        sx={{
          marginTop: 0.5,
          color:
            theme.palette.mode === "dark" ? "text.primary" : "text.secondary",
          whiteSpace: "nowrap",
        }}
        variant="h5"
      >
        Arman Mokhtari
      </Typography>
      <Typography
        sx={{
          color:
            theme.palette.mode === "dark" ? "text.primary" : "text.secondary",
          whiteSpace: "nowrap",
          fontSize: "0.9rem",
        }}
        variant="caption"
      >
        I am a full-stack web developer.
      </Typography>
    </>
  );
};
export default SidebarHeader;
