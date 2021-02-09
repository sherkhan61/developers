import profilePageReducer, {
  addPostActionCreator,
  getStatus,
  getUser,
  initialState,
  setStatus,
  setUsersProfile, updateStatus
} from "../profile-reducer";
import thunk from "redux-thunk";
import configureMockStore from 'redux-mock-store'
import {profileAPI, usersAPI} from "../../api/socialAPI";


describe('Test for profile_reducer', () => {
  const state = initialState;
  const someUserStatus = "Some User Status";
  const someProfile = {
    "aboutMe": "я круто чувак 1001%",
    "contacts": {
      "facebook": "facebook.com",
      "website": null,
      "vk": "vk.com/dimych",
      "twitter": "https://twitter.com/@sdf",
      "instagram": "instagra.com/sds",
      "youtube": null,
      "github": "github.com",
      "mainLink": null
    },
    "lookingForAJob": true,
    "lookingForAJobDescription": "не ищу, а дурачусь",
    "fullName": "samurai d new name",
    "userId": 2,
    "photos": {
      "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
      "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
    }
  };
  describe("Reducer works correctly", () => {

    test('Add Post action', () => {

      const action = addPostActionCreator("New Message");
      expect(profilePageReducer(state, action)).toEqual({
        ...state,
        enterPosts: [...state.enterPosts, {
          message: action.newMessageBody,
          likeCount: "0"
        }],
      });

    });

    test('Set Users Profile action', () => {
      const action = setUsersProfile(someProfile);

      expect(profilePageReducer(state, action)).toEqual({
        ...state,
        profile: action.profile
      });
    });

    test('Set User Status action', () => {
      const action = setStatus(someUserStatus);
      expect(profilePageReducer(state, action)).toEqual({
        ...state,
        status: action.status
      });
    });

    test("return initialState if there is no relevant action cases",
      () => {

        expect(profilePageReducer(state, {type: "SOME_UNKNOWN_ACTON"}))
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

    it("GetUser thunk must dispatch action SetUsersProfile with" +
      " data", () => {

      usersAPI.getUser =
        jest.fn(() => usersAPI.getUser(someProfile.userId))
          .mockResolvedValueOnce(someProfile);

      const expectedAction = setUsersProfile(someProfile);
      return store.dispatch(getUser(someProfile.userId)).then(() => {
        expect(store.getActions()[0]).toEqual(expectedAction);
      })
    });

    it("GetStatus thunk must dispatch action SetStatus with" +
      " status", () => {

      profileAPI.getStatus =
        jest.fn(() => profileAPI.getStatus(someProfile.userId))
          .mockResolvedValueOnce(someUserStatus);

      const expectedAction = setStatus(someUserStatus);
      return store.dispatch(getStatus(someProfile.userId)).then(() => {
        expect(store.getActions()[0]).toEqual(expectedAction);
      })
    });

    it("UpdateStatus thunk must dispatch action SetStatus with" +
      " status", () => {

      profileAPI.updateStatus =
        jest.fn(() => profileAPI.updateStatus(someUserStatus))
          .mockResolvedValueOnce("Success Response from server");

      const expectedAction = setStatus(someUserStatus);
      return store.dispatch(updateStatus(someUserStatus)).then(() => {
        expect(store.getActions()[0]).toEqual(expectedAction);
      })
    });
  })
});

