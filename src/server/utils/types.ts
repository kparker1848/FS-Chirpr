export type Error = {
    status?: number;
    message?: string;
}

export interface IChirp {

    "name": string,
    "id": number,
    "userid": number,
    "content": string,
    "location": string,
    "_created": Date

}