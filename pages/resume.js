import { Container, Heading} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'



const Resume = () => (
  <Layout title="Resume">
    <Container maxW="container.xl" maxH="full">
      <Heading as="h3" fontSize={20} mb={4}>
        My Resume
      </Heading>
      
      <Section delay={0.1}>
        
      <div > 
      <object
        data='/resume.pdf'
        type="application/pdf"
        width="100%"
        height="800"
      >

        <iframe
          src='/resume.pdf'
          width="100%"
          height="800"
        >
        <p>This browser does not support PDF!</p>
        </iframe>

      </object>
    </div>


        
      </Section>

      
    </Container>
  </Layout>
)

export default Resume
