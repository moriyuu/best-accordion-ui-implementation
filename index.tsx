import React from "react";
import ReactDOM from "react-dom";
import { Accordion, Item } from "./Accordion";

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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        // open: false
      },
      {
        id: 4,
        head: "Accordion Title 4",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        // open: false
      }
    ]
  };

  setOpen = (id: string | number, open: boolean) => {
    this.setState(_state => ({
      items: _state.items.map(item =>
        item.id === id ? { ...item, open } : item
      )
    }));
  };

  render() {
    return (
      <div style={{ maxWidth: "800px", margin: "0 auto 40px" }}>
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
        <p>
          <a href="https://github.com/moriyuu/best-accordion-ui-implementation">
            github.com/moriyuu/best-accordion-ui-implementation
          </a>
        </p>

        {this.state.items.map(item => (
          <Accordion
            key={item.id}
            {...item}
            setOpen={open => this.setOpen(item.id, open)}
          />
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
