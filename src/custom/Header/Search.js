import React from "react";

import NativeSelect from "@material-ui/core/NativeSelect";

const Search = () => {
  return (
    // <FormControl>
    <NativeSelect
      // value={categories.name}
      // onChange={handleChange}
      name="categories"
      // className={classes.selectEmpty}
      inputProps={{ "aria-label": "age" }}
    >
      <option value="All">All</option>
      <option value="alexa">Alexa</option>
      <option value="baby">Bba</option>
      <option value="books">Books</option>
    </NativeSelect>
    // </FormControl>
  );
};

export { Search };
