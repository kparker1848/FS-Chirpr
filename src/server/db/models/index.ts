//models will create typescript interfaces to plug into queries

export interface TChirps {
	id?: number;
	userid?: number;
	content?: string;
	created_at?: Date;
}

export interface TUsers {
	id?: number;
	name?: string;
	email?: string;
	password?: string;
	created_at?: Date;
}

export interface TMentions {
	chirpid?: number;
	userid?: number;
}