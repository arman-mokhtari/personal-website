import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";
import PagesContainer from "./PagesContainer";
import Sidebar from "../components/sidebar/Sidebar";
import { Page } from "../components/pages";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";


import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import { DrawerActionButton } from "../components/drawer";
import SwipeableViews from "react-swipeable-views";
import { Home, About, Resume, Contact } from "../pages";
import Activity from "../pages/Activity";
import "@fontsource/nunito/600.css"

const App = () => {

  const [mode, setMode] = useState();
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode])

  const handleThemeChange = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    setDrawerOpen(false);
  }, [isMdUp]);

  const handlePageNumber = (event, newPage) => {
    setPageNumber(newPage)
  }
 
const handlePageChange=index=>{
  setPageNumber(index);
}

  return (
    <MainContext.Provider value={{
      pageNumber,
      handlePageNumber,
      drawerOpen,
      setDrawerOpen,
      handleThemeChange,
    }}>
      <MainLayout mode={mode}>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <DrawerActionButton />
        <PagesContainer>
          <SwipeableViews
            index={pageNumber}
            onChangeIndex={handlePageChange}
          >
            <Page pageNumber={pageNumber} index={0}>
              <Home helmetTitle="Arman's Website" />
            </Page>
            <Page pageNumber={pageNumber} index={1}>
              <About helmetTitle="About" />
            </Page>
            <Page pageNumber={pageNumber} index={2}>
              <Resume helmetTitle="Resume" />
            </Page>
            <Page pageNumber={pageNumber} index={3}>
              <Activity helmetTitle="Activity" />
            </Page>
            <Page pageNumber={pageNumber} index={4}>
              <Contact helmetTitle="Contact" />
            </Page>
          </SwipeableViews>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default App;
