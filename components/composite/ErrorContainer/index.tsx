import { Base } from "components/ui/Base"
import { Container } from "components/ui/Container"

import { Wrapper, Main, Error } from "./styled"

export const ErrorContainer = ({ children }: { children: ChildrenType }) => {
  return (
    <Base>
      <Container>
        <Wrapper>
          <Main>
            <Error>{children}</Error>
          </Main>
        </Wrapper>
      </Container>
    </Base>
  )
}
