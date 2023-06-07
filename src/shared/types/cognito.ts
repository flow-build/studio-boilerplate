interface BaseTokenPayload {
  aud: string;
  auth_time: number;
  client_id: string;
  'cognito:username': string;
  email: string;
  email_verified: boolean;
  event_id: string;
  exp: number;
  iat: number;
  iss: string;
  jti: string;
  name: string;
  origin_jti: string;
  scope: string;
  sub: string;
  token_use: string;
  username: string;
}

type AccessTokenPayload = Omit<
  BaseTokenPayload,
  'aud' | 'cognito:username' | 'email' | 'email_verified' | 'name'
>;

interface AccessToken {
  jwtToken: string;
  payload: AccessTokenPayload;
}

type IdTokenPayload = Omit<BaseTokenPayload, 'client_id' | 'scope' | 'username'>;

interface IdToken {
  jwtToken: string;
  payload: IdTokenPayload;
}

interface RefreshToken {
  token: string;
}

interface Attributes {
  email: string;
  email_verified: boolean;
  name: string;
  sub: string;
}

interface SignInUserSession {
  accessToken: AccessToken;
  idToken: IdToken;
  refreshToken: RefreshToken;
}

interface Pool {
  advancedSecurityDataCollectionFlag: boolean;
  clientId: string;
  userPoolId: string;
  client: { endpoint: string };
}

export interface CognitoSignIn {
  attributes: Attributes;
  authenticationFlowType: string;
  client: { endpoint: string };
  keyPrefix: string;
  pool: Pool;
  preferredMFA: string;
  signInUserSession: SignInUserSession;
  userDataKey: string;
  username: string;
}
