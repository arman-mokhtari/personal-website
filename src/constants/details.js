import {
    Coffee,
    SchoolRounded,
    DataObjectRounded,
    DomainVerificationRounded,
} from "@mui/icons-material";

export const devWorkInfo = [
    {
        tooltipTitle: "The number of cups of coffee per year",
        icon: <Coffee sx={{
            color: "#037fff !important",
        }} />,
        total: 1263,
    },
    {
        tooltipTitle: "Completed training courses this month",
        icon: <SchoolRounded
            sx={{
                color: "#037fff !important",
            }} />,
        total: 3,
    },
    {
        tooltipTitle: "The number of my projects",
        icon: <DataObjectRounded
            sx={{
                color: "#037fff !important",
            }} />,
        total: 18,
    },
    {
        tooltipTitle: "Number of completed projects",
        icon: <DomainVerificationRounded
            sx={{
                color: "#037fff !important",
            }} />,
        total: 12,
    },
];