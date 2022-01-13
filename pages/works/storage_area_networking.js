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
  <Layout title="storage_area_networking">
    <Container maxW="container.lg">
      <Title>
        Storage Area Networking <Badge>2021</Badge>
      </Title>


      <P>
        This lab was about storage area networking.
         This lab enviorement was configured on VMware vSphere server.
      </P>

      <P> 
      In this lab I configured a  storage area network (SAN) storage solution for a subset of the lab
      network that contained different operating systems. The network storage server
      that was created for the network subsection focused on the usage of iSCSI technology
      for the creation of block shares. The initial usage of the TrueNAS instance as an iSCSI
      target server allowed the testing of basic iSCSI configurations and processes. 
      The network booting over iSCSI (PXE booting) allowed easier maintenance and deployment of systems accross the network.
      Additionally, I used CHAP to for authentication and authorization. TFTP and DHCP server on CentOS machine was used to 
      distrubute iSCSI blocks accross the network.

      </P>
      

      <List ml={4} my={4}>
        <ListItem>
          <Meta>OS</Meta>
          <span>Windows 10, Windows Server 2019, Windows Server 2016, CentOS 8, CentOS 7, VMware ESXI, TrueNAS</span>
        </ListItem>
        </List>
        
      <Container>
      <WorkImage src="/images/works/stonet_1.jpg" alt="storage_area_networking" />
      <WorkImage src="/images/works/stonet_2.jpg" alt="storage_area_networking" />

      </Container>
      

      
    </Container>
  </Layout>
)

export default Work
