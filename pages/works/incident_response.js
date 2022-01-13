import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="incident_response">
    <Container maxW="container.xl">
      <Title>
        Incident Response <Badge>2021</Badge>
      </Title>
      <P>
        This lab was about incident response. It involved everything from setting up the enviorement to creation of some non-technical documents.
        These non-technical documents were some example policy guidelines (such as: acceptable use policy), baseline check, jumpbag list,
        risk register, specific plans for the loss of confidential information, specific plans for the loss of availibility of services, and specific plans for the loss of information integrity.
        Furthermore, Elastic Stack and OSSEC was installed on the machines other than two dedicated servers for hosting Elastick Stack and OSSEC server.
        Additionally a Honeypot was also configured. Lastly 3 incident response reports were made as a result of different attacks on confidentiality, integrity and availibility of the systems of the network.
        Below are some of the revelant screenshots and the network diagram of the lab setup. The lab enviorement was configured on a VMware vSphere server. 
      
      </P>
      <List ml={4} my={4}>
        
        <ListItem>
          <Meta>OS</Meta>
          <span>Windows Server 2008, Windows Server 2019, Windows 10,
             CentOS 7, Debian 9, Ubuntu 16.04, Ubuntu 20.04</span>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span> OSSEC, Elastic Stack (Elasticsearch, Kibana, Beats, and Logstash), Honeypot (KFSensor)</span>
        </ListItem>
        
      </List>
       
      <Container maxW="container.md">

      <WorkImage src="/images/works/incresp_2.png" alt="incident_response" />
        <WorkImage src="/images/works/incresp_4.png" alt="incident_response" />
        <WorkImage src="/images/works/incresp_1.png" alt="incident_response" />
        <WorkImage src="/images/works/incresp_3.png" alt="incident_response" />

      </Container>
        
        
      
      
    </Container>
  </Layout>
)

export default Work
