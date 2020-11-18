import React from 'react'
import { Box, VStack, Text, Center } from '@chakra-ui/core'
import { ColorModeSwitcher } from '../ColorModeSwitcher'
import { useFavStocks } from '../hooks/use-fav-stocks'

export const Sidebar = () => {

  const favStocks = useFavStocks()

  if (!favStocks) {
    return <div>Loading...</div>
  }

  return (
    <Box p={4} height='100%' width={248} overflow='hidden' borderRight='1px solid' borderColor='gray.200'>
      <Center><ColorModeSwitcher /></Center>
      <VStack spacing={4} mt={4}>
        {favStocks.map(stock => (
          <Box
            p={2}
            width='100%'
            borderRadius={8}
            userSelect='none'
            transition='all ease 218ms'
            cursor='pointer'
            _hover={{ backgroundColor: 'gray.100' }}
           >
            <Text color='gray.500' textAlign='center'>
              { stock.name }
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  )
}
