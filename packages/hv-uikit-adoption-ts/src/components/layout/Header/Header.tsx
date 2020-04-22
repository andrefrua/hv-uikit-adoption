import React, { useEffect, SyntheticEvent } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import HvHeader, {
  HvHeaderBrand,
  HvHeaderActions,
  HvHeaderNavigation
} from "@hv/uikit-react-core/dist/Header";
import HvButton from "@hv/uikit-react-core/dist/Button";
import { User } from "@hv/uikit-react-icons/dist";
import HitachiLogo from "assets/hitachi-logo.svg";
import { getSelection } from "lib/utils/path";
import { Page } from "typings/pages";
import { HeaderProps } from "./index";

const Header: React.FC<HeaderProps> = ({
  router,
  auth,
  pages,
  getPages,
  logout
}: HeaderProps) => {
  const { t } = useTranslation();
  const history = useHistory();
  const { isAuthed } = auth;
  const { pathname } = router.location;

  const selection = getSelection(pages.data, pathname);

  useEffect(() => {
    getPages();
  }, [getPages]);

  const handleChange = (event: SyntheticEvent, selectedPage: Page): void => {
    if (selectedPage.path) history.push(selectedPage.path);
  };

  return pages.data ? (
    <HvHeader position="relative">
      <HvHeaderBrand
        logo={<HitachiLogo width="70px" height="25px" />}
        name={t("components.layout.header.appName")}
      />
      {isAuthed && (
        <HvHeaderNavigation
          data={pages.data}
          selected={selection && selection.id}
          onClick={handleChange}
        />
      )}
      {isAuthed && (
        <HvHeaderActions>
          <HvButton
            category="icon"
            onClick={() => logout()}
            aria-label="Open User panel">
            <User
              boxStyles={{
                width: 32,
                height: 32
              }}
            />
          </HvButton>
        </HvHeaderActions>
      )}
    </HvHeader>
  ) : (
    <></>
  );
};

export default Header;