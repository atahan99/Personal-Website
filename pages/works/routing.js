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
    <Layout title="routing">
      <Container maxW="container.lg">
        <Title>
        Routing Protocols <Badge>2021</Badge>
        </Title>

        <P>
        This lab was conducted on Cisco PacketTracer. As it can be seen below
        the final network configuration resulted with 6 Cisco 2811 routers, 4 switches,
        and 8 PCs. I implemented 6 different variants of IPv4 routing protocols. I configured 
        static, RIP, OSPF, EIGRP, RIP and OSPF, and EIGRP and OSPF routing protocols.
         After the configuration was complete PCs in the network were able to ping each other without
          a problem meaning that packets sent from a PC on the network were able to correctly routed across the network. 
        I tested the routing protocols in the case of a link failure as well as in the case of a configuration issue.
        Combination of routing protocols provided the most reliability as they provided support for both link failure
        as well as configuration problems. 
        
        </P>



        <List ml={4} my={4}>
        <ListItem>
          <Meta>Routing Protocols</Meta>
          <span> Static, RIP, EIGRP, OSPF, RIP&OSPF, EIGRP&OSPF</span>
          
        </ListItem>
        <ListItem>
        <Meta>Tools</Meta>
          <span>Cisco Packet Tracer</span>
        </ListItem>
        </List>
        <Container maxW="container.md">
      
      <WorkImage src="/images/works/routing.jpg" alt="routing" />
      </Container>

        </Container>
  </Layout>
)

export default Work