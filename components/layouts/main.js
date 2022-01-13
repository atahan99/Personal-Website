import Head from 'next/head'

import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'




const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={'8'}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Atahan's homepage" />
        <meta name="author" content="Atahan Kucuk" />
        <meta name="author" content="personal" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="../android-chrome-192x192" sizes="192x192" type="../android-chrome-192x192" />
        <meta property="og:site_name" content="Atahan Kucuk's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Atahan Kucuk - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.xl" pt={14}>
        

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
