import {
    HomeRounded,
    SentimentSatisfiedRounded,
    TerminalRounded,
    TextSnippetRounded,
    ConnectWithoutContactRounded,
} from '@mui/icons-material';

const tabProps = (index) => {
    return {
        id: `sidebar-tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
    };
};

export const tabsData = () => {

    const tabs = [
        { lable: "Home", icon: <HomeRounded />, ...tabProps(0) },
        { lable: "about", icon: <SentimentSatisfiedRounded />, ...tabProps(1) },
        { lable: "resume", icon: <TextSnippetRounded />, ...tabProps(2) },
        { lable: "activity", icon: <TerminalRounded />, ...tabProps(3) },
        { lable: "contact", icon: <ConnectWithoutContactRounded />, ...tabProps(4) },
    ];
    return tabs;
};