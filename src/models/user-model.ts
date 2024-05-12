export interface UserModel{
  id: number;
  name: string;
  email: string;
  gender: string;
  age: string;
  phone: string;
  company: CompanyModel;
}

export interface CompanyModel {
  id: number;
  name: string;
  location: string;
}
