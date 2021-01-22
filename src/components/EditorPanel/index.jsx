import React, { memo, useState, useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import { get } from "lodash";

// common components
import Editor from "react-medium-editor";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import StyleManager from "../LeftPanel/StyleManager";

// context
import { StyleContext } from "../../context/StyleContext";

// import styles
import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/default.css";

const useStyles = makeStyles({
  editable: {
    minHeight: "50px",
    border: "1px dashed #aaa",
    padding: "5px",
    resize: "none",
  },
  formControl: {
    minWidth: 120,
  },
  margin16: {
    marginBottom: "16px",
  },
  header: {
    minHeight: "56px",
    position: "relative",
    display: "flex",
    width: "100%",
    boxSizing: "border-box",
    justifyContent: "flex-start",
    alignItems: "center",
    boxShadow: "inset 0 -1px 0 rgba(230, 230, 230, 1)",
    marginBottom: "8px",
  },
  adoriPanel: {
    width: "100%",
    padding: "16px",
  },
  img: {
    maxWidth: "100%",
  },
});

function EditorPane() {
  const classes = useStyles();
  const { styles } = useContext(StyleContext);
  const [page, setPage] = useState("homePage");
  const [heading, setHeading] = useState("Rick & Carly In The Morning");
  const [description, setDescription] = useState(
    "It's not very often that two people dating air it all out LIVE on the radio every morning.  Rick & Carly share WAY more than they should, leaving you with a mouth wide open, eyes bulging, holy moly kinda feeling every morning."
  );

  const handlePageChange = (event) => {
    setPage(event.target.value);
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
      </Grid>
      <Grid item xs={3}>
        <StyleManager />
      </Grid>
      <Grid item xs={9}>
        <div
          className={classes.adoriPanel}
          style={{
            background: get(styles, "homePage.backgroundColor"),
          }}
        >
          <div className={classes.header}>
            <Typography variant="h5" component="h5" gutterBottom>
              Listen Boise
            </Typography>
          </div>
          <Grid container spacing={3}>
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
                      "quote",
                    ],
                  },
                }}
              />
            </Grid>
          </Grid>
          <div className={classes.margin16} />

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
                  "quote",
                ],
              },
            }}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default memo(EditorPane);
