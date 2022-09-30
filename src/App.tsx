import * as C from "@chakra-ui/react"
import { useState } from 'react';
import Step from "./components/Step";

import FormAccount from './components/FormAccount'
import FormPersonalDetails from './components/FormPersonalDetails'
import FormAddress from './components/FormAddress'

function App() {
  const [step, setStep] = useState<number>(1)

  const getCompStep = () => {
    switch (step) {
      case 1: return <FormAccount/>
      case 2: return <FormPersonalDetails/>
      case 3: return <FormAddress/>
      default: return <FormAccount/>
    }
  }

  const validationFields = () => {
    const erroMsg = document.querySelectorAll(".form-cadastro-error")
     if (erroMsg.length > 0) {
       document.getElementById("btn")!.ariaDisabled 
     } else {
       step !== 3 && setStep(step + 1)
     }
  }

  const Steps = [1, 2, 3]; 

  return (
    <C.Flex h="100vh" align="center" justify="center">

      <C.Center maxW={500} w="100%" py={10} px={2} flexDir="column">

        <C.HStack spacing={4}>
          {Steps.map((item) => (
            <Step key={item} index={item} active={step === item} item={item}/>          
          ))}
        </C.HStack>

        <C.Divider my={4} borderColor="white"/>
        
        <C.Box w="80%">{getCompStep()}</C.Box>

        <C.HStack spacing={10} mt={4}>
          <C.Button bg="gray.300" onClick={() => setStep(step - 1)} disabled={step === 1}>
            Voltar
          </C.Button>

          <C.Button id="btn" colorScheme="blue" onClick={() => validationFields()}>
            {step === 3 ? "Enviar" : "Proximo"}
          </C.Button>
        </C.HStack>
      </C.Center>
    </C.Flex>
  )
}

export default App
