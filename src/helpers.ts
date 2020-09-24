const getArrayFromSet = (set: Set<string>) => {
  return Array.from(set, (item: string) => JSON.parse(item));
};

const getSetFromArray = (arr: Array<any>) => {
  const collection = new Set<string>();
  arr.forEach((item) => collection.add(JSON.stringify(item)));
  return collection;
};

export { getArrayFromSet, getSetFromArray };
