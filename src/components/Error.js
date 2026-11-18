import { useRouteError } from "react-router";

const Error = () => {
    const error = useRouteError();
    return (
        <div className="error">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p><i>{error?.statusText || error?.message || "Unknown error"}</i></p>
        </div>
    );
};

export default Error;
