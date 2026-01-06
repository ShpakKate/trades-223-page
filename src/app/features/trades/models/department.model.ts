// export interface Timeline {
//   type: string;
//   value: string;
//   display: string;
// }
//
// export interface Department {
//   id: number;
//   name: string;
//   organ: string;
//   timelines: Timeline[];
//   cost: string;
//   costNumeric: number;
//   currency: string;
//   order: number;
//   isTotal?: boolean;
// }
//
// export interface TotalData {
//   id: number;
//   name: string;
//   organ: string;
//   timelines: Timeline[];
//   cost: string;
//   costNumeric: number;
//   currency: string;
// }
// src/app/models/commercial.model.ts

export interface Total {
  id: number;
  label: string;
  timelines: Timeline[];
  cost: string;
  costNumeric: number;
}

export interface CommercialOffer {
  id?: number;
  title?: string;
  date?: string;
  validUntil: string;
  intro?: string;
}

export interface PaymentFormat {
  id: number;
  title: string;
  type: string;
  terms: string;
  description: string;
  applicability: string;
}

export interface CaseStudy {
  id: number;
  company: string;
  description: string;
}

export interface Expertise {
  id: number;
  title: string;
  description: string;
  cases: CaseStudy[];
}

export interface Timeline {
  type: string;
  value: string;
  display: string;
}

export interface Stage {
  id: number;
  name: string;
  organ: string;
  timelines: Timeline[];
  cost: string;
  costNumeric: number;
  currency: string;
  order: number;
}

export interface Data {
  stages: Stage[];
  total: Stage;
}

export interface IntroData {
  introHeader: string;
  intro: Intro[];
}

export interface Intro {
  title: string;
  value: string;
}

export interface UserData {
  theme: string;
  user: string;
  role: string;
  image: string;
}

export interface SocialData {
  title: string;
  icon?: string;
  list?: string[];
}



