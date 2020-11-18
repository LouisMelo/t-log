import { VStack } from '@chakra-ui/core'
import { Tlog } from './Tlog'

export const TlogList = ({ tlogs }) => {
  if (!tlogs) {
    return <div>Loading...</div>
  }


  return (
    <VStack pt={2} pb={2} spacing={4} flex='1' overflowY='auto' css={{
      '::-webkit-scrollbar': { display: 'none' }  // hide scroll bar
    }}>
      { tlogs.map(({ type, price, amount, date }, index) =>
        <Tlog
          key={ index }
          type={ type }
          price={ price }
          amount={ amount }
          date={ date }
        />
      )}
  </VStack>
  )
}
