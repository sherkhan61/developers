import thunk from "redux-thunk";
import configureMockStore from 'redux-mock-store'
import appReducer, {
  initializeApp, initializedSuccess, initialState
} from "../app-reducer";
import {authAPI} from "../../api/socialAPI";
import {authUser} from "../auth-reducer";


describe('Test for Users_reducer', () => {
  let state;
  beforeEach(() => state = initialState);
  describe("Reducer works correctly", () => {

    test('Initialize app action', () => {

      const expectedState = {
        ...state,
        initialized: true
      };
      const action = initializedSuccess();
      expect(appReducer(state, action)).toEqual(expectedState);

    });

    test("return initialState if there is no relevant action cases",
      () => {

        expect(appReducer(undefined, {type: "SOME_UNKNOWN_ACTON"}))
          .toEqual(state);

      })
  });
  describe("Thunks work correctly", () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const store = mockStore(state);

    afterEach(() => {
      store.clearActions();
    });

    it("InitializeApp thunk must dispatch me thunk(dispatches" +
      " authUser action)" + " and" + " initializedSucces action",
      () => {
        const response = {
          id: 2,
          email: 'blabla@bla.bla',
          login: 'samurai'
        };

        authAPI.me = jest.fn(() => authAPI.me())
          .mockResolvedValueOnce(response);

        const expectedActions = [authUser(response, true),
          initializedSuccess()];

        return store.dispatch(initializeApp())
          .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
          })
      });
  })
});

