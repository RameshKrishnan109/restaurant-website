import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../styles/Button'
import { Flex, Heading, Image, Text, Center, Input, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react'

import { NavbarContext } from "../context/NavbarContext";
import { useContext } from 'react'

function MenuItemCard(props) {

    const { AddCartItem } = useContext(NavbarContext);

    const [quantity, setQuantity] = useState(0);

    return (
        <Flex p='20px' direction={{ base: 'column', md: 'row' }} bgColor='white' shadow='md' gap='30px' cursor='pointer' borderRadius='10px' border='1px solid' borderColor='blackAlpha.100'>
            <Image boxSize={{ base: '100%', md: '130px' }} src={props.image} borderRadius='15px' />
            <Flex direction='column' gap='15px'>
                <Flex direction={{ base: 'column', md: 'row' }} gap = {{base:'5px', md:'0'}} justify='space-between'>
                    <Heading size='md'>{props.title}</Heading>
                    <Text color='#35b8be' fontWeight='500' fontSize='16px'>$ {props.price} USD</Text>
                </Flex>
                <Text color='gray.600'>{props.description}</Text>
                <Flex gap='8px'>
                    <NumberInput defaultValue={0} min={0} w='80px' value={quantity} onChange={(value) => {
                        if (value == "") {
                            setQuantity(0);
                        }else{
                            setQuantity(parseInt(value));
                        }
                    }} onBlur={(e)=>{
                        if (e.target.value == "") {
                            setQuantity(0);
                        }
                    }}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <Button style={{ width: '120px', padding: '10px', fontSize: '15px', borderRadius: '5px' }} onClick={() => {
                        if (quantity > 0) {
                            AddCartItem({
                                image: props.image,
                                name: props.title,
                                price: parseFloat(props.price),
                                quantity: quantity
                            })
                        }
                    }}>Add to Cart</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default MenuItemCard