import React from 'react';

import {
  ChakraProvider,
  CSSReset,
  Heading,
  Flex
} from '@chakra-ui/core';
import theme from '@chakra-ui/theme';

import { TlogList } from './components/TlogList'
import { Sidebar } from './components/Sidebar'
import { useTlogs } from './hooks/use-tlogs'

// const data = [
//   { price: 18.16, amount: 4000, type: 'sell', date: '2020/11/04' },
//   { price: 18.41, amount: 2000, type: 'buy', date: '2020/11/05' },
//   { price: 17.95, amount: 4000, type: 'buy', date: '2020/11/06' },
//   { price: 18.23, amount: 2000, type: 'sell', date: '2020/11/09' },
//   { price: 18.11, amount: 2000, type: 'buy', date: '2020/11/09' },
//   { price: 18.60, amount: 2000, type: 'sell', date: '2020/11/10' },
//   { price: 18.52, amount: 3000, type: 'buy', date: '2020/11/12' },
//   { price: 17.81, amount: 2000, type: 'buy', date: '2020/11/13' },
//   { price: 17.70, amount: 2000, type: 'sell', date: '2020/11/16' },
//   { price: 17.62, amount: 2000, type: 'buy', date: '2020/11/16' },
//   { price: 17.81, amount: 2000, type: 'sell', date: '2020/11/17' },
//   { price: 17.72, amount: 2000, type: 'buy', date: '2020/11/17' },
//   { price: 17.80, amount: 4000, type: 'sell', date: '2020/11/17' },
// ]

function App() {

  const tlogs = useTlogs()

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Flex width='100%' height='100vh'>
        <Sidebar />
        <Flex
          height='100vh'
          flexDirection='column'
          width='100%'
          px='8'
          overflow='hidden'
          flex='1'
         >
          <Heading textAlign='center' marginBottom={4} fontFamily='monospace' fontWeight='600' flex='0'>
            Hello, T-log
          </Heading>
          <TlogList tlogs={tlogs} />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
