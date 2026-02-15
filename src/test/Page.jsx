import { useParams } from "react-router-dom";

function HelloPage() {

    let email = useParams("email");

    return (
        <>
        Cześć, {email}!
        </>
    )
}
export default HelloPage;