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
  <Layout title="intrusion_detection">
    <Container maxW="container.lg">
      <Title>
        Intrusion Detection <Badge>2021</Badge>
      </Title>
      <P>
      This lab is expanding upon the {' '}
          <Link href="/works/firewalls" target="_blank">
            firewalls
          </Link> and
           {' '}
          <Link href="/works/vpns" target="_blank">
            VPNs
          </Link> labs. Network diagram can be seen below. 
          This lab only needed the pfSense side of the lab enviorement.
          The lab enviorement was configured on a VMware vSphere server.
      </P>

      <P>
      The firewall was also connected to a private network containing a simulated attacker using a Kali Linux machine.
	    Ultimate LAMP and Metasploitable were properly configured to host services such as HTTP in order to show available
      ports on a port scan run by the Kali Linux attacker.
      </P>

      <P>
      Next, Snort and Suricata were both properly configured using a Security Onion build to serve as intrusion detection
      systems monitoring the DMZ. An additional Snort system was configured in inline mode to serve as an intrusion prevention
      machine to catch and filter all traffic. These systems were all updated with the latest rule sets from a public internet database.

      </P>

      <P>
      Finally, a Kali Linux machine was properly configured to use both Nessus and Metasploit to discover and exploit vulnerabilities on the
      two honeypot machines. Nessus was configured to properly generate reports on the machines about available services and related vulnerabilities.
      Metasploit was updated with a repository of exploits and was configured to target the two honeypot machines.

      </P>
      
      

      <List ml={4} my={4}>
        <ListItem>
          <Meta>OS</Meta>
          <span>Kali Linux, SecurityOnion, Metasploitable</span>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span>Metasploit, Nessus, Snort IDS, Snort IPS, Suricata IDS</span>
        </ListItem>
        
        
        
      </List>

      <Container>
      <WorkImage src="/images/works/intdect_1.jpg" alt="intrusion_detection" />
      <WorkImage src="/images/works/intdect_2.png" alt="intrusion_detection" />

      </Container>
      
      
      
    </Container>
  </Layout>
)

export default Work
