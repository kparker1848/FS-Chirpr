import * as React from 'react';
import type { IChirp } from '../../server/utils/types';

const ChirpCard: React.FC<ChirpCardProps> = props => {

    return (
        <div className="card">
        <div className="card-body">
            <p className="card-title fw-bold">{props.chirp.name}</p>
            <p className="card-text">{props.chirp.content}</p>
            <p className="card-text">{props.chirp._created}</p>
        </div>
    </div>
    )
}

interface ChirpCardProps {
    chirp: IChirp
}

export default ChirpCard;