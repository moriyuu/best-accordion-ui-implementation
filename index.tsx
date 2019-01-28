import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";

const Wrapper = styled.div<{ open: boolean }>`
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

type Item = { id: number; head: string; content: string; open: boolean };

const Accordion = (props: Item & { toggle(item: Item["id"]): void }) => {
  return (
    <Wrapper open={props.open}>
      <div className="head" onClick={() => props.toggle(props.id)}>
        {props.head}
      </div>
      <div className="content">{props.content}</div>
    </Wrapper>
  );
};

class App extends React.Component<{}, { items: Item[] }> {
  state = {
    items: [
      {
        id: 1,
        head: "Accordion Title 1",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        open: false
      },
      {
        id: 2,
        head: "Accordion Title 2",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        open: false
      },
      {
        id: 3,
        head: "Accordion Title 3",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        open: false
      },
      {
        id: 4,
        head: "Accordion Title 4",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        open: false
      }
    ]
  };

  toggle = (id: Item["id"]) => {
    this.setState(_state => ({
      items: _state.items.map(item =>
        item.id === id ? { ...item, open: !item.open } : item
      )
    }));
  };

  render() {
    return (
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1>
          best-accordion-ui-implementation{" "}
          <span
            style={{
              display: "inline-block",
              fontSize: "80%",
              transform: "rotate(10deg)"
            }}
          >
            ?
          </span>
        </h1>
        {this.state.items.map(item => (
          <Accordion key={item.id} {...item} toggle={this.toggle} />
        ))}
        <pre
          dangerouslySetInnerHTML={{
            __html: `
            const Wrapper = styled.div<{ open: boolean }>\`
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
                    line-height: \${props => (props.open ? 1.5 : 0)};
                    opacity: \${props => (props.open ? 1 : 0)};
                    padding: \${props => props.open ? "20px" : "0 20px !important"};
                    transition: all 0.2s ease-out;
                }
            \`;
          `
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
