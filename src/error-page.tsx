import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error:any = useRouteError();
    console.error(error);

    return (
        <div>
            <h1>Hov!</h1>
            <p>Det ligner vi er kommet på afveje.</p>
            <p>
                <i>{error.statusText}</i>
            </p>
        </div>
    );
}
