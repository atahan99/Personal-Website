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
  <Layout title="network_admin">
    <Container maxW="container.lg">
      <Title>
        Network Administration <Badge>2021</Badge>
      </Title>
      <P>
        This lab was about network administration. Below is the
        network diagram for the lab. This lab enviorement was configured on VMware vSphere server.
      </P>

      <P>

      Three firewall zones were created for the DMZ, Headquarter (HQ), and Remote networks.
      A pfSense machine was implemented and configured properly as the firewall that controlled
      all the traffic that went in and out the private network. A DNS server integrated with BIND
      was created and configured to serve as the main DNS server for the entire internal network.
      One Active Directory Domain Controller (total of two) was also created and configured as the
      internal DNS server with DFS services enabled in both HQ and Remote zones. Clients were created
      in the domain that served as the end users in the internal network. To enable the mail services,
      a main Postfix mail server was created in the DMZ to direct and filter all the mails that went in
      and out of the private network. A Microsoft Exchange server was configured in the HQ to allow internal
      users to use the email services. A NGINX web server was implemented in the DMZ to serve as the main web
      server when a Proxy server was created in the DMZ to reroute all the traffic to protect the internal network.
      Besides, a F5 BIG IP machine that served as the load balancer was created in the DMZ to balance the traffic that
      went in and out of the internal network. 

      </P>

      <P>

      Several traffic rules and port forward rules were implemented in the pfSense to protect the private network.
      All servers that were required to communicate somehow with the outside network were put into the DMZ to reduce the
      possibility for the internal network to access the external network directly to increase security.

      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>OS</Meta>
          <span>pfSense, Windows Server 2019, Windows 10, CentOS 8, Ubuntu</span>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span>NGINX, F5 BIGIP, Squid, Postfix, Microsoft Exchange</span>
        </ListItem>
      </List>

      
      <Container maxW="container.md">
      
      <WorkImage src="/images/works/netadm_1.jpg" alt="network_admin" />
      </Container>
    </Container>
  </Layout>
)

export default Work
