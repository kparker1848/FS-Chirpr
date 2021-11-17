import * as React from 'react';
import ChirpCard from '../../client/Components/ChirpCard';
import type { IChirp } from '../utils/types';


const Home: React.FC<HomeProps> = props => {

    const [chirps, setChirps] = React.useState<IChirp[]>([]);

    React.useEffect(() => {
        (async () => {
            const res = await fetch('/api/chirps');
            if (res.ok) {
                const chirps = await res.json();
                setChirps(chirps);
            } else {
                console.log("error");
                
            }
        })()
    }, []);

    return (
        <main className="container">
            <section className="row m-2 justify-content-center">
                <div className="col-12 mb-5">
                    <h1 className="text-center">Welcome to Chirpr!</h1>
                </div>
                <div className="shadow p-3 mb-5 bg-body rounded col-5">
                    {chirps.map(chirp => (
                        <ChirpCard key = {`chirp-card-${chirp.id}`} chirp={chirp}/>
                    ))}
                </div>
            </section>
        </main>

    )
}

interface HomeProps { }

export default Home;