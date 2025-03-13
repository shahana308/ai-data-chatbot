export const mockStore = (store: string) => {
  jest.mock(store, () => {
    const actualObject = jest.requireActual(store);
    return {
      ...actualObject,
      getState: jest.fn(),
    };
  });
};
