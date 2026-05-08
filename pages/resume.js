import { Container, Heading, Text, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import siteConfig from '../lib/site-config'



const Resume = () => (
  <Layout title="Resume">
    <Container maxW="container.xl" maxH="full">
      <Heading as="h3" fontSize={20} mb={4}>
        Resume
      </Heading>
      
      <Section delay={0.1}>
        <Text mb={3}>
          {siteConfig.resumeContactText}
        </Text>
        {siteConfig.resumeContactLink && (
          <Text>
            <Link href={siteConfig.resumeContactLink} color="teal.400" target="_blank">
              {siteConfig.resumeContactLinkText}
            </Link>
          </Text>
        )}
      </Section>

      
    </Container>
  </Layout>
)

export default Resume
