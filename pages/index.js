import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  Icon,
  useColorModeValue,
  Center,
  SimpleGrid
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
import siteConfig from '../lib/site-config'


const Home = () => (
  <Layout>
    <Container maxW="container.xl">
     
    
    <Center>

    <SimpleGrid columns={[1, 1, 2]} gap={3}>
    <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="none"
            maxWidth="full"
            display="inline-block"
            borderRadius="30"
            src={siteConfig.coverImageOne}
            alt="cover"
          />
      <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="none"
            maxWidth="full"
            display="inline-block"
            borderRadius="30"
            src={siteConfig.coverImageTwo}
            alt="cover"
          />
      </SimpleGrid>
    </Center>
    
      <Box
        borderRadius="lg"
        mt={6}
        mb={6}
        
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        {siteConfig.intro}
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title" >
            {siteConfig.ownerName}
          </Heading>
          <p>{siteConfig.headline}</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="full"
            display="inline-block"
            borderRadius="full"
            src={siteConfig.profileImage}
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          {siteConfig.workSummary}
        </Paragraph>
        <Center>
        
        <Box align="justify" my={4} mx={2} >
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
        <Box  align="justify" my={4} mx={2} >
          <NextLink href="/skills">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Skills
            </Button>
          </NextLink>
        </Box>
        <Box align="justify" my={4} mx={2} >
          <NextLink href="/resume">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Resume
            </Button>
          </NextLink>
        </Box>
        
        </Center>
        
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title"   >
          Bio
        </Heading>
        <BioSection >
          <BioYear>Background</BioYear>
          {siteConfig.bioOrigin}
        </BioSection>
        <BioSection >
          <BioYear>Education</BioYear>
          {siteConfig.bioEducation}
        </BioSection>
      
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" >
          I ♥
        </Heading>
        <Paragraph >
          Mountain Biking, Hacking, Coding, Gaming, Travelling
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" align="center">
          On the web
        </Heading>

  <Center>
        <List>
          
            <Link href={siteConfig.twitterUrl} target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                align="center"
                leftIcon={<Icon w={6} h={6} as={IoLogoTwitter} />}
              >
                
              </Button>
            </Link>
          
            <Link href={siteConfig.instagramUrl} target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon w={6} h={6} as={IoLogoInstagram} />}
              >
                
              </Button>
            </Link>
          
            <Link href={siteConfig.linkedinUrl} target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon w={6} h={6} as={IoLogoLinkedin} />}
              >
                
              </Button>
            </Link>
          
            <Link href={siteConfig.githubUrl} target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon w={6} h={6} as={IoLogoGithub} />}
              >
                
              </Button>
            </Link>
          
        </List>
      </Center>
        
        
        
      </Section>
    </Container>
  </Layout>
)

export default Home
