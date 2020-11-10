import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import UrlContainer from './UrlContainer'

describe('URL Container', () => {
    it('should render headings and anchor tags appropriately', () => {
        const fakeUrls = [
            {
                id: 1,
                long_url: 'www.thisisthelongesturlever.com',
                short_url: 'http://localhost:3001/useshorturl/1',
                title: 'Check1'
            },
            {
                id: 2,
                long_url: 'www.thisisthelongesturleverevenlongerthanbefore.com',
                short_url: 'http://localhost:3001/useshorturl/2',
                title: 'Check2'
            }
        ]

        render(
            <UrlContainer urls={ fakeUrls } />
        )

        expect(screen.getByText('http://localhost:3001/useshorturl/1')).toBeInTheDocument()
        expect(screen.getByText('www.thisisthelongesturlever.com')).toBeInTheDocument()
        expect(screen.getByText('Check1')).toBeInTheDocument()
        
        expect(screen.getByText('www.thisisthelongesturleverevenlongerthanbefore.com')).toBeInTheDocument()
        expect(screen.getByText('http://localhost:3001/useshorturl/2')).toBeInTheDocument()
        expect(screen.getByText('Check2')).toBeInTheDocument()
    })
})