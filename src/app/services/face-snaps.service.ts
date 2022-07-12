import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title:'Archibald',
      description: 'Mon meilleur ami depuis tout petit',
      imageUrl: 'https://images.unsplash.com/photo-1588090644556-14707d0e886a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVkZHklMjBiZWFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
      createdDate : new Date(),
      snaps: 0,
      location: 'Paris'
    },
    {
      id: 2,
      title: 'Luigi',
      description: 'Une super peluche pour les amoureux de jeux video',
      imageUrl: 'https://images.unsplash.com/photo-1599409636295-e3cf3538f212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bHVpZ2l8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      createdDate: new Date(),
      snaps: 0,
      location: 'La montagne'
    },
    {
      id: 3,
      title: 'Tintin',
      description:'Pour les petits aventuriers',
      imageUrl: 'https://images.unsplash.com/photo-1565993545587-f0a82a0d09b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGludGlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      createdDate:new Date(),
      snaps: 0,
    }
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
