import { firestore } from 'firebase-admin';
import * as admin from 'firebase-admin';
import facilityUserConverter from '../lib/converter';
import { TFacilityUser, FacilityUser } from '../types/user.model';
import dayjs from 'dayjs';
import {
  CollectionReference,
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  QuerySnapshot,
} from 'firebase-admin/firestore';

export class UserService {
  DB: firestore.Firestore;
  constructor() {
    this.DB = admin.firestore();
  }

  async getFamilyUser(): Promise<{
    name: string;
    members: DocumentData[];
  }> {
    // console.log('welcome to our family');
    const okudaFamilyRef: DocumentReference = this.DB.collection('family').doc(
      'WbtHwgpNRA4j2fbfgpUO',
    );
    // console.log(okudaFamilyRef);
    const okudaFamilyDoc: DocumentSnapshot = await okudaFamilyRef.get();
    // console.log(okudaFamilyDoc);
    // console.log(okudaFamilyDoc.data());
    if (!okudaFamilyDoc.exists) {
      throw new Error('家族が存在しません');
    }
    const okudaFamilyCollection: CollectionReference =
      okudaFamilyRef.collection('member');
    // console.log(okudaFamilyCollection);
    const okudaFamilyCollectionSnapshot: QuerySnapshot =
      await okudaFamilyCollection.get();
    console.log(okudaFamilyCollectionSnapshot.docs);
    const okudaFamily: DocumentData = okudaFamilyDoc.data();
    // console.log(okudaFamily);
    return {
      name: okudaFamily.name,
      members: okudaFamilyCollectionSnapshot.docs.map((doc) => doc.data()),
    };
  }

  async getTest1User(): Promise<DocumentData> {
    console.log('getUser');
    const userRef: DocumentReference = this.DB.collection('test1').doc('user');
    console.log(userRef);
    const userDoc: DocumentSnapshot = await userRef.get();
    console.log(userDoc);
    if (!userDoc.exists) {
      throw new Error('ユーザーが存在しません');
    }
    const ret: DocumentData = userDoc.data();
    console.log(ret.name);
    return ret;
  }

  async findAll(facilityId: string) {
    console.log('facilityId', facilityId);
    const querySnapshot = await this.DB.collection('facilities')
      .doc(facilityId)
      .collection('facilityUsers')
      .withConverter(facilityUserConverter)
      .get();

    console.log(querySnapshot);
    return await Promise.all(
      querySnapshot.docs.map((documentSnapshot) => {
        const record = documentSnapshot.data() as TFacilityUser;
        console.log(this.convertFacilityUserToDto(record));
        return this.convertFacilityUserToDto(record);
      }),
    );
  }

  private async convertFacilityUserToDto(
    record: TFacilityUser,
    details = false,
  ): Promise<FacilityUser> {
    // const docRef = this.DB.doc(record.gender.path);
    // const genderDoc = await docRef.get();

    // if (!genderDoc.exists) {
    //   throw new Error('性別が存在しません');
    // }
    // const genderRecord = genderDoc.data();

    const facilityUser: FacilityUser = {
      id: record.id,
      lastName: record.lastName,
      firstName: record.firstName,
      lastNameKana: record.lastNameKana,
      firstNameKana: record.firstName,
      birthDate: dayjs(record.birthDate).format('YYYY/MM/DD'),
      gender: 1,
    };
    if (record.dischargeDate) {
      facilityUser.dischargeDate = dayjs(record.dischargeDate).format(
        'YYYY/MM/DD',
      );
    }
    if (details) {
      facilityUser.pastMedicalHistories = record.pastMedicalHistories;
    }
    return facilityUser;
  }
}
