import React, { memo, useState, useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import { get } from "lodash";

// common components
import Editor from "react-medium-editor";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
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
    width: "75%",
    minHeight: "50p",
    border: "1px dashed #aaa",
    padding: "5px",
    resize: "none",
  },
  formControl: {
    minWidth: 120,
  },
  margin8: {
    marginBottom: "8px",
  },
});

function EditorPane() {
  const classes = useStyles();
  const { styles } = useContext(StyleContext);
  const [page, setPage] = useState("homePage");
  const [heading, setHeading] = useState("What's in a title anyway?");
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
        <Paper
          id="adoriPanel"
          style={{
            background: get(styles, "homePage.backgroundColor"),
          }}
        >
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
          <div className={classes.margin8} />

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
        </Paper>
      </Grid>
    </Grid>
  );
}

export default memo(EditorPane);
