import authUserReducer, {
  authUser, login, logout, me
} from "../auth-reducer";
import thunk from "redux-thunk";
import configureMockStore from 'redux-mock-store'
import {authAPI} from "../../api/socialAPI";


describe('Test for auth_reducer', function () {
  describe("Reducer works correctly", () => {
    test('User authorization action', () => {
      const randomUser = {
        id: 2,
        email: 'blabla@bla.bla',
        login: 'samurai'
      };
      const action = authUser(randomUser, true);
      expect(authUserReducer(undefined, action)).toEqual({
        user: {
          ...randomUser,
          isAuth: true
        }
      });
      expect(authUserReducer(undefined, authUser(undefined, false)))
        .toEqual({
          user: {
            isAuth: false
          }
        })

    });

    test("return initialState if there is no relevant action cases",
      () => {
        const initialState = {
          user: {
            me: null,
            email: null,
            id: null,
            isAuth: false
          }
        };
        expect(authUserReducer(undefined,
          {type: "SOME_UNKNOWN_ACTON"}))
          .toEqual(initialState);

      })
  });
  describe("Thunks work correctly", () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const store = mockStore({
      user: {
        me: null,
        email: null,
        id: null,
        isAuth: false
      }
    });

    afterEach(() => {
      store.clearActions();
    });

    it("Logout thunk must dispatch action AuthUser with false", () => {

      authAPI.logout = jest.fn(authAPI.logout).mockResolvedValueOnce({
        headers: {},
        body: {
          resultCode: 0,
          messages: '',
          data: {}
        }
      });
      const expectedAction = authUser(undefined, false);
      return store.dispatch(logout()).then(() => {
        expect(store.getActions()[0]).toEqual(expectedAction);
      })
    });

    it(
      "ME thunk must dispatch action AuthUser with users data and true",
      () => {

        authAPI.me = jest.fn(authAPI.me).mockResolvedValueOnce({
          id: 2,
          email: 'blabla@bla.bla',
          login: 'samurai'
        });

        const expectedAction = authUser({
          id: 2,
          email: 'blabla@bla.bla',
          login: 'samurai'
        }, true);


        return store.dispatch(me(true)).then(() => {
          expect(store.getActions()[0]).toEqual(expectedAction);
        })
      });


    it("login thunk must call me thunk if result code===0", () => {

      authAPI.login = jest.fn(authAPI.login ).mockResolvedValueOnce({
        resultCode: 0,
        messages: [],
        data: {
          userId: 2
        }
      });

      authAPI.me = jest.fn(authAPI.me).mockResolvedValueOnce({
        id: 2,
        email: 'blabla@bla.bla',
        login: 'samurai'
      });
      const expectedAction = authUser({
        id: 2,
        email: 'blabla@bla.bla',
        login: 'samurai'
      }, true);


      return store.dispatch(login('formData'))
        .then(() => expect(store.getActions()[0])
          .toEqual(expectedAction));
    });

    it("login thunk must call stopSubmit if result code !=0", () => {

      authAPI.login = jest.fn(authAPI.login).mockResolvedValueOnce({
        resultCode: 1,
        messages: ["Some Error"]
      });

      const expectedAction = {
        "error": true,
        "meta": {
          "form": "login"
        },
        "payload": {
          "_error": "Some Error"
        },
        "type": "@@redux-form/STOP_SUBMIT"
      };

      return store.dispatch(login('formData'))
        .then(() => expect(store.getActions()[0])
          .toEqual(expectedAction));
    })
  })
});