import {ChakraBaseProvider} from "@chakra-ui/react";
import Todo from "./components/Todo"

const Example = () => {
    return (
        <>
            <ChakraBaseProvider>
                <Todo/>
            </ChakraBaseProvider>
        </>
    );
};

export default Example;
