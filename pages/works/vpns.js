import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="vpn">
    <Container maxW="container.lg">
      <Title>
        VPNs <Badge>2021</Badge>
      </Title>

      <P>
      
        This lab is expanding upon the {' '}
          <Link href="/works/firewalls" target="_blank">
            firewalls
          </Link> lab.
        Same network diagram is used for this lab as well.
        The lab enviorement was configured on a VMware vSphere server.
        
      </P>

      <P>
      In order to allow authentication for the client-access VPNs
      RADIUS was configured on Active Directory domain controllers.
      Moving on, IPsec site-to-site VPN was configured using IKEv2 to
      provide VPN access between the private networks attached to the firewalls.
      This was configured on both VyOS and PfSense firewalls.
      </P>

      <P>
      Next, an IPsec client-access VPN was properly configured using IKEv1 to provide VPN access
      from the Windows10IPsec virtual machine to the pfSense-side DMZ. After configuring the VPN
      and implementing the proper firewall rules on pfSense, a Shrew Soft VPN client was installed
      and configured accordingly on the Windows10IPsec virtual machine. This client-access VPN was
      tested by demonstrating access to an Apache server located within the pfSense-side DMZ,
      which was inaccessible from other public clients.
      </P>

      <P>
      Next, an L2TP client-access VPN was properly configured to provide VPN access from the Windows10L2TP
      virtual machine to the Private B network. It was configured to use the RADIUS server in the Private B
      network for authentication. After configuring the VPN and implementing the proper firewall rules on VyOS,
      a VPN connection was added to the Windows10L2TP using the built-in Windows 10 VPN settings. This client-access
      VPN was tested by demonstrating access to an IIS server located within the Private B network, which was inaccessible
      from other public clients.

      </P>
      

      <P>
      Finally, an OpenVPN client-access VPN was properly configured to provide VPN access from the Windows10SSL virtual machine
      to the Private A network. It was configured to use the RADIUS server in the Private A network for authentication. After 
      configuring the VPN and implementing the proper firewall rules on pfSense, and OpenVPN GUI VPN client was installed and 
      configured using a client configuration file generated by the OpenVPN pfSense package. This client-access VPN was tested
      by demonstrating access to an IIS server located within the Private A network, which was inaccessible from other public clients.
      Continuation of this lab can be found on{' '}<Link href="/works/intrusion_detection" target="_blank">
            intrusion detection
          </Link> page.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>VPN Protocols</Meta>
          <span>OpenVPN, IPSec Site-to-Site, IPSec Client-Access, L2TP over IPSec </span>
        </ListItem>
        
         
      </List>

    
      <Container maxW="container.md">
      <WorkImage src="/images/works/vpn_1.jpg" alt="vpn" />

        </Container>
      

    </Container>
  </Layout>
)

export default Work
