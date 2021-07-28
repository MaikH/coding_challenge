import { h } from "react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import Enzyme from "enzyme";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import TextNote from "../../TextNote/TextNote";
import Workspace from "../../Workspace/Workspace";
import { createClientStore } from "../../../index";

import notesReducer from "../../../store/notes";

Enzyme.configure({ adapter: new Adapter() });

let container = null;

describe("Workspace Textnotes", () => {
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("should render <Workspace /> with given amount of Textnotes", () => {
    const testReducer = combineReducers({ notes: notesReducer });
    const mockStore = createClientStore(testReducer);

    const notes = [
      {
        backgroundColor: "green",
        color: "blue",
        content:
          "In the interest of efficiency I only check my email for that on a Friday",
        id: "note1",
        size: 110,
        type: "text",
        x: 593,
        y: 178,
      },
      {
        backgroundColor: "green",
        color: "blue",
        content:
          "In the interest of efficiency I only check my email for that on a Friday",
        id: "note1",
        size: 110,
        type: "text",
        x: 593,
        y: 178,
      },
    ];

    act(() => {
      render(
        <Provider store={mockStore}>
          <Workspace notes={notes} />
        </Provider>,
        container
      );
    });

    expect(container.find(TextNote)).toHaveLength(2);
  });
});
