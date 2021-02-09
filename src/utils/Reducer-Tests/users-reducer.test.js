import thunk from "redux-thunk";
import configureMockStore from 'redux-mock-store'
import usersPageReducer, {
  follow,
  followUser,
  getUsers,
  initialState,
  setCurrentPage,
  setTotalCount,
  setUsers,
  toggleFollowingUser,
  toggleIsFetching,
  unFollow, unFollowUser
} from "../users-reducer";
import {usersAPI} from "../../api/socialAPI";


describe('Test for Users_reducer', () => {
  let state;
  beforeEach(() => state = initialState);
  const someUserId = 2;
  describe("Reducer works correctly", () => {
    const someUsers = [{
      "name": "Shubert",
      "id": 1,
      "photos": {
        "small": null,
        "large": null
      },
      "status": null,
      "followed": false
    }, {
      "name": "Hacker",
      "id": 2,
      "photos": {
        "small": null,
        "large": null
      },
      "status": null,
      "followed": false
    }];

      test('Follow action', () => {
        state = {
          ...state,
          users: someUsers
        };

      const expectedState = {
        ...state,
        users: someUsers.map((user) => {
          if (user.id === someUserId) {
            return {
              ...user,
              followed: true
            }
          } else {
            return user
          }
        })
      };
      const action = follow(someUserId);
      expect(usersPageReducer(state, action)).toEqual(expectedState);

    });

    test('Un-follow action', () => {

      state = {
        ...state,
        users: someUsers.map((user) => {
          if (user.id === someUserId) {
            return {
              ...user,
              followed: true
            }
          } else {
            return user
          }
        })
      };
      const expectedState = {
        ...state,
        users: someUsers.map((user) => {
          if (user.id === someUserId) {
            return {
              ...user,
              followed: false
            }
          } else {
            return user
          }
        })
      };

      const action = unFollow(someUserId);

      expect(usersPageReducer(state, action)).toEqual(expectedState);
    });

    test('Set Users  action', () => {
      const action = setUsers(someUsers);
      expect(usersPageReducer(state, action)).toEqual({
        ...state,
        users: [...action.users]
      });
    });

    test('Set Current Page action', () => {
      const action = setCurrentPage(someUsers);
      expect(usersPageReducer(state, action)).toEqual({
        ...state,
        currentPage: +action.pageNumber
      });
    });

    test('Set Total Count action', () => {
      const totalCount = 200;
      const action = setTotalCount(totalCount);
      expect(usersPageReducer(state, action)).toEqual({
        ...state,
        totalUsersCount: action.totalCount
      });
    });

    test('Toggle is Fetching', () => {
      const expectedState = (isFetching) => (
        {
          ...state,
          isFetching: isFetching
        }
      );
      expect(usersPageReducer(state, toggleIsFetching(true)))
        .toEqual(expectedState(true));
      expect(usersPageReducer(state, toggleIsFetching(false)))
        .toEqual(expectedState(false));
    });

    test('Toggle is Following action', () => {

      state = {
        ...state,
        isFollowing: [1, 4, 5]
      };

      const expectedStateWihFetchingButtonTrue = {
        ...state,
        isFollowing: [1, 4, 5, someUserId]
      };
      const expectedStateWihFetchingButtonFalse = {
        ...state,
        isFollowing: [1, 4, 5]
      };

      const isFetchingButtonFalse = false;
      const isFetchingButtonTrue = true;
      expect(usersPageReducer(state,
        toggleFollowingUser(someUserId, isFetchingButtonTrue)))
        .toEqual(expectedStateWihFetchingButtonTrue);
      expect(usersPageReducer(state,
        toggleFollowingUser(someUserId, isFetchingButtonFalse)))
        .toEqual(expectedStateWihFetchingButtonFalse);
    });

    test("return initialState if there is no relevant action cases",
      () => {

        expect(usersPageReducer(state, {type: "SOME_UNKNOWN_ACTON"}))
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

    it("GetUsers thunk must dispatch actions: ToggleIsFetching," +
      " setUsers, SetTotalCount", () => {
      const data = {
        "items": [{
          "name": "Makam",
          "id": 7864,
          "uniqueUrlName": null,
          "photos": {
            "small": null,
            "large": null
          },
          "status": null,
          "followed": false
        }, {
          "name": "ingaa",
          "id": 7863,
          "uniqueUrlName": null,
          "photos": {
            "small": null,
            "large": null
          },
          "status": null,
          "followed": false
        }, {
          "name": "viplg",
          "id": 7862,
          "uniqueUrlName": null,
          "photos": {
            "small": null,
            "large": null
          },
          "status": null,
          "followed": false
        }, {
          "name": "VladTkhorenko072412",
          "id": 7861,
          "uniqueUrlName": null,
          "photos": {
            "small": null,
            "large": null
          },
          "status": null,
          "followed": false
        }, {
          "name": "VladTkhorenko07",
          "id": 7860,
          "uniqueUrlName": null,
          "photos": {
            "small": null,
            "large": null
          },
          "status": null,
          "followed": false
        }, {
          "name": "VladTkhorenko",
          "id": 7859,
          "uniqueUrlName": null,
          "photos": {
            "small": null,
            "large": null
          },
          "status": null,
          "followed": false
        }, {
          "name": "Artiflex",
          "id": 7858,
          "uniqueUrlName": null,
          "photos": {
            "small": null,
            "large": null
          },
          "status": null,
          "followed": false
        }, {
          "name": "Hey",
          "id": 7857,
          "uniqueUrlName": null,
          "photos": {
            "small": null,
            "large": null
          },
          "status": null,
          "followed": false
        }, {
          "name": "Rpidlis",
          "id": 7856,
          "uniqueUrlName": null,
          "photos": {
            "small": null,
            "large": null
          },
          "status": null,
          "followed": false
        }, {
          "name": "Lanton",
          "id": 7855,
          "uniqueUrlName": null,
          "photos": {
            "small": null,
            "large": null
          },
          "status": null,
          "followed": false
        }],
        "totalCount": 3866,
        "error": null
      };
      const pageSize = 10;
      const currentPage = 1;
      usersAPI.getUsers =
        jest.fn(() => usersAPI.getUsers(pageSize, currentPage))
          .mockResolvedValueOnce(data);

      const expectedActions = [toggleIsFetching(true),
        toggleIsFetching(false), setUsers(data.items),
        setTotalCount(data.totalCount)];

      return store.dispatch(getUsers(pageSize, currentPage)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
    });

    it("FollowUser thunk must dispatch actions: toggleFollowingUser" +
      " with true and false and action follow with id", () => {
    const data = {resultCode: 0};
      usersAPI.followUser =
        jest.fn(() =>  usersAPI.followUser(someUserId))
          .mockResolvedValueOnce(data);

      const expectedActions = [toggleFollowingUser(someUserId, true),
        toggleFollowingUser(someUserId, false),
        follow(someUserId)];

      return store.dispatch(followUser(someUserId)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
    });

    it("UnFollowUser thunk must dispatch actions:" +
      " toggleFollowingUser" +
      " with (id, true) and (id,false) and action un-follow with id", () => {
      const data = {resultCode: 0};
      usersAPI.unFollowUser =
        jest.fn(() =>  usersAPI.unFollowUser(someUserId))
          .mockResolvedValueOnce(data);

      const expectedActions = [toggleFollowingUser(someUserId, true),
        toggleFollowingUser(someUserId, false),
        unFollow(someUserId)];

      return store.dispatch(unFollowUser(someUserId)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
    });
  })
});

