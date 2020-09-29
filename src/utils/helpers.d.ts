import { PagesList } from './actions';
declare const getArrayFromSet: (set: Set<string>) => any[];
declare const getSetFromArray: (arr: Array<any>) => Set<string>;
declare const getInitialState: () => {
    initialCurrentPage: RegExpMatchArray | PagesList;
    initialName: string | null;
    initialEmail: string | null;
    initialOwnVideosIds: any;
    initialSharedVideosIds: any;
    initialCollection: Set<string> | undefined;
};
export { getArrayFromSet, getSetFromArray, getInitialState };
