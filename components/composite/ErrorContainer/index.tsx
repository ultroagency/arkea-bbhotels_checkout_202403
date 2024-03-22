import { Base } from "components/ui/Base"
import { Container } from "components/ui/Container"

import { Wrapper, LogoWrapper, FullLogo, Main, Error } from "./styled"

export const ErrorContainer = ({ children }: { children: ChildrenType }) => {
  return (
    <Base>
      <Container>
        <Wrapper>
          <LogoWrapper>
            <FullLogo className="self-center text-black md:pl-4 md:self-auto" />
          </LogoWrapper>
          <Main>
            <Error>{children}</Error>
          </Main>
        </Wrapper>
      </Container>
    </Base>
  )
}
