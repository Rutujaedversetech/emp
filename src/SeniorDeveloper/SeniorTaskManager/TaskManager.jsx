import React from 'react';
// import Paper from '@material-ui/core/Paper';
import './TaskManager.css';
import { Box, Button, Heading } from '@chakra-ui/react';

export default function TaskManager() {
    return (
        <Box className="task-manager" bg='' boxShadow='0px 5px 20px 0px #00000026' borderLeftRadius='4'>
            {/* <Paper elevation={3}> */}
            <Box bg='' p='4'>
    <Heading size='md' textAlign={'center'}>Task Manager</Heading>

    </Box>
                <Box className="task-btn-cont">
                    <Box className="task-btn-cont-1">
                        <Button className="task-btn">
                            My Task
                        </Button>
                    </Box>
                    <Box className="task-btn-cont-1">
                        <Button className="task-btn">
                        Emp completed Task
                        </Button>
                    </Box>
                    <Box className="task-btn-cont-1">
                        <Button className="task-btn">
                            My Completed Task
                        </Button>
                    </Box>
                    <Box className="task-btn-cont-1">
                        <Button className="task-btn">
                        Employee  Task

                        </Button>
                    </Box>
                </Box>
            {/* </Paper> */}
        </Box>
    )
}
