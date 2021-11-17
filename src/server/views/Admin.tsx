import * as React from 'react';
import { useParams } from 'react-router-dom';
// import { TiBrush, TiAt } from "react-icons/ti";

const Admin: React.FC<AdminProps> = props => {

    const { chirpid } = useParams();

    return (
        <main className="row m-2 justify-content-center">
            <div className="col-md-6">
                <h1 className="text-center">Welcome to Chirpr!</h1>
            </div>
            <div>
                <h1>Details View {chirpid}</h1>
            </div>
        </main>

    )
}

interface AdminProps { }

export default Admin;