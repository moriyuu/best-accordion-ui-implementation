import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";

const items = [
  {
    id: 1,
    head: "Accordion Title 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 2,
    head: "Accordion Title 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 3,
    head: "Accordion Title 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 4,
    head: "Accordion Title 4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];

const Wrapper = styled.div`
  margin-top: 20px;
  background: #fff;
  border-radius: 6px;
  border: 4px solid #ccc;

  > .head {
    display: block;
    color: #326fa3;
    padding: 16px;
    font-weight: bold;
    cursor: pointer;
  }

  > .content {
    background: #cecece;
    color: #444;
    line-height: 0;
    opacity: 0;
    padding: 0 20px;
    transition: all 0.25s ease-out;
  }

  > input[type="checkbox"] {
    display: none;

    &:checked ~ .content {
      line-height: 1.5;
      opacity: 1;
      padding: 20px;
    }
  }
`;

type Item = { id: number; head: string; content: string };

const Accordion = (props: Item) => {
  return (
    <Wrapper>
      <input type="checkbox" id={"checkbox_" + props.id} />
      <label className="head" htmlFor={"checkbox_" + props.id}>
        {props.head}
      </label>
      <div className="content">{props.content}</div>
    </Wrapper>
  );
};

class App extends React.Component {
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

        {items.map(item => (
          <Accordion key={item.id} {...item} />
        ))}

        <pre
          dangerouslySetInnerHTML={{
            __html: `
            const Wrapper = styled.div\`
                margin-top: 20px;
                background: #fff;
                border-radius: 6px;
                border: 4px solid #ccc;
            
                > .head {
                    display: block;
                    color: #326fa3;
                    padding: 16px;
                    font-weight: bold;
                    cursor: pointer;
                }
            
                > .content {
                    background: #cecece;
                    color: #444;
                    line-height: 0;
                    opacity: 0;
                    padding: 0 20px;
                    transition: all 0.2s ease-out;
                }
            
                > input[type="checkbox"] {
                    display: none;
                
                    &:checked ~ .content {
                        line-height: 1.5;
                        opacity: 1;
                        padding: 20px;
                    }
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
