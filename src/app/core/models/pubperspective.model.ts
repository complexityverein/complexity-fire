import { Pubdimension } from "./pubdimension.model";
import { Pubvalue } from "./pubvalue.model";

// Main data interface

export interface Pubperspective {
    id?: string;
    label: string;
    dims?: Pubdimension[];
    seldims?: Pubdimension[];
    vals?: Pubvalue[];
    selvals?: Pubvalue[];
}