import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import UrlForm from './UrlForm'
import userEvent from '@testing-library/user-event'
// jest.mock('../apiCalls')

describe('URL Form', () => {
    let mockAddNewUrl;
    beforeEach(() => {
        mockAddNewUrl = jest.fn();
    })

    it('When the Form is rendered, make sure that the correct elements render on the dom', () => {
        render(
            <UrlForm addNewUrl={mockAddNewUrl} />
        )

        expect(screen.getByRole('button', {name: 'Shorten Please!'})).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Title...')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('URL to Shorten...')).toBeInTheDocument();
    })

    it('When the inputs change, make sure that the form elements hold the correct values', () => {
        render(
            <UrlForm addNewUrl={mockAddNewUrl} />
        )

        userEvent.type(screen.getByPlaceholderText('Title...'), 'Title Here')
        userEvent.type(screen.getByPlaceholderText('URL to Shorten...'), 'www.superlongassurlhere.com');
        expect(screen.getByPlaceholderText('Title...')).toHaveValue('Title Here')
        expect(screen.getByPlaceholderText('URL to Shorten...')).toHaveValue('www.superlongassurlhere.com')
    })

    it('When the form is submitted, make sure any appropriate functions are called', () => {
        render(
            <UrlForm addNewUrl={mockAddNewUrl} />
        )
        
        userEvent.type(screen.getByPlaceholderText('Title...'), 'Title Here')
        userEvent.type(screen.getByPlaceholderText('URL to Shorten...'), 'www.superlongassurlhere.com');
        expect(screen.getByPlaceholderText('Title...')).toHaveValue('Title Here')
        expect(screen.getByPlaceholderText('URL to Shorten...')).toHaveValue('www.superlongassurlhere.com')
        userEvent.click(screen.getByRole('button', {name: 'Shorten Please!'}))
        expect(mockAddNewUrl).toHaveBeenCalledTimes(1)
    })
})