import { Box } from '@chakra-ui/react'
import siteConfig from '../lib/site-config'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} {siteConfig.ownerName}. All Rights Reserved.
    </Box>
  )
}

export default Footer
