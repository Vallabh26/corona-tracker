import React, { useState, useEffect } from "react";
import {
  NativeSelect,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@material-ui/core";

import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";
import cx from "classnames";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, []);

  return (
    <FormControl className={cx(styles.formControl)}>
      <InputLabel id="label">Country</InputLabel>
      <Select
        labelId="label"
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <MenuItem value="">Global</MenuItem>
        {fetchedCountries.map((country, i) => (
          <MenuItem key={i} value={country}>
            {country}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CountryPicker;
