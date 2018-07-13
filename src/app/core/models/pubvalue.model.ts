// Main data interface

export interface Pubvalue {
    id?: string;
    type: string;
    label: string;
    dimensions?: [string];
    dimensions_count?: number;
    pubperspectives?: [string];
    pubperspectives_count?: number;
}