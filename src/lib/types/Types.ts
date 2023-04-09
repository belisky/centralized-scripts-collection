export interface IScript {
  collectedBy: string;
  deliveredBy: string;
  courseCode: string;
  courseName: string;
  numOfEnvelopes: number;
  examinerSignatureUrl: string;
  dateOfCollection: string;
  class: string;
}

export interface IColumnType<T> {
  key: string;
  title: string;
  width?: number;
  render?: (column: IColumnType<T>, item: IData) => void;
}

export interface IData {
  courseCode: string;
  class: string;
  collectedBy?: string;
  deliveredBy?: string;
  env?: number;
  dateCollected?: string;
  signature?: string;
}
