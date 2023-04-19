import { Avatar, Heading, Text } from '@ignite-ui/react'
import { Container, UserHeader } from './styles'

export default function Schedule() {
  return (
    <Container>
      <UserHeader>
        <Avatar src="https://github.com/borgesds.png" />
        <Heading>André Fonseca Borges</Heading>
        <Text>DEV pleno</Text>
      </UserHeader>
    </Container>
  )
}
