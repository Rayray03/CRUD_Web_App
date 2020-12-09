//this connects react to sanity

import sanityClient from '@sanity/client'

export default sanityClient({
    projectId:"sncsnz7u",
    database: "production"
})