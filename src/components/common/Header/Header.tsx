/**
 * Copyright (c) 2019 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import React, { useEffect } from "react";
import { RouterState } from "connected-react-router";
import { useTranslation } from "react-i18next";
import HvHeader from "@hv/uikit-react-core/dist/Header";
import HvUserIcon from "@hv/uikit-react-icons/dist/Generic/User";
import HitachiLogo from "assets/hitachi-logo.svg";
import { ViewsState } from "typings/views";
import { HeaderProps } from "./index";

const getSelectedPath = (router: RouterState, views: ViewsState) => {
  const { pathname } = router.location;
  const navIndex = views.data.findIndex(elem => pathname === elem.path);

  return [navIndex, -1];
};

const Header: React.FC<HeaderProps> = ({
  router,
  auth,
  views,
  getViews,
}: HeaderProps) => {
  const { t } = useTranslation();
  const { isAuthed } = auth;
  const hasViews = views.data.length;
  const selectedPath = getSelectedPath(router, views);
  
  useEffect(() => {
    getViews();
  }, [getViews]);

  return hasViews ? (
    <HvHeader
      label={t("components.layout.header.appName")}
      companyLogo={<HitachiLogo width="100px" />}
      actionValues={[
        {
          label: "User",
          horizontalItemAction: <HvUserIcon />,
        },
      ]}
      {...(isAuthed && { navigationStructure: views })} // TODO -> navigation should handle undefined values ??
      useRouter
      selected={selectedPath}
    />
  ) : (
    <></>
  );
};

export default Header;
