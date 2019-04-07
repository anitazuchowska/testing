import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
    const initialState = {
        comments: ['Comment1', 'Comment2', 'Comment3']
    };

    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    );
});

it('creates one Li pre comment', () => {
    expect(wrapped.find('li').length).toEqual(3);
});

it('shows text for each comment', () => {
    expect(wrapped.render().text()).toContain('Comment1');
    expect(wrapped.render().text()).toContain('Comment2');
    expect(wrapped.render().text()).toContain('Comment3');
});