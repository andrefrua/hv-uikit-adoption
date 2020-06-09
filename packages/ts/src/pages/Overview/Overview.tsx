import React from "react";
import { useTranslation } from "react-i18next";
import { HvGrid, HvTypography } from "@hv/uikit-react-core";
import withLayout from "lib/hocs/withLayout";
import { OverviewProps } from "./index";

const Overview: React.FC<OverviewProps> = () => {
  const { t } = useTranslation();

  return (
    <HvGrid container alignItems="center">
      <HvGrid item xs={4} md={8}>
        <HvTypography variant="xlTitle">
          {t("pages.overview.title")}
        </HvTypography>
      </HvGrid>
    </HvGrid>
  );
};

export default withLayout(Overview);
