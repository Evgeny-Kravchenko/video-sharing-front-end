declare const store: import("redux").Store<import("./reducers/types").State, import("./actions").Action> & {
    dispatch: unknown;
};
export default store;
