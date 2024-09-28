import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import About from "@/components/About";
import Services from "@/components/Services";
import Pull from "@/components/Pull";
import Choose from "@/components/Choose";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Main/>
      <About/>
      <Services/>
      <Pull/>
      <Choose/>
    </>
  );
}
