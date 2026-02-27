import Navbar from"./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"
function App() {


  return (
  <>
    <Navbar />
    <div className='cards'>
      <Card  title="Card 1" description="This is the first card."/>
      <Card title="Card 2" description="This is the second card."/>
      <Card title="Card 3" description="This is the third card."/>
      <Card title="Card 4" description="This is the fourth card."/>
    </div>
    <Footer />


  </>
  )
}

export default App
