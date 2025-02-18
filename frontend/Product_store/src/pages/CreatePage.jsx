import { Box, Heading, Input, Button, useColorModeValue, VStack,Container} from '@chakra-ui/react';
import React, { useState } from 'react'
import { useProductStore } from '../store/product';

const CreatePage = () => {
  const [newProduct, setnewProduct] =useState({
    name:"",
    price:"",
    image:"",
  });
  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const {success,message} = await createProduct(newProduct)
    console.log("Success", success);
    console.log("Message", message );
  };

  return (<Container maxW={"container.sm"}>
    <VStack spacing={8}>
     <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
      Create New Product
     </Heading>
     <Box w={"full"} bg ={useColorModeValue("white","grey.800")} p={6} shadow={"md"}>
      <VStack spacing={4}>
        <Input
         placeholder ="Product Name"
         name= "name"
         value={newProduct.name}
         onChange={(e)=>setnewProduct({...newProduct,name:e.target.value})}
        />
        <Input
         placeholder ="Price"
         price= "price"
         type="number"
         value={newProduct.price}
         onChange={(e)=>setnewProduct({...newProduct,price:e.target.value})}
        />
        <Input
         placeholder ="Image"
         image= "image"
         value={newProduct.image}
         onChange={(e)=>setnewProduct({...newProduct,image:e.target.value})}
        />
        <Button colorScheme="blue" onClick={handleAddProduct} w="full">Add Product</Button>
      </VStack>
     </Box>
    </VStack>
  </Container>
  )
}

export default CreatePage
