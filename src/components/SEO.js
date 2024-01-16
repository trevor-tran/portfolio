import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, author, type }) {
    return (
        <Helmet>
            { /* Standard metadata tags */}
            <title>{title}</title>
            <meta charset="UTF-8" />
            <meta name='description' content={description} />
            <meta name="author" content={author}/>

            { /* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            { /* Twitter tags */}
            <meta name="twitter:creator" content={author} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            { /* End Twitter tags */}
        </Helmet>
    )
}