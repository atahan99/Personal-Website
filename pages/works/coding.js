import {
  Container,
  Badge,
  List,
  ListItem,
  Link
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="coding">
    <Container maxW="container.xl">
      <Title>
        Coding <Badge>2018 - Present</Badge>
      </Title>
      <P>
        I&apos;ve been coding in several languages as seen below.
        Below are some of the screenshots of my coding projects.
        You can find some of my coding projects on my {' '}
          <Link href="https://github.com/atahan99" target="_blank">
          GitHub
          </Link> page.
      </P>



      <List ml={4} my={4}>
        <ListItem>
          <Meta>Languages:</Meta>
          <span>Python, C, C#, SQL, Bash, Java and JavaScript</span>
        </ListItem>
        
      </List>

      <Container maxW="container.md">
      <WorkImage src="/images/works/coding_1.png" alt="coding" />
      <WorkImage src="/images/works/coding_2.png" alt="coding" />

      </Container>
      
      
    </Container>
  </Layout>
)

export default Work
