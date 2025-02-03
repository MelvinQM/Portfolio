import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="d-flex d-flex-col gap-2">
            404 Not Found
            <Link to="/">Home</Link>
        </div>
    )
}