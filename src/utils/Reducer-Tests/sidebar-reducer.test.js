import sidebarReducer, {initialState} from "../sidebar-reducer";


describe('Test for sideBar_reducer', () => {
  let state;
  beforeEach(() => state = initialState);
  describe("Reducer works correctly", () => {
    test("return initialState if there is no relevant action cases",
      () => {
        expect(sidebarReducer(undefined, {type: "SOME_UNKNOWN_ACTON"}))
          .toEqual(state);

      })
  });
});

