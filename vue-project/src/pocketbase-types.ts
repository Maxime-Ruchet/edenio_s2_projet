/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Evenement = "evenement",
	Glossaire = "glossaire",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type EvenementRecord = {
	image?: string
	description?: HTMLString
	heure?: HTMLString
}

export type GlossaireRecord = {
	titre?: string
	description?: HTMLString
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type EvenementResponse = Required<EvenementRecord> & BaseSystemFields
export type GlossaireResponse = Required<GlossaireRecord> & BaseSystemFields
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	evenement: EvenementRecord
	glossaire: GlossaireRecord
	users: UsersRecord
}

export type CollectionResponses = {
	evenement: EvenementResponse
	glossaire: GlossaireResponse
	users: UsersResponse
}