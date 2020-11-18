import React from 'react'
import { Box, Badge, Text, Flex } from '@chakra-ui/core'

export const Tlog = ({
  type,
  price,
  amount,
  date
}) => {
  return (
    <Box
      px={5}
      py={3}
      width='100%'
      // shadow='md'
      borderWidth='1px'
      borderRadius='24px'
      borderColor='gray.300'
      _hover={{ backgroundColor: 'gray.100' }}
      transition='all ease 218ms'
      userSelect='none'
     >
        <Flex alignItems='center' justifyContent='space-between'>
          <Badge variant="subtle" colorScheme={ type === 'buy' ? 'red' : 'green' }>
            { type === 'buy' ? '买入' : '卖出' }
          </Badge>
          <Text fontSize='large' fontWeight='bold' color={ type === 'buy' ? 'red.400' : 'green.400'}>{ amount * price }</Text>
          <div>
            <Text fontSize='md' color={ type === 'buy' ? 'red.400' : 'green.400'}>
              { price }
            </Text>
            <Text fontSize='md' color='gray.500'>{ amount }</Text>
          </div>
          <Text fontSize='md' color='blue.400'>{ date }</Text>
        </Flex>
    </Box>
  )
}
