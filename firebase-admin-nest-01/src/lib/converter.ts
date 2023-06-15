import {
  WithFieldValue,
  DocumentData,
  QueryDocumentSnapshot,
} from 'firebase-admin/firestore';
import { TFacilityUser } from '../types/user.model';

const facilityUserConverter = {
  toFirestore(facilityUser: WithFieldValue<TFacilityUser>): DocumentData {
    return Object.assign({}, facilityUser) as TFacilityUser;
  },
  fromFirestore(snapshot: QueryDocumentSnapshot<any>): TFacilityUser {
    const data = snapshot.data();
    data.id = snapshot.id;
    data.birthDate = data.birthDate.toDate();
    if (data.dischargeDate) data.dischargeDate = data.dischargeDate.toDate();
    return Object.assign({}, data) as TFacilityUser;
  },
};

export default facilityUserConverter;
