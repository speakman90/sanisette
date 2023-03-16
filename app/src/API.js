import React from "react";

function App() {
    const queryParameters = new URLSearchParams(window.location.search);
    const request = queryParameters.get("request");
}

ReactDOM.render(
    <App />,
    document
);