
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts, getNewArrivals } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";

const Home = () => {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black to-brand-black/70 z-10"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Official Football Jerseys
            </h1>
            <p className="text-xl mb-8">
              Authentic shirts from your favorite teams and nations.
              Premium quality with worldwide shipping.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-brand-orange hover:bg-orange-600 text-white">
                <Link to="/catalog">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-brand-black">
                <Link to="/catalog?category=national-teams">National Teams</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">New Arrivals</h2>
            <Badge className="bg-brand-orange hover:bg-orange-600">New</Badge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <div key={product.id} className="relative">
                <div className="absolute top-3 right-3 z-10">
                  <Badge className="bg-brand-orange hover:bg-orange-600">New</Badge>
                </div>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild className="bg-brand-orange hover:bg-orange-600 text-white">
              <Link to="/catalog?filter=new">View All New Arrivals</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop By League</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link 
              to="/catalog?category=national-teams" 
              className="block aspect-square relative rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors z-10"></div>
              <img src="/placeholder.svg" alt="National Teams" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-white font-bold text-lg">National Teams</span>
              </div>
            </Link>
            
            <Link 
              to="/catalog?category=premier-league" 
              className="block aspect-square relative rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors z-10"></div>
              <img src="/placeholder.svg" alt="Premier League" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-white font-bold text-lg">Premier League</span>
              </div>
            </Link>
            
            <Link 
              to="/catalog?category=la-liga" 
              className="block aspect-square relative rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors z-10"></div>
              <img src="/placeholder.svg" alt="La Liga" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-white font-bold text-lg">La Liga</span>
              </div>
            </Link>
            
            <Link 
              to="/catalog?category=serie-a" 
              className="block aspect-square relative rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors z-10"></div>
              <img src="/placeholder.svg" alt="Serie A" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-white font-bold text-lg">Serie A</span>
              </div>
            </Link>
            
            <Link 
              to="/catalog?category=bundesliga" 
              className="block aspect-square relative rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors z-10"></div>
              <img src="/placeholder.svg" alt="Bundesliga" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-white font-bold text-lg">Bundesliga</span>
              </div>
            </Link>
            
            <Link 
              to="/catalog?category=ligue-1" 
              className="block aspect-square relative rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors z-10"></div>
              <img src="/placeholder.svg" alt="Ligue 1" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-white font-bold text-lg">Ligue 1</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Jerseys</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild className="bg-brand-orange hover:bg-orange-600 text-white">
              <Link to="/catalog">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join our Newsletter</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Subscribe to get special offers, free giveaways, and new arrivals notifications.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brand-orange text-black"
            />
            <Button className="bg-brand-orange hover:bg-orange-600 text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
