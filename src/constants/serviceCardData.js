import { BrushOutlined, MobileFriendlyOutlined, CodeOutlined } from '@mui/icons-material';

export const serviceCardData = [
    {
        id: 0,
        title: "Web Design",
        text: "I design beautiful and intuitive interfaces with a focus on user experience and delivering responsive designs.",
        icon: (<BrushOutlined
            sx={{
                fontSize: "3rem",
                color: "#037fff",
            }}
        />)
    },
    {
        id: 1,
        title: "Web Development",
        text: "I'm a developer who can help you build your next website, whether that's a personal blog or a business website.",
        icon: (<CodeOutlined
            sx={{
                fontSize: "3rem",
                color: "#037fff",
            }}
        />)
    },
    {
        id: 2,
        title: "Mobile Application",
        text: "My goal is to create an app that works well on any device, with a great user experience that makes users happy.",
        icon: (<MobileFriendlyOutlined
            sx={{
                fontSize: "3rem",
                color: "#037fff",
            }}
        />)
    },
]