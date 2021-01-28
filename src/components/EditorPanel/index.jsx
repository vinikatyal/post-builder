import React, { memo, useState, useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import { get } from "lodash";
import { ResizableBox } from "react-resizable";

// common components
import Editor from "react-medium-editor";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";
import Tooltip from "@material-ui/core/Tooltip";

import StyleManager from "../LeftPanel/StyleManager";

// context
import { StyleContext } from "../../context/StyleContext";
import { DeviceContext } from "../../context/DeviceContext";

import Episodes from "./Episodes";

// import styles
import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/default.css";
import "react-resizable/css/styles.css";

// constants
import { DEVICE_WIDTH } from "../../constants";

const useStyles = makeStyles((theme) => ({
  editable: {
    minHeight: "70px",
    padding: "5px",
    resize: "none",
  },
  sideBar: {
    zIindex: "2",
    display: "flex",
    height: "100vh",
    overflowY: "auto",
  },
  formControl: {
    minWidth: 120,
  },
  margin16: {
    marginBottom: theme.spacing(2),
  },
  paddingDiv: {
    padding: theme.spacing(2),
  },
  logo: {
    marginLeft: theme.spacing(2),
  },
  header: {
    minHeight: theme.spacing(8),
    position: "relative",
    display: "flex",
    width: "100%",
    boxSizing: "border-box",
    justifyContent: "flex-start",
    alignItems: "center",
    boxShadow: "inset 0 -1px 0 rgba(230, 230, 230, 1)",
    marginBottom: "8px",
  },
  box: {
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  },
  adoriPanel: {
    width: "100%",
  },
  img: {
    maxWidth: "100%",
  },
  mobileIcons: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function EditorPane() {
  const classes = useStyles();
  // context
  const { styles, logo } = useContext(StyleContext);
  const { device, handleDeviceChange } = useContext(DeviceContext);

  const [page, setPage] = useState("homePage");
  const [heading, setHeading] = useState("Rick & Carly In The Morning");
  const [description, setDescription] = useState(
    "It's not very often that two people dating air it all out LIVE on the radio every morning.  Rick & Carly share WAY more than they should, leaving you with a mouth wide open, eyes bulging, holy moly kinda feeling every morning."
  );

  const handlePageChange = (event) => {
    setPage(event.target.value);
  };

  const handleDevice = (device) => {
    handleDeviceChange(DEVICE_WIDTH[device]);
  };
  return (
    <Grid container>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        item
        xs={12}
        className={classes.mobileIcons}
      >
        <FormControl className={classes.formControl}>
          <InputLabel id="select-label">Pages</InputLabel>
          <Select
            labelId="select-label"
            id="selectPage"
            value={page}
            onChange={handlePageChange}
          >
            <MenuItem value={"homePage"}>Home Page</MenuItem>
            <MenuItem value={"audioPage"}>Audio Home</MenuItem>
          </Select>
        </FormControl>

        <div>
          <Tooltip title="Desktop" aria-label="desktop">
            <IconButton disableRipple onClick={() => handleDevice("desktop")}>
              <SvgIcon
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="rgba(8, 8, 8, 1)"
              >
                <path d="M18 .45c-.3-.3-.65-.45-1.08-.45H1.54C1.12 0 .75.15.45.45.15.75 0 1.12 0 1.54V12c0 .42.15.79.45 1.09.3.3.67.45 1.09.45h5.23c0 .24-.05.5-.15.75-.1.25-.21.48-.31.67-.1.2-.16.33-.16.42 0 .17.06.32.19.44a.6.6 0 0 0 .43.18h4.92a.6.6 0 0 0 .44-.18.59.59 0 0 0 .18-.44c0-.08-.05-.22-.16-.41-.1-.2-.2-.43-.3-.69-.1-.26-.16-.5-.16-.74h5.23c.43 0 .79-.15 1.09-.45.3-.3.45-.67.45-1.09V1.54c0-.42-.15-.79-.45-1.09zm-.77 9.09a.3.3 0 0 1-.1.21.3.3 0 0 1-.2.1H1.52a.3.3 0 0 1-.2-.1.3.3 0 0 1-.1-.21v-8a.3.3 0 0 1 .1-.22.3.3 0 0 1 .2-.09h15.4a.3.3 0 0 1 .2.1c.07.05.1.13.1.2v8z"></path>
              </SvgIcon>
            </IconButton>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Tablet" aria-label="tablet">
            <IconButton disableRipple onClick={() => handleDevice("tablet")}>
              <SvgIcon
                width="14"
                height="17"
                viewBox="0 0 14 17"
                fill="rgba(117, 117, 117, 1)"
              >
                <path d="M11.78.43H1.68C.87.43.22 1.08.22 1.88v13.36c0 .8.65 1.44 1.44 1.44h10.11c.8 0 1.45-.64 1.45-1.44V1.88c0-.8-.65-1.45-1.45-1.45zM6.73 15.9a.62.62 0 1 1 0-1.24.62.62 0 0 1 0 1.24zm5.23-2.18c0 .17-.14.32-.31.32H1.81a.32.32 0 0 1-.32-.32V1.98c0-.17.14-.31.32-.31h9.84c.17 0 .31.14.31.31v11.73z"></path>
              </SvgIcon>
            </IconButton>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Mobile" aria-label="mobile">
            <IconButton disableRipple onClick={() => handleDevice("mobile")}>
              <SvgIcon
                width="10"
                height="17"
                viewBox="0 0 10 17"
                fill="rgba(117, 117, 117, 1)"
              >
                <path d="M8.12.43H1.4C.75.43.23.96.23 1.6v13.67c0 .64.52 1.16 1.16 1.16h6.73c.65 0 1.17-.52 1.17-1.16V1.6C9.29.96 8.77.43 8.12.43zm-5.02.71h3.32c.09 0 .15.13.15.28 0 .16-.06.28-.15.28H3.1c-.09 0-.15-.12-.15-.28 0-.15.06-.28.15-.28zm1.66 14.14a.74.74 0 1 1 0-1.49.74.74 0 0 1 0 1.5zm3.66-2.54H1.1V2.4h7.32v10.34z"></path>
              </SvgIcon>
            </IconButton>
          </Tooltip>
        </div>
      </Grid>
      <Grid item xs={3} className={classes.sideBar}>
        <StyleManager />
      </Grid>
      <Grid item xs={9}>
        <ResizableBox
          resizeHandles={["ne", "e", "se"]}
          width={device.width}
          minConstraints={[479, 479]}
          maxConstraints={[1000, 1000]}
          className={classes.box}
        >
          <div
            className={classes.adoriPanel}
            style={{
              background: get(styles, "homePage.backgroundColor"),
            }}
          >
            <div className={classes.header}>
              <div className={classes.logo}>
                {logo.type === "text" ? (
                  <Typography
                    style={{
                      color: get(logo, "color"),
                    }}
                    variant="h5"
                    component="h5"
                    gutterBottom
                  >
                    Listen Boise
                  </Typography>
                ) : (
                  <img src={logo.src} alt="logoImg" width={47} height={35} />
                )}
              </div>
            </div>
            <Grid container spacing={3} className={classes.paddingDiv}>
              <Grid item xs={3}>
                <img
                  className={classes.img}
                  src="https://cdn.images.adorilabs.com/v1/ad55c498-2ab8-4ee0-a1e6-090f170d18b7.jpeg"
                  alt="episodeImage"
                />
              </Grid>
              <Grid item xs={9}>
                <Editor
                  className={classes.editable}
                  text={heading}
                  onChange={setHeading}
                  options={{
                    toolbar: {
                      buttons: [
                        "bold",
                        "italic",
                        "underline",
                        "anchor",
                        "h2",
                        "h3",
                      ],
                    },
                  }}
                />
              </Grid>
            </Grid>
            <div className={classes.margin16} />
            <Grid container className={classes.paddingDiv}>
              <Editor
                className={classes.editable}
                text={description}
                onChange={setDescription}
                options={{
                  toolbar: {
                    buttons: [
                      "bold",
                      "italic",
                      "underline",
                      "anchor",
                      "h2",
                      "h3",
                    ],
                  },
                }}
              />
            </Grid>
            <div className={classes.margin16} />
            <Episodes accentColor={get(styles, "homePage.accentColor")} />
          </div>
        </ResizableBox>
      </Grid>
    </Grid>
  );
}

export default memo(EditorPane);
