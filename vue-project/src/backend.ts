import PocketBase from 'pocketbase' ;
export const pb = new PocketBase('http://127.0.0.1:8090') ;
import type { EvenementResponse } from './pocketbase-types';
import type { GlossaireResponse } from './pocketbase-types';

export async function Allevenement() {
  const records = await pb.collection('evenement').getFullList<EvenementResponse>()
  return records
}


export async function oneID(id: string) {
    const oneRecord = await pb.collection('evenement').getOne<EvenementResponse>(id,);
    return oneRecord;
}

export async function Allglossaire() {
  const records = await pb.collection('glossaire').getFullList<GlossaireResponse>()
  return records
}

export async function oneIDglossaire(id: string) {
  const oneRecord = await pb.collection('glossaire').getOne<GlossaireResponse>(id,);
  return oneRecord;
}
