import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import { useReducer } from "react";

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "adicionar_numero_2":
      return { ...state, number: state.number + 2 };
    case "adicionar7":
      return { ...state, number: state.number * 7};
    case "numberdiv25":
      return { ...state, number: state.number / 25};
    case "numberInt":
      return { ...state, number: parseInt(state.number)};
    case "numberaddn":
      return { ...state, number: state.number + action.payload};
    case "login":
      return { ...state, user: { name: action.payload } };
    default:
      return state;
  }
}
const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">sem usuário</span>
        )}

        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => dispatch({ type: "login", payload: "maria" })}
          >
            login
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "adicionar_numero_2" })}
          >
            +2
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "adicionar7" })}
          >
            *7
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberdiv25" })}
          >
            / 25
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberInt" })}
          >
            int
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberaddn" , payload: -9})}
          >
            -9
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberaddn" , payload: +11})}
          >
            +11
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
