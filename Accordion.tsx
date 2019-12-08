import React, { useState } from "react";
import styled from "styled-components";

export type Item = {
  id: number | string;
  head: React.ReactNode;
  content: React.ReactNode;
  open?: boolean;
};

type Props = {
  setOpen?(open: boolean): void;
} & Item;

export const Accordion: React.FC<Props> = props => {
  const [open, setOpen] =
    props.open != null && props.setOpen != null
      ? [props.open, props.setOpen]
      : useState(false);

  return (
    <Container open={open}>
      <div className="head" onClick={() => setOpen(!open)}>
        {props.head}
      </div>
      <div className="content">{props.content}</div>
    </Container>
  );
};

const Container = styled.div<{ open: boolean }>`
  margin-top: 20px;
  background: #fff;
  border-radius: 6px;
  border: 4px solid #ccc;

  > .head {
    color: #326fa3;
    padding: 16px;
    font-weight: bold;
    cursor: pointer;
  }

  > .content {
    background: #cecece;
    color: #444;
    line-height: ${props => (props.open ? 1.5 : 0)};
    opacity: ${props => (props.open ? 1 : 0)};
    padding: ${props => (props.open ? "20px" : "0 20px !important")};
    transition: all 0.2s ease-out;
  }
`;
