import React from "react";

import {
   FaFacebookF,
   FaTwitter,
   FaInstagram,
   FaYoutube,
   FaLinkedinIn,
} from "react-icons/fa";
import { Box, Button, Grid, GridItem, Image, Img, Input, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import emailjs from 'emailjs-com'
import { useState } from "react";


const initState = {
   user_email: ""
}

const Footer = () => {
   const [email, setMail] = useState(initState);

   return (
      <Box>
         <Box bg='orange' padding={2} >
            <Box bg='white' margin={4}>
               <Text textAlign='center' fontSize='20px' color='orange' padding={2}   >
                  big store for little ones
               </Text>
            </Box>
         </Box>





         <Box bg='rgb(135,206,250)' p={{ base: '4', sm: '4', md: '10', lg: '10' }} display={{ base: 'block', sm: 'block', md: 'block', lg: 'flex' }} gap={10} width='100%' >
            <Box width={{ base: '100%', sm: '100%', md: '50%', lg: "30%" }} >
               <Image width='70%' src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png"></Image>
               <Image padding={4} src="https://cdn.fcglcdn.com/brainbees/images/intellitots-franchise-footer-banner.webp"></Image>
               <Box mt={4} position='relative' >
               </ Box>
            </Box>
            <Grid mt={4} display={{ base: 'none', sm: 'none', md: 'grid', lg: 'grid' }} templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)', lg: 'repeat(5, 1fr)' }} gap={6}>
               <GridItem >
                  <Text textAlign='left' fontWeight='bold'>CATEGORIES</Text>
                  <Box mt={4} borderRight='1px solid' borderColor='lightgrey' textAlign='left' >
                     <Stack>
                        <Text>Clothing & Fashion</Text>
                        <Text>Toys</Text>
                        <Text>Books & CDs</Text>
                        <Text>School supplies</Text>
                        <Text>Birthday Party Supplies</Text>
                        <Text>Bath & Skin care</Text>
                        <Text>Baby Gear</Text>
                        <Text>Nursery</Text>
                        <Text>Moms & Maternity</Text>
                        <Text>Gifts</Text>
                        <Text>Preschool Admissions</Text>
                     </Stack>
                  </Box>
               </GridItem>
               <GridItem >
                  <Text textAlign='left' fontWeight='bold'>FIRST CRY PARENTING</Text>
                  <Box mt={4} borderRight='1px solid ' borderColor='lightgrey' textAlign='left' >
                     <Stack>
                        <Text>Getting Pregnant</Text>
                        <Text>Pregnancy</Text>
                        <Text>Baby</Text>
                        <Text>Toddler</Text>
                        <Text>Big kid</Text>
                        <Text>Vaccination</Text>
                        <Text>Growth Tracker</Text>
                        <Text>Baby Names</Text>
                        <Text>Coloring Pages</Text>
                     </Stack>
                  </Box>
               </GridItem>
               <GridItem >
                  <Text textAlign='left' fontWeight='bold'  >SHIPPING & POLICIES</Text>
                  <Box mt={4} borderRight='1px solid' borderColor='lightgrey' textAlign='left' >
                     <Stack>
                        <Text>Payments</Text>
                        <Text>Shipping Policy</Text>
                        <Text>Cancellation Policy</Text>
                        <Text>Terms Of Use</Text>
                        <Text>Privacy policy</Text>
                        <Text>Next day & Same day delivery</Text>
                     </Stack>
                  </Box>
               </GridItem>
               <GridItem>
                  <Text textAlign='left' fontWeight='bold' >OUR APPS</Text>
                  <Box mt={4} borderRight='1px solid' borderColor='lightgrey' textAlign='left'>
                     <Stack>
                        <Text>FistCry India: Shopping & Parenting</Text>
                        <Text>FirstCry India: Shopping
                           & Parenting iOS</Text>
                     </Stack>
                  </Box>
               </GridItem>
               <GridItem>
                  <Text textAlign='left' fontWeight='bold' >SHOP INTERNATIONAL</Text>
                  <Box mt={4} borderColor='lightgrey' textAlign='left' >
                     <Stack>
                        <Text>FirstCry UAE</Text>
                        <Text>FirstCry KSA</Text>
                        <Text>FirstCry KSA(English)</Text>
                        <Text>FirstCry Arabia: Shopping & Parenting iOS</Text>
                     </Stack>
                  </Box>
               </GridItem>
            </Grid>
         </Box>
         <Text bg='rgba(135,206,250)' fontWeight='bold' >CONNECT WITH US</Text>
         <Box justifyContent='space-between' borderBottom='1px solid lightgrey' width='100%' >

            <Text p={3} bg='rgba(135,206,250)' fontSize='12px' fontWeight='bold'>Newborn & Baby Products Online Shopping in India</Text>
            <Text bg='rgba(135,206,250)' fontSize='12px'>Shopping for newborn and baby products online in India is a convenient and efficient way for parents to purchase everything they need for their little ones. Online retailers offer a wide variety of products at competitive prices, and parents can shop from the comfort of their own homes. Popular items include diapers, wipes, formula, clothing, and baby gear such as strollers and car seats. It's important to choose a reputable retailer with a wide selection of products and fast shipping, and reading reviews can provide helpful information. With the accessibility of online shopping, parents can focus on enjoying their time with their little ones.</Text>

            <Text p={3} bg='rgba(135,206,250)' fontWeight='bold' fontSize='12px'>Online Shopping for Kids at FirstCry.com</Text>
            <Text bg='rgba(135,206,250)' fontSize='12px'>FirstCry.com is an online shopping website in India that specializes in products for children and babies. It offers a wide range of products, including clothing, toys, diapers, feeding supplies, and baby gear. The website features products from many popular brands and also has its own private label brand. FirstCry.com offers fast and reliable shipping and has a user-friendly website with features such as easy payment options and product reviews. The website also has a loyalty program for frequent shoppers, as well as regular sales and promotions to help parents save money on their purchases.</Text>

            <Text p={3} bg='rgba(135,206,250)' fontWeight='bold' fontSize='12px'>FirstCry India Offers</Text>
            <Text bg='rgba(135,206,250)' fontSize='12px'>FirstCry India offers a range of discounts, promotions, and loyalty programs to help parents save money on their purchases. They regularly run sales and promotions, such as seasonal discounts and limited-time offers on specific products. They also have a loyalty program called FirstCry Intellitots, which rewards frequent shoppers with points that can be redeemed for discounts on future purchases. Additionally, they offer free shipping on orders above a certain amount, and easy payment options including cash on delivery. FirstCry also has a referral program that rewards customers for referring their friends and family to the website.
            </Text>
         </Box>
      </Box>



   );
};

export default Footer;