import { BadRequestException, Injectable } from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library';
import axios from 'axios';
export interface UserInfo {
  tokens: any;
  localId: string;
  email: string;
  displayName: string;
  language: string;
  photoUrl: string;
  timeZone: string;
  dateOfBirth: string;
  passwordHash: string;
  salt: string;
  version: number;
  emailVerified: boolean;
  passwordUpdatedAt: number;
  providerUserInfo: any;
  validSince: string;
  disabled: boolean;
  lastLoginAt: string;
  createdAt: string;
  screenName: string;
  customAuth: boolean;
  rawPassword: string;
  phoneNumber: string;
  customAttributes: string;
  emailLinkSignin: boolean;
  tenantId: string;
  mfaInfo: any;
  initialEmail: string;
  lastRefreshAt: string;
}
@Injectable()
export class GoogleService {
  private oAuth2Client: OAuth2Client;

  async getUserData(code: string): Promise<UserInfo> {
    const credentials = { code };

    if (!credentials) {
      throw new BadRequestException('Missing credentials');
    }

    const { tokens } = await this.oAuth2Client.getToken(credentials.code);

    if (!tokens) {
      throw new BadRequestException('Tokens fail');
    }

    const { data } = await axios<UserInfo>(
      'https://www.googleapis.com/oauth2/v3/userinfo',
      {
        headers: {
          Authorization: `Bearer ${tokens.access_token}`,
        },
      }
    );

    if (!data) {
      throw new BadRequestException('Get info user google fail');
    }
    return data;
  }
}
