export interface IScript {
    _id: string;
    courseName: string;
    courseCode: string;
    collectedBy: string;
    deliveredBy: string;
    signatureUrl: string;
    numOfEnvelopes: number;
    collectedDate: string;
    class: string;
    collected: boolean;
    date: string;
    session: number;
    toPrint: number;
    seen: boolean;
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
    numOfEnvelopes?: number;
    collectedDate?: string;
    signatureUrl?: string;
    _id?: string;
    collected?: boolean;
    date?: string;
}
