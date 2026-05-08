import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbIncResp from '../public/images/works/incresp.jpg'
import thumbFirewall from '../public/images/works/firewalls.jpg'
import thumbVPN from '../public/images/works/vpn.jpg'
import thumbIntDect from '../public/images/works/intdect.jpg'
import thumbDigFor from '../public/images/works/digfor.jpg'
import thumbStoNet from '../public/images/works/stonet.jpg'
import thumbNetAdmin from '../public/images/works/netadm.jpg'
import thumbCoding from '../public/images/works/coding.jpg'
import thumbNetworkPerf from '../public/images/works/network2.jpg'
import thumbEnterprise from '../public/images/works/enterprise1.jpg'
import thumbRouting from '../public/images/works/network3.jpg'
import thumbRedun from '../public/images/works/firewalls.jpg'



const Works = () => (
  <Layout title="Works">
    <Container maxW="container.xl">
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2, 3]} gap={6}>
        <Section>
          <WorkGridItem id="incident_response" title="Incident Response" thumbnail={thumbIncResp}>
            Summary of my incident response lab 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="firewalls"
            title="Firewalls"
            thumbnail={thumbFirewall}
          >
            Summary of a lab involving the deployment and configuration of PfSense and VyOS firewalls
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="vpns"
            title="VPNs"
            thumbnail={thumbVPN}
          >
            Summary of a lab involving different VPN protocols (OpenVPN, IPSec Site-to-Site, IPSec Client-Access, L2TP over IPSec)
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="intrusion_detection" thumbnail={thumbIntDect} title="Intrusion Detection">
            Summary of Intrusion Detection Lab
          </WorkGridItem>
        </Section>
      
        <Section delay={0.3}>
          <WorkGridItem
            id="digital_forensics"
            thumbnail={thumbDigFor}
            title="Digital Forensics"
          >
            Summary of digital forencics lab
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="storage_area_networking" thumbnail={thumbStoNet} title="Storage Area Networking">
            Summary of a lab involving TrueNAS, iSCSI, PXE Booting
          </WorkGridItem>
        </Section>
    
        <Section delay={0.5}>
          <WorkGridItem id="network_admin" thumbnail={thumbNetAdmin} title="Network Administration">
            Summary of a lab involving PfSense, F5 BIG-IP, Postfix, Squid, NGINX, Microsoft Exchange Server, Active Directory
          </WorkGridItem>
        </Section>
        
        <Section delay={0.5}>
          <WorkGridItem id="coding" thumbnail={thumbCoding} title="Coding">
            Some examples of my coding projects and assignments
          </WorkGridItem>
        </Section>
        
        <Section delay={0.5}>
          <WorkGridItem id="network_performance" thumbnail={thumbNetworkPerf} title="Spanning Trees and Network Performance">
            Summary of a lab involving the deployment of a network architecture and configuring STP
          </WorkGridItem>
        </Section>

        
        <Section delay={0.5}>
          <WorkGridItem id="enterprise" thumbnail={thumbEnterprise} title="Enterprise Network Infrastructure ">
            Summary of a lab involving the deployment of an enterprise network infrastructure
          </WorkGridItem>
        </Section>

        <Section delay={0.5}>
          <WorkGridItem id="routing" thumbnail={thumbRouting} title="Routing Protocols">
            Summary of a lab involving different IPV4 routing protocols
          </WorkGridItem>
        </Section>

        <Section delay={0.5}>
          <WorkGridItem id="network_redundancy" thumbnail={thumbRedun} title="Redundant LAN Gateways">
            Summary of a lab involving load balancing in a network
          </WorkGridItem>
        </Section>

        
      
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
