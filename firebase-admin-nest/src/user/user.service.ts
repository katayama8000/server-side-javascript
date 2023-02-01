import { firestore } from 'firebase-admin';
import * as admin from 'firebase-admin';
import facilityUserConverter from '../lib/converter';
import { TFacilityUser, FacilityUser } from '../types/user.model';
import dayjs from 'dayjs';

export class UserService {
  DB: firestore.Firestore;
  constructor() {
    this.DB = admin.firestore();
  }
  async getTest1User() {
    console.log('getUser');
    const userRef = this.DB.collection('test1').doc('user');
    const userDoc = await userRef.get();
    return userDoc.data();
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
