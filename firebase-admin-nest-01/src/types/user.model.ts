import { DocumentReference } from 'firebase-admin/firestore';
import { TGender } from './gerner.model';

export interface TFacilityUser {
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  birthDate: Date;
  gender: DocumentReference<TGender>;
  image: string | null;
  dischargeDate?: Date | null;
  pastMedicalHistories: string[];
  createdAt?: Date;
  id?: string;
  externalSystemManagementNumber?: string | null;
  lifeOriginFirstName?: string | null;
  lifeOriginLastName?: string | null;
  lifeOriginFirstNameKana?: string | null;
  lifeOriginLastNameKana?: string | null;
}

export interface FacilityUser {
  id?: string;
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  birthDate: string;
  gender: number;
  dischargeDate?: string;
  pastMedicalHistories?: string[];
}
