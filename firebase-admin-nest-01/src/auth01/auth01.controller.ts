import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Auth01Service } from './auth01.service';
import { getAuth, UserRecord, Auth } from 'firebase-admin/auth';

import * as firebase from 'firebase-admin';

@Controller('auth01')
export class Auth01Controller {
  user: UserRecord;
  uid = 'xVy1RyMGrpZUL4PPqaQMm9wBuAw1';
  // createUser
  auth01Service = new Auth01Service();
  @Post('create')
  async createUser(
    @Body() email: string,
    @Body() password: string,
  ): Promise<void | UserRecord> {
    console.log('create');
    return this.auth01Service.createUser(email, password);
  }

  //getLoginUser
  @Get('getLoginUser')
  async getLoginUser() {
    getAuth()
      .getUser(this.uid)
      .then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log('Successfully fetched user data:', userRecord.toJSON());
        return userRecord;
      })
      .catch((error) => {
        console.log('Error fetching user data:', error);
      });
  }

  // get
  @Get('get/:email')
  async get(@Req() request: Request & { params: { email: string } }) {
    console.log('get');
    console.log(request.params);

    const user = await this.auth01Service.getUser(request.params.email);
    if (user) {
      this.user = user;
    }
    return this.user;
  }
  // delete
  // update
  // setCustomUserClaims
  @Get('setCustomUserClaims')
  async setCustomUserClaims() {
    console.log('setCustomUserClaims');
    // const uid = this.user.uid;
    const uid = 'xVy1RyMGrpZUL4PPqaQMm9wBuAw1';
    return this.auth01Service.setCustomUserClaims(uid);
  }
  // verifyIdToken
  @Get('verifyIdToken')
  async verifyIdToken() {
    console.log('verifyIdToken');
    // idToken取得
    const idToken = await getAuth().createCustomToken(this.uid);
    console.log(idToken);
    return this.auth01Service.verifyIdToken(idToken);
  }
}
