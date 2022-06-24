import {
  Avatar,
  Button,
  IconButton,
  InputBase,
  Paper,
  Stack,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../styles/Header.module.css";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <Stack direction="row" spacing={2} className={styles.leftHeaderStack}>
        <Paper elevation={3} className={styles.search}>
          <InputBase
            placeholder="Search for address..."
            sx={{ width: "92%" }}
          />
          <IconButton disableRipple sx={{ padding: "0px" }} color="primary">
            <SearchIcon />
          </IconButton>
        </Paper>
        <Button
          sx={{
            backgroundColor: "white",
            color: "#002d74",
          }}
        >
          Check In
        </Button>
      </Stack>
      <Stack direction="row" spacing={2} className={styles.rightHeaderStack}>
        <Avatar>NF</Avatar>
      </Stack>
    </>
  );
};

Header.propTypes = {};

export default Header;
