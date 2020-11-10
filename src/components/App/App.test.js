import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import App from './App'
import { get } from 'http'
import { getUrls, postUrl } from '../../apiCalls';
jest.mock('../../apiCalls')

describe('App', () => {
    beforeEach(() => {
        getUrls.mockResolvedValueOnce({
            urls: [
                {
                    id: 1,
                    long_url: 'www.wewewewewewewewewe.com',
                    short_url: 'http://localhost:3001/useshorturl/1',
                    title: 'Title 1'
                },
                {
                    id: 2,
                    long_url: 'www.wowowowowowowowowo.com',
                    short_url: 'http://localhost:3001/useshorturl/2',
                    title: 'Title 2'
                }
            ]
        })
    })

    it('When the App is rendered, make sure any UI specific to the App component renders as well', () => {
        render(
            <App />
        )

        expect(screen.getByText('URL Shortener')).toBeInTheDocument()
    })

    
})