export class ActiveUserData{
  username : string;
  password : string;
  is_admin : boolean;
  adminID? : string;
  token : string;
  aToken? : string;
}

export interface Token {
  sessionToken: string;
  adminToken: string;
}