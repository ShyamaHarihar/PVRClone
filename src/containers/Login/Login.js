import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';
import { InputGroup, InputRightElement, Input } from "@chakra-ui/input"
import { Button, SimpleGrid, Box } from "@chakra-ui/react";

const Login = () => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show)
    return (
        <div className="form-style">
            <SimpleGrid columns={[4, null, 1]} spacing="40px">
                <Input
                    variant="flushed"
                    width="30rem"
                    placeholder="email"
                    focusBorderColor="white" />
                <InputGroup size="md">
                    <Input
                        pr="3.5rem"
                        variant="flushed"
                        width="30rem"
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
                    borderRadius="5px"
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
                    Login
                </Box>
                <Button colorScheme="white" variant="outline">
                    Don't have an Account?&nbsp;&nbsp;<Link to='/signup'>Sign up</Link>
                </Button>
            </SimpleGrid>
        </div>
    )
}

export default Login;
