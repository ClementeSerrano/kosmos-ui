import React from "react";
import { createPortal } from "react-dom";
import { useTransition } from "react-spring";

import Button from "../../components/Button";
import CloseIcon from "../../icons/Close";
import theme from "../../theme";

import { IProps } from "./types";
import {
  Backdrop,
  Card,
  ContentContainer,
  CloseIconContainer,
  ButtonsContainer,
} from "./styles";

function Dialog({
  isOpen,
  header,
  content,
  confirmAction,
  declineAction,
  cardStyle,
}: IProps) {
  const spring = useTransition(isOpen, null, {
    delay: 2,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return createPortal(
    <>
      {spring.map(({ item, key, props }) => {
        return item ? (
          <Backdrop key={key} style={props} aria-modal="true" role="dialog">
            <Card key={key} style={{ ...props, ...cardStyle }}>
              <CloseIconContainer
                onClick={
                  //@ts-ignore
                  !React.isValidElement(declineAction) && declineAction.callback
                }
              >
                <CloseIcon
                  color={theme.colorsPalette.gray.light}
                  height="15px"
                />
              </CloseIconContainer>

              {typeof header === "string" ? <h4>{header}</h4> : header}

              {typeof content === "string" ? (
                <ContentContainer>
                  <p>{content}</p>
                </ContentContainer>
              ) : (
                content
              )}

              <ButtonsContainer>
                {React.isValidElement(declineAction) ? (
                  declineAction
                ) : (
                  <Button
                    //@ts-ignore
                    onClick={declineAction.callback}
                    //@ts-ignore
                    text={declineAction.message}
                    type={confirmAction ? "secondary" : "primary"}
                    style={{ marginRight: confirmAction ? "15px" : "none" }}
                  />
                )}

                {confirmAction &&
                  (React.isValidElement(confirmAction) ? (
                    confirmAction
                  ) : (
                    <Button
                      //@ts-ignore
                      onClick={confirmAction.callback}
                      //@ts-ignore
                      text={confirmAction.message}
                      type="primary"
                    />
                  ))}
              </ButtonsContainer>
            </Card>
          </Backdrop>
        ) : null;
      })}
    </>,
    document.body
  );
}

export default Dialog;
