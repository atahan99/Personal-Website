import {
  Container,
  Badge,
  List,
  ListItem
  
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="digital_forensics">
    <Container maxW="container.xl">
      <Title>
        Digital Forencics <Badge>2021</Badge>
      </Title>
      
      <P>I used the following tools and operating systems in order to conduct digital forencics investigation on given disk images.
        Below are some of the screenshots of the labs I conducted.
      </P>
      
      

      <List ml={4} my={4}>
        <ListItem>
          <Meta>OS</Meta>
          <span>Windows & Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span>Autopsy, OSForensics, FTK Imager, Magnet Axiom, HxD Editor, Celebrite Reader</span>
        </ListItem>
        
        
      </List>

      <Container maxW="container.md">
        
      <WorkImage src="/images/works/digfor_1.jpg" alt="digfor" />
      <WorkImage src="/images/works/digfor_2.jpg" alt="digfor" />
      </Container>
    </Container>
  </Layout>
)

export default Work
