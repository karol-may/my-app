import { useParams } from "react-router-dom";

function HelloPage() {

    const { email } = useParams();
    return (
        <>
        Cześć, {email}!
        </>
    )
}
export default HelloPage;