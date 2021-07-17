import React, { useState } from 'react'
import './style.css';
import { Redirect } from "react-router-dom";
import { InputGroup, InputRightElement, Input, InputLeftAddon } from "@chakra-ui/input"
import { Button, SimpleGrid, Box } from "@chakra-ui/react";
const SignUp = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const [redirect, setRedirect] = useState(false);
    const redirectfun = () => {
        if (redirect)
            return (
                <Redirect to='/login'></Redirect>
            )
    }
    const signupform = () => {
        return (
            <div className="form-style">
                <SimpleGrid columns={[5, null, 1]} spacing="40px">
                    <Input
                        variant="flushed"
                        width="25rem"
                        placeholder="fullname"
                        focusBorderColor="white" />
                    <Input
                        variant="flushed"
                        width="25rem"
                        placeholder="email"
                        focusBorderColor="white" />
                    <InputGroup>
                        <InputLeftAddon color="black" children="+91" />
                        <Input type="tel" placeholder="phone number" focusBorderColor="white" />
                    </InputGroup>
                    <InputGroup size="md">
                        <Input
                            pr="3.5rem"
                            variant="flushed"
                            width="25rem"
                            type={show ? "text" : "password"}
                            placeholder="Enter password"
                            focusBorderColor="white"
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" color="black" onClick={handleClick}>
                                {show ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Box
                        as="button"
                        height="34px"
                        lineHeight="1.2"
                        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                        px="8px"
                        borderRadius="10px"
                        fontSize="14px"
                        fontWeight="semibold"
                        bg="#dde0e2"
                        color="#0c0c0c"
                        _hover={{ bg: "#ebedf0" }}
                        _active={{
                            bg: "#dddfe2",
                            transform: "scale(0.98)",
                            borderColor: "#dddddd",
                        }}
                        _focus={{
                            boxShadow:
                                "0 0 1px 2px #e3e6ebee, 0 1px 1px #47444425"
                        }}
                    >
                        SIGN UP
            </Box>
                    <Button colorScheme="white" variant="outline" fontWeight="light" borderRadius="10px" borderWidth="1.8px" onClick={() => { setRedirect(true); }}>
                        ALDREADY A USER? SIGN IN
                    </Button>
                </SimpleGrid>
            </div>);

    }
    return (
        <div>
            {signupform()}
            {redirectfun()}
        </div>
    )
}

export default SignUp

