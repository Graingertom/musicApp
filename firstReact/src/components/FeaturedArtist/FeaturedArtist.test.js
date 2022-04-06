import { render, screen, within } from '@testing-library/react';

import { FeaturedArtist } from './index.jsx';

describe('ArtistProfile', () => {
    beforeEach(() => {
        const artistStub = {id: 101, artist: "Bon Iver", musicType: "Folk", introduction: "Bon Iver is the name singer/songwriter  chose for his solo project when he retreated to a cabin in Wisconsin during 2006. He emerged from the isolation with an album -- For Emma, Forever Ago -- that became an indie folk touchstone. The gentle strumming of acoustic guitars, subtle arrangements, and 's swooning falsetto combined to create a mood that felt like backwoods  recorded by candlelight. It was a sound that resonated with a great many people, and  became something of a bearded sensation -- feted by outlets as diverse as Mojo and Late Night with David Letterman, and collaborating with  (the first of many hookups with hip-hop artists through the following years). For 2011's Bon Iver,  swung away from the hushed intimacy of the first LP in favor of a bigger, near-orchestral sound that had elements of late-night R&B as well. He then took a detour into jagged electronica on 2016's 22, A Million before blending the various streams of the Bon Iver sound into a cohesive whole on 2019's I, I, an album that featured almost 50 musicians.", album: [{title: "For Emma, Forever Ago", cover: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Bon_iver_album_cover.jpg'}, {title: "Bon Iver", cover: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Bon_iver.jpg'}], img: 'https://drive.google.com/uc?export=view&id=1Q3loxL21zBhAqynHXrTVOSocn3S-yP2b'}
        render(<FeaturedArtist artist={artistStub} />)
    })

    test('renders an article containing a h2 and h3', () => {
        let artistInfo = screen.getByRole("article")
        let elementsInArticle = within(artistInfo).getAllByRole("heading")
        expect(elementsInArticle.length).toBe(2)
    })

    test('renders the artists name', () => {
        let artistInfo = screen.getByRole("article")
        let artistName = within(artistInfo).getByRole("heading", {name: "Bon Iver"} )
        expect(artistName.textContent).toContain('Bon Iver')
    })
})
