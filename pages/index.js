import Layout from "@/layout";
import { useEffect } from "react"

export default function Main() {
  useEffect(() => {
    fetch("/api/hello")
    .then((res) => res.json())
    .then((res) => console.log("response =>", res))
    .catch((err) => console.log("err => ",err))
  })
 return (
  <div>
    <Layout metaTitle="Home" metaDescription="Ini adalah halaman menu utama">
      <p>Home</p>
    </Layout> 
  </div>
 );
}
 