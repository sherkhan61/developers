import dialogsPageReducer, {
  initialState, sendMessageActionCreator
} from "../dialogs-reducer";


describe('Test for Dialogs_reducer', () => {
  let state;
  const newMessage="newMessage";
  beforeEach(() => state = initialState);
  describe("Reducer works correctly", () => {

    test('Send Message action', () => {

      const expectedState = {
        ...state,
        enterMessages: [...state.enterMessages, {
          message: newMessage,
          id: 0
        }]
      };
      const action = sendMessageActionCreator(newMessage);
      expect(dialogsPageReducer(undefined, action)).toEqual(expectedState);

    });

    test("return initialState if there is no relevant action cases",
      () => {

        expect(dialogsPageReducer(undefined, {type: "SOME_UNKNOWN_ACTON"}))
          .toEqual(state);

      })
  });
});

