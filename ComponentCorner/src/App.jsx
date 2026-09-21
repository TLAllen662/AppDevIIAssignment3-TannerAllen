import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'

function App() {
  return (
    <main>
      <Header storeName="ComponentCorner" />
      <Hero
        title="Smart components for modern shopping"
        subtitle="Find thoughtful tools and resources for building better digital experiences."
        ctaText="Explore products"
      />
      <h1>ComponentCorner Products</h1>
      <section id="products" className="product-grid" aria-label="Featured products">
        <ProductCard
          name="Component Starter Kit"
          price="$24.99"
          image="https://placehold.co/600x400?text=Starter+Kit"
          description="A practical collection of reusable UI building blocks."
        />
        <ProductCard
          name="Design Tokens Handbook"
          price="$18.50"
          image="https://placehold.co/600x400?text=Handbook"
          description="A concise guide to creating a consistent visual system."
        />
        <ProductCard
          name="Accessibility Audit Pack"
          price="$32.00"
          image="https://placehold.co/600x400?text=Audit+Pack"
          description="Helpful checklists for building inclusive interfaces."
        />
      </section>
      <Footer
        storeName="ComponentCorner"
        email="hello@componentcorner.example"
        phone="+1 (555) 010-2026"
        address="123 Component Lane, Interface City"
      />
    </main>
  )
}

export default App
