import React, { memo, useRef, useState, useContext } from "react";
import { makeStyles } from "@material-ui/styles";

import { get } from "lodash";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ContentEditable from "react-contenteditable";

// context
import { StyleContext } from "../../context/StyleContext";
import StyleManager from "../LeftPanel/StyleManager";

const useStyles = makeStyles({
  editable: {
    marginLeft: "10%",
    width: "75%",
    minHeight: "50p",
    border: "1px dashed #aaa",
    padding: "5px",
    resize: "none",
  },
  formControl: {
    minWidth: 120,
  },
});

function EditorPane() {
  const classes = useStyles();
  const { styles } = useContext(StyleContext);
  const text = useRef("");
  const [page, setPage] = useState("homePage");

  const handleChange = (evt) => {
    text.current = evt.target.value;
  };

  const handlePageChange = (event) => {
    setPage(event.target.value);
  };

  const handleBlur = () => {
    console.log(text.current);
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
          id="adoriPanel"
          style={{
            background: get(styles, "homePage.backgroundColor"),
          }}
        >
          <ContentEditable
            html={text.current}
            onBlur={handleBlur}
            onChange={handleChange}
            tagName="p"
            className={classes.editable}
            placeholder={"Here is the heading"}
          />

          <ContentEditable
            html={text.current}
            onBlur={handleBlur}
            onChange={handleChange}
            tagName="p"
            className={classes.editable}
            placeholder={"Here is the description"}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default memo(EditorPane);
