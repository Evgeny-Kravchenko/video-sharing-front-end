declare const getArrayFromSet: (set: Set<string>) => any[];
declare const getSetFromArray: (arr: Array<any>) => Set<string>;
declare const getInitialState: () => {
    initialCurrentPage: string;
    initialEmail: string | null;
    initialOwnVideosIds: any;
    initialSharedVideosIds: any;
    initialCollection: Set<string> | undefined;
    initialUid: string | null;
};
export { getArrayFromSet, getSetFromArray, getInitialState };
