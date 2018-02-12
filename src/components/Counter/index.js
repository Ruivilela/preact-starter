import { Connect } from "redux-zero/preact";

import actions from "../../state/counter/actions";

const mapToProps = ({ counter }) => ({ counter });

export default () => (
  <Connect mapToProps={mapToProps} actions={actions}>
    {({ counter, increment, decrement, getPayload }) => (
      <div>
        <h1>{counter.count} - {counter.loading.toString()} {} </h1>

        <p>getPayload response:</p>
        <pre>{ JSON.stringify(counter.payload, null, 2) }</pre>

        <div>
          <button onClick={decrement}>decrement</button>
          <button onClick={increment}>increment</button>
        </div>
      </div>
    )}
  </Connect>
);
