import { Injectable } from '@nestjs/common';
import { firestore } from 'firebase-admin';
import * as admin from 'firebase-admin';
import facilityUserConverter from '../lib/converter';
import { TFacilityUser, FacilityUser } from '../types/user.model';
import dayjs from 'dayjs';

@Injectable()
export class UserService {
  DB: firestore.Firestore;
  constructor() {
    this.DB = admin.firestore();
  }
  getUser() {
    return {
      name: 'John Doe',
      age: 42,
    };
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
        console.log(documentSnapshot);
        return documentSnapshot.data() as TFacilityUser;
        //return this.convertFacilityUserToDto(record);
      }),
    );
  }

  private async convertFacilityUserToDto(
    record: TFacilityUser,
    details = false,
  ): Promise<FacilityUser> {
    const docRef = this.DB.doc(record.gender.path);
    const genderDoc = await docRef.get();

    if (!genderDoc.exists) {
      throw new Error('性別が存在しません');
    }
    const genderRecord = genderDoc.data();

    const facilityUser: FacilityUser = {
      id: record.id,
      lastName: record.lastName,
      firstName: record.firstName,
      lastNameKana: record.lastNameKana,
      firstNameKana: record.firstName,
      birthDate: dayjs(record.birthDate).format('YYYY/MM/DD'),
      gender: genderRecord.id,
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
