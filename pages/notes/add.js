import dynamic from "next/dynamic"
import {
  Grid,
  GridItem,
  Card,
  Heading,
  Text,
  Button,
  Input,
  Textarea
} from '@chakra-ui/react'
import { useState } from "react"
import { useRouter } from "next/router"

const LayoutComponent = dynamic(() => import("@/layout"))

export default function AddNotes() {
  const router = useRouter();
  const [notes,setNotes] = useState({
    title: "",
    description: "",
  });  

  const HandleSubmit = async () => {
    try {
     const response = await fetch(
      "https://paace-f178cafcae7b.nevacloud.io/api/notes",
      {
       method: "POST",
       headers: {
        "Content-Type": "application/json",
       },
       body: JSON.stringify(notes),
      }
     );
     const result = await response.json();
     if(result?.success){
      router.push('/notes')
     }
    } catch (error) {

    }
   };
 return (
  <>
    <LayoutComponent metaTitle="Notes" metaDescription="Ini adalah halaman Tambah Notes">
      <Card margin="5" padding="5">
        <Grid gap="5">
          <Heading>Add Notes</Heading>
          <GridItem>
            <Text>Title</Text>
            <Input onChange={(event) => setNotes({...notes,title: event.target.value})} type="text"/>
          </GridItem>
          <GridItem>
            <Text>Description</Text>
            <Textarea onChange={(event) => setNotes({...notes,description: event.target.value})} />
          </GridItem>
          <GridItem>
            <Button colorScheme="blue" onClick={() => HandleSubmit()}>Submit</Button>
          </GridItem>
        </Grid>
      </Card>
    </LayoutComponent> 
  </>
 )
}

// export async function getStaticProps() {
//   const res = await fetch("https://paace-f178cafcae7b.nevacloud.io/api/notes")
//   const notes = await res.json()
//   return { props: { notes }, revalidate:10 }
// }