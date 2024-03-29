import React, { Suspense } from "react";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import { HvContainer } from "@hitachivantara/uikit-react-core";

import Loading, { LoadingProps } from "components/layout/Loading";
import { isTopLevelPage } from "lib/utils/navigation";
import useStyles from "./styles";

interface ContainerProps {
  fullScreen?: boolean;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  children: NonNullable<React.ReactNode>;
  className?: string;
  loadingProps?: LoadingProps;
}

const Container: React.FC<ContainerProps> = ({
  fullScreen = false,
  maxWidth = false,
  children,
  className,
  loadingProps,
}) => {
  const { pathname } = useLocation();
  const hasSecondLevel = !isTopLevelPage(pathname);

  const classes = useStyles();

  return (
    <div className={clsx(className, classes.content)}>
      <Suspense fallback={<Loading {...loadingProps} />}>
        <HvContainer
          maxWidth={maxWidth}
          className={clsx(classes.container, {
            [classes.fullHeight]: fullScreen,
            [classes.hasSecondLevel]: hasSecondLevel,
          })}
          {...{ component: "main" }}
        >
          {children}
        </HvContainer>
      </Suspense>
    </div>
  );
};

export default Container;
