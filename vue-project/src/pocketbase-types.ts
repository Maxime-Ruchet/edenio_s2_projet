/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Evenement = "evenement",
	Glossaire = "glossaire",
	Produits = "produits",
	Recettes = "recettes",
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

export type ProduitsRecord = {
	image?: string
	titre?: string
	prix?: number
}

export type RecettesRecord = {
	field?: string
	titre?: string
	heure?: string
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type EvenementResponse = Required<EvenementRecord> & BaseSystemFields
export type GlossaireResponse = Required<GlossaireRecord> & BaseSystemFields
export type ProduitsResponse = Required<ProduitsRecord> & BaseSystemFields
export type RecettesResponse = Required<RecettesRecord> & BaseSystemFields
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	evenement: EvenementRecord
	glossaire: GlossaireRecord
	produits: ProduitsRecord
	recettes: RecettesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	evenement: EvenementResponse
	glossaire: GlossaireResponse
	produits: ProduitsResponse
	recettes: RecettesResponse
	users: UsersResponse
}