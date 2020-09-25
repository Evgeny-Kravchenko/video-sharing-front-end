import { PagesList } from './actions';

const getArrayFromSet = (set: Set<string>) => {
  return Array.from(set, (item: string) => JSON.parse(item));
};

const getSetFromArray = (arr: Array<any>) => {
  const collection = new Set<string>();
  arr.forEach((item) => collection.add(JSON.stringify(item)));
  return collection;
};

const getInitialState = () => {
  const initialCurrentPage =
    window.location.pathname.match(/\/(.+)\/*/) || PagesList.Authentication;
  const initialEmail = localStorage.getItem('email');
  const initialCollectionArray = localStorage.getItem('collection');
  const initialOwnVideosIdsStringify = localStorage.getItem('own-videos-ids');
  const initialSharedVideosIdsStringify = localStorage.getItem('shared-videos-ids');
  const initialUid = localStorage.getItem('uid');
  let initialOwnVideosIds;
  let initialSharedVideosIds;
  let initialCollection;

  if (initialOwnVideosIdsStringify && initialSharedVideosIdsStringify) {
    initialOwnVideosIds = JSON.parse(initialOwnVideosIdsStringify);
    initialSharedVideosIds = JSON.parse(initialSharedVideosIdsStringify);
  }

  if (initialCollectionArray) {
    initialCollection = getSetFromArray(JSON.parse(initialCollectionArray));
  }

  return {
    initialCurrentPage,
    initialEmail,
    initialOwnVideosIds,
    initialSharedVideosIds,
    initialCollection,
    initialUid,
  };
};

export { getArrayFromSet, getSetFromArray, getInitialState };