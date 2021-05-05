import { useContext } from "react"
import styled from "styled-components"
import tw from "twin.macro"

import { OrderSummary } from "components/composite/OrderSummary"
import { StepComplete } from "components/composite/StepComplete"
import { StepCustomer } from "components/composite/StepCustomer"
import { StepNav } from "components/composite/StepNav"
import { StepPayment } from "components/composite/StepPayment"
import { StepShipping } from "components/composite/StepShipping"
import { AppContext } from "components/data/AppProvider"
import { useActiveStep } from "components/hooks/useActiveStep"
import { LayoutDefault } from "components/layouts/LayoutDefault"
import { Logo } from "components/ui/Logo"
import { SpinnerLoader } from "components/ui/SpinnerLoader"

interface Props {
  logoUrl: string
  companyName: string
  supportEmail: string
  supportPhone: string
}

export const Checkout: React.FC<Props> = ({
  logoUrl,
  companyName,
  supportEmail,
  supportPhone,
}) => {
  const ctx = useContext(AppContext)

  const {
    activeStep,
    lastActivableStep,
    setActiveStep,
    isLoading,
    steps,
  } = useActiveStep()

  if (!ctx || isLoading) {
    return <SpinnerLoader />
  }

  const renderComplete = () => {
    return (
      <StepComplete
        logoUrl={logoUrl}
        companyName={companyName}
        supportEmail={supportEmail}
        supportPhone={supportPhone}
      />
    )
  }

  const renderSteps = () => {
    return (
      <LayoutDefault
        aside={
          <Sidebar>
            <Logo logoUrl={logoUrl} companyName={companyName} />
            <OrderSummary />
          </Sidebar>
        }
        main={
          <div>
            <h1 tw="font-semibold mb-4 text-3xl">Checkout</h1>
            <StepNav
              steps={steps}
              activeStep={activeStep}
              onStepChange={setActiveStep}
              lastActivable={lastActivableStep}
            />
            <StepCustomer
              tw="mb-6"
              isActive={activeStep === "Customer"}
              onToggleActive={() => setActiveStep("Customer")}
            />
            <StepShipping
              tw="mb-6"
              isActive={activeStep === "Shipping"}
              onToggleActive={() => setActiveStep("Shipping")}
            />
            <StepPayment
              tw="mb-6"
              isActive={activeStep === "Payment"}
              onToggleActive={() => setActiveStep("Payment")}
            />
          </div>
        }
      />
    )
  }

  return ctx.isComplete ? renderComplete() : renderSteps()
}

const Sidebar = styled.div`
  ${tw`pl-20`}
`
