import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { ThemeSwitcher, LogOut } from "@hitachivantara/uikit-react-icons";
import {
  HvVerticalNavigation,
  HvVerticalNavigationTree,
  HvVerticalNavigationActions,
  HvVerticalNavigationAction,
} from "@hitachivantara/uikit-react-core";

import { AuthContext } from "lib/context/AuthContext";
import { ThemeContext } from "lib/context/ThemeContext";
import { NavigationContext } from "lib/context/NavigationContext";
import useStyles from "./styles";

const VerticalNavigation: React.FC = () => {
  const theme = useTheme();
  const history = useHistory();

  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const { isAuthed, logout } = useContext(AuthContext);
  const { toggleTheme } = useContext(ThemeContext);
  const { navigation, activePath, isVerticalOpen, setVerticalOpen } =
    useContext(NavigationContext);

  const handleChange = (
    event: React.SyntheticEvent,
    selection: NavigationData
  ) => {
    if (selection.path) {
      history.push(selection.path);
      setVerticalOpen(false);
    }
  };

  const classes = useStyles();

  return isAuthed && isVerticalOpen && !isMdUp ? (
    <div className={classes.container}>
      <HvVerticalNavigation classes={{ root: classes.root }}>
        <HvVerticalNavigationTree
          data={navigation || []}
          selected={activePath?.id || ""}
          onChange={handleChange}
        />

        <HvVerticalNavigationActions>
          <HvVerticalNavigationAction
            label="Toggle Theme"
            icon={<ThemeSwitcher />}
            onClick={() => toggleTheme()}
          />
          <HvVerticalNavigationAction
            label="Logout"
            icon={<LogOut />}
            onClick={logout}
          />
        </HvVerticalNavigationActions>
      </HvVerticalNavigation>
    </div>
  ) : null;
};

export default VerticalNavigation;
