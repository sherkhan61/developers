import profileReducer, {addPostActionCreate, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likeCount: 11},
        {id: 2, message: 'Hi, bro', likeCount: 12},
        {id: 3, message: 'Bla bla bla', likeCount: 12},
        {id: 4, message: 'Yo Yo Yo Yo Yo', likeCount: 12},
    ]
};

test('length of posts should be incremented', () => {
    let action = addPostActionCreate("it-kamasutra.com");
    let newState = profileReducer(state, action);
    expect (newState.postsData.length).toBe (5);
});

test('message of new posts should be correct', () => {
    let action = addPostActionCreate("it-kamasutra.com");
    let newState = profileReducer(state, action);
    expect (newState.postsData[4].message).toBe("it-kamasutra.com");
});

test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect (newState.postsData.length).toBe(3);
});

test('after deleting length should not be decrement if id is incorrect', () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);
    expect (newState.postsData.length).toBe(4);
});

