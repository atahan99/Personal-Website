import { Heading ,List,
    ListItem,Button,Icon, Container } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
     IoHardwareChip, IoBook, IoCodeSharp ,  IoLogoPython, IoLogoWindows, IoLogoApple, IoLogoJavascript, IoTerminal, IoLogoAndroid
  } from 'react-icons/io5'



const Skills = () => (
  <Layout title="Skills">
    <Container maxW="container.xl">
      
    <Heading as="h3" variant="section-title">
          Skills
    </Heading>

    <Heading as="h5" variant="section-title">
          Operating Systems
    </Heading>

    <Section>

    <List>

    <ListItem>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoLogoWindows} />}
              >
                Windows 10
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoLogoWindows} />}
              >
                Windows 11
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoLogoWindows} />}
              >
                Windows Server 2016
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoLogoWindows} />}
              >
                Windows Server 2019
              </Button>

              <Button
                variant="ghost"
                leftIcon={<Icon as={IoLogoAndroid}/>}
              >
                Android
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoLogoApple} />}
              >
                Mac OS
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoLogoApple} />}
              >
                IOS
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoLogoApple} />}
              >
                Ipad OS
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoTerminal} />}
              >
                Ubuntu 
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoTerminal} />}
              >
                CentOS
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoTerminal} />}
              >
                Debian
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoTerminal} />}
              >
                Kali Linux
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoTerminal} />}
              >
                FreeBSD
              </Button>
    </ListItem>

    </List>


    <Heading as="h5" variant="section-title">
        Programming
    </Heading>

    </Section>

    <List>

    <ListItem>
    <Button
                variant="ghost"
                leftIcon={<Icon as={IoLogoPython} />}
              >
                Python
    </Button>
    <Button
                variant="ghost"
                leftIcon={<Icon as={IoLogoJavascript} />}
              >
                JavaScript
    </Button>
    <Button
                variant="ghost"
                leftIcon={<Icon as={IoCodeSharp} />}
              >
                Java
    </Button>
    
    <Button
                variant="ghost"
                leftIcon={<Icon as={IoCodeSharp} />}
              >
                C
    </Button>
    <Button
                variant="ghost"
                leftIcon={<Icon as={IoCodeSharp} />}
              >
                C#
    </Button>
    <Button
                variant="ghost"
                leftIcon={<Icon as={IoCodeSharp} />}
              >
                SQL
    </Button>
    <Button
                variant="ghost"
                leftIcon={<Icon as={IoCodeSharp} />}
              >
                Bash
    </Button>
    
    
    </ListItem>
        
    </List>

    <Heading as="h5" variant="section-title">
          Tools
        </Heading>

        <Section>
        <List>
            <ListItem>
            <Button
                variant="ghost"
                leftIcon={<Icon as={IoHardwareChip} />}
              >
                Wireshark
            </Button>
            <Button
                variant="ghost"
                leftIcon={<Icon as={IoHardwareChip} />}
              >
                Autopsy
            </Button>
            <Button
                variant="ghost"
                leftIcon={<Icon as={IoHardwareChip} />}
              >
                OSSEC
            </Button>
            <Button
                variant="ghost"
                leftIcon={<Icon as={IoHardwareChip} />}
              >
                Elastic Stack (Elasticsearch, Kibana, Beats, and Logstash)
            </Button>
            <Button
                variant="ghost"
                leftIcon={<Icon as={IoHardwareChip} />}
              >
                pfSense
            </Button>
            <Button
                variant="ghost"
                leftIcon={<Icon as={IoHardwareChip} />}
              >
                VyOS
            </Button>
            <Button
                variant="ghost"
                leftIcon={<Icon as={IoHardwareChip} />}
              >
                Metasploit
            </Button>
            <Button
                variant="ghost"
                leftIcon={<Icon as={IoHardwareChip} />}
              >
                OSForensics
            </Button>
            <Button
                variant="ghost"
                leftIcon={<Icon as={IoHardwareChip} />}
              >
                FTK Imager
            </Button>
            <Button
                variant="ghost"
                leftIcon={<Icon as={IoHardwareChip} />}
              >
                Magnet Axiom
            </Button>
            <Button
                variant="ghost"
                leftIcon={<Icon as={IoHardwareChip} />}
              >
                HxD Editor
            </Button>
            <Button
                variant="ghost"
                leftIcon={<Icon as={IoHardwareChip} />}
              >
                VMware ESXI
            </Button>
            <Button
                variant="ghost"
                leftIcon={<Icon as={IoHardwareChip} />}
              >
                TrueNAS
            </Button>
            </ListItem>
        </List>
        </Section>


    <Heading as="h5" variant="section-title">
          Hardware
        </Heading>
    
    <Section>
        <List>
            <ListItem>

            <Button
                variant="ghost"
                leftIcon={<Icon as={IoHardwareChip} />}
              >
                Raspberry Pi
            </Button>
            <Button
                variant="ghost"
                leftIcon={<Icon as={IoHardwareChip} />}
              >
                Cisco Networking gear (Switches and routers)
            </Button>
            <Button
                variant="ghost"
                leftIcon={<Icon as={IoHardwareChip} />}
              >
                Aruba networking gear
            </Button>

            </ListItem>

        </List>
    </Section>
    <Heading as="h5" variant="section-title">
          Notable Coursework
        </Heading>

    <Section>

    <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Basic Cyber Forensics
              </Button>

              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Cybersecurity Fundamentals
              </Button>

              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Data Communications and Networking
              </Button>

              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Database Fundamentals
              </Button>

              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Incident Response Management
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Information Technology Architectures
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Internetwork Design and Implementation
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Introduction to Software Development Concepts
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Introduction to Systems Development
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Introduction to Cryptography
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Network Administration
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Network Security
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Object Oriented Programming Introduction
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Storage Area Networking
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Policy, Regulation, and Globalization in IT
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Systems Administration
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Systems Analysis and Design Methods
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
               Systems Programming
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                UNIX Fundamentals
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Wireless Networks
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Managing Information Technology Projects
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Cyber Criminology
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Vulnerability Analysis and Testing
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Social Engineering
              </Button>



    </Section>

      </Container>
      </Layout>
)
export default Skills
