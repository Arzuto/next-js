import dynamic from "next/dynamic"
import Link from "next/link"

const LayoutComponent = dynamic(() => import("@/layout"))

export default function Notes({notes}) {

  console.log("Note data =>",notes)
 return (
  <>
    <LayoutComponent metaTitle="Notes" metaDescription="Ini adalah halaman Notes">{
      notes.data.map((item)=>(
        <div>
          <Link href={`/notes/${item.id}`}>{item.title}</Link>
        </div>
      ))
    }</LayoutComponent> 
  </>
 );
}

export async function getStaticProps() {
  const res = await fetch("https://paace-f178cafcae7b.nevacloud.io/api/notes")
  const notes = await res.json()
  return { props: { notes }, revalidate:10 }
}