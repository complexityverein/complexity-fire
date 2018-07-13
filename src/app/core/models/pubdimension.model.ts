import { Pubvalue } from "./pubvalue.model";

// Main data interface

export interface Pubdimension {
    id?: string;
    pubperspectives?: string[];
    pubperspectives_count?: number;
    value1?: string[];
    type?: string;
    value2?: string[];
}