export interface PPerspective {
    pid: string;
    selVals: any[];
    selDims: any[];
    dims: any[]
    dims_count: number;
    vals: any[];
    vals_count: number;
    createdBy: {
        uid: string;
        tim: Date;
    };
    views: number;
    likes: number;
}


export interface IPerspective {
    pid: string;
    selVals: any[];
    selDims: any[];
    dims: any[]
    dims_count: number;
    vals: any[];
    vals_count: number;
    createdBy: {
        uid: string;
        tim: Date;
    };
    views: number;
    likes: number;
}
