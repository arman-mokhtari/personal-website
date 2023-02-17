import { ListItem, ListItemText } from "@mui/material";

export function itemsText() {
    return ["Arman Mokhtari", "34", "Iran", "Persian, English", "Mashhad, Iran", "Available"].map((value, index) =>
    (
        <ListItem
            sx={{
                px: 0,
            }}
            key={index}>
            <ListItemText
                className="psBefore"
                primary={value}
                sx={{
                    whiteSpace: "nowrap",
                    "& .MuiTypography-root": {
                        lineHeight: "1rem",
                    }
                }}
            />
        </ListItem>
    ),
    );
};

export function items() {
    return ["Full Name", "Age", "Nationality", "Languages", "Address", "Freelance"].map((value, index) =>
    (
        <ListItem
            sx={{
                px: 0,
            }}
            key={index}>
            <ListItemText
                primary={value}
                sx={{
                    whiteSpace: "nowrap",
                    "& .MuiTypography-root": {
                        lineHeight: "1rem",
                    }
                }} />
        </ListItem>
    ),
    );
};
