import { render, screen } from '@testing-library/react';

import ArtistProfile from '.';

describe('ArtistProfile', () => {
    beforeEach(() => {
        render(<ArtistProfile />)
    })

    test('renders an article containing a h2, h3 and p', () => {
        let artistInfo = screen.getByRole("article")
        let elementsInArticle = within(artistInfo).getAllByRole("h2", "h3", "p")
        expect(elementsInArticle.length).toBe(3)
    })
})
