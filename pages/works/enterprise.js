import {
    Container,
    Badge,
    List,
    ListItem,
    
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="enterprise">
      <Container maxW="container.lg">
        <Title> Enterprise Network Infrastructure 
         <Badge>2021</Badge>
        </Title>

        <P>
        This lab was about enterprise network infrastructure. It involved network segmentation approaches.
        These are VLANs, 802.1Q tagging, IP subnetting, Trunking. Wireshark was used to capture and analyse packets.

        </P>

        <P>
        This network had two physical switches, an uplink, and a router.
         There were two VLANs created as well as default VLAN. Each vlan has a different IP subnet.
          Created VLANs use 802.1Q tagging. This meant that a frame needs the correct 802.1Q tag to access a specific VLAN.
           Both switches and the uplink are trunked. 802.1Q tagging was required in this network setup because VLANs were trunked into different switches.
            If this network setup only had one switch but kept two VLANs, 802.1Q tagging wouldn&apos;t be required.
        </P>

        <P>
        There are a total of 3 MAC broadcast domains and 6 contention domains within the current network architecture.
         The 3 broadcast domains are located at each VLAN trunk as well as the default VLAN, meaning that from Host to
          Uplink including the two Cisco switches directing the VLANs are all broadcast domains. The 6 contention domains
           lie in between the Hosts and their switches (i.e. Host A to Cisco Switch 1, Host B to Cisco Switch 2, Host C to
            Aruba Switch) as well as the connections between the Cisco switches and Aruba switch and finally the connection
             between the Aruba and Cisco router. 
        </P>



        <List ml={4} my={4}>
        <ListItem>
          <Meta>Network Hardware</Meta>
          <span> Cisco 2911 Router, Aruba 2930F Switch, Cisco 3750-E Switch</span>
        </ListItem>
        <ListItem>
            <Meta>Tools</Meta>
            <span>Wireshark</span>
        </ListItem>
        </List>
        <Container maxW="container.md">
      
      <WorkImage src="/images/works/enterprise.jpg" alt="enterprise" />
      </Container>

        </Container>
  </Layout>
)

export default Work