import {
  Typography,
  Box,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from "@mui/lab";
import { SchoolRounded } from "@mui/icons-material";
import { devEdu } from "../../constants/detail";
import { useTheme } from "@mui/material/styles";


const DevEduTimeline = () => {

  const theme = useTheme();

  return (
    <Timeline position="right" sx={{
      alignItems: "center",
      '& .MuiTimelineItem-root::before': {
        display: "none"
      },
    }} >
      <Box>
        {
          devEdu.map((item, index) => (

            <TimelineItem
              key={index}>
              <TimelineSeparator>
                <TimelineDot
                  variant="outlined"
                  sx={{
                    borderColor: "#037fff",
                  }} >
                  <SchoolRounded sx={{
                    color: "#037fff",
                  }} />
                </TimelineDot>
                {index !== 2 ? (<TimelineConnector
                  sx={{
                    backgroundColor: theme.palette.mode === "dark" ? "#2e344e" : "#cbced8",
                    transition: "background-color 0.5s",
                  }} />) : null}
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="caption" color="text.secondary">
                  {item.year}
                </Typography>
                <Typography variant="body1" color="text.main">
                  {item.cert}
                </Typography>
                <Typography variant="body2" color="text.main">
                  {item.major}
                </Typography>
                <Typography variant="body2" color="text.main">
                  {item.place}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))
        }
      </Box>
    </Timeline>
  )
}

export default DevEduTimeline;