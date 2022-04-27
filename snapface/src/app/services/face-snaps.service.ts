import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({ //Déclarer cette classe comme un service
    providedIn : 'root' //Ce service est enregistré à la racine de l'app
}) 
export class FaceSnapService{
    faceSnaps: FaceSnap[] = [
        {
          id: 1,
          title: 'Bibliographie',
          description: 'Tous savoir sur la vie de ce docteur',
          imageUrl: "https://i.postimg.cc/prhsS0CK/tribute.png",
          createdDate: new Date(),
          snaps: 140,
          location: 'Paris'
        },
        {
          id: 2,
          title: 'Documentation technique',
          description: 'Vous voulez en savoir plus c\'est pas ici',
          imageUrl: "https://i.postimg.cc/Y0VpFftd/page-technique.png",
          createdDate: new Date(),
          snaps: 6,
          location: 'la montagne'
        },
        {
          id: 3,
          title: 'Loader',
          description: 'Ce magnifique loader pour votre page de chargement',
          imageUrl: "https://i.postimg.cc/fLqZ4jSM/loader.png",
          createdDate: new Date(),
          snaps: 0
        },
        {
          id: 4,
          title: 'Bibliographie',
          description: 'Tous savoir sur la vie de ce docteur',
          imageUrl: "https://i.postimg.cc/prhsS0CK/tribute.png",
          createdDate: new Date(),
          snaps: 0,
          location: 'Paris'
        },
        {
          id: 5,
          title: 'Documentation technique',
          description: 'Vous voulez en savoir plus c\'est pas ici',
          imageUrl: "https://i.postimg.cc/Y0VpFftd/page-technique.png",
          createdDate: new Date(),
          snaps: 6,
          location: 'la montagne'
        },
        {
          id: 6,
          title: 'Loader',
          description: 'Ce magnifique loader pour votre page de chargement',
          imageUrl: "https://i.postimg.cc/fLqZ4jSM/loader.png",
          createdDate: new Date(),
          snaps: 0
        }
      ];

      getAllFaceSnaps(): FaceSnap[]{
          return this.faceSnaps;
      }

      getFaceSnapById(faceSnapId: number): FaceSnap{
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if(!faceSnap){
            throw new Error('FaceSnap not found !');
        }else{
            return faceSnap;
        }
      }

      snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
          const faceSnap = this.getFaceSnapById(faceSnapId);
          snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
      }

      addFaceSnap(formValue: {title: string, description: string, imageUrl: string, location?: string}):void{
        const faceSnap: FaceSnap = {
          ...formValue,
          createdDate: new Date(),
          snaps: 0,
          id: this.faceSnaps[this.faceSnaps.length-1].id +1
        };
        this.faceSnaps.push(faceSnap);
      }

}