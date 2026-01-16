import { useParams, Link } from "react-router-dom";
import { getClubBySlug } from "@/data/clubs";
import { getAllProducts } from "@/data/products";
import { useState, useMemo } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy } from "lucide-react";

const ClubPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const club = getClubBySlug(slug || '');
  const allProducts = getAllProducts();
  
  const [selectedKitType, setSelectedKitType] = useState<string>('all');

  // Filter products by club
  const clubProducts = useMemo(() => {
    if (!club) return [];
    
    // Normalize club name for matching (remove FC, AC, etc.)
    const normalizeClubName = (name: string) => {
      return name.toLowerCase()
        .replace(/^fc\s+/i, '')
        .replace(/^ac\s+/i, '')
        .replace(/^olympique\s+/i, '')
        .replace(/\s+fc$/i, '')
        .replace(/\s+hotspur$/i, '')
        .trim();
    };
    
    const normalizedClubName = normalizeClubName(club.name);
    
    return allProducts.filter(product => {
      const normalizedProductTeam = normalizeClubName(product.team);
      
      // Check for exact match or partial match
      return normalizedProductTeam === normalizedClubName ||
             normalizedProductTeam.includes(normalizedClubName) ||
             normalizedClubName.includes(normalizedProductTeam);
    });
  }, [club, allProducts]);

  // Filter by kit type
  const filteredProducts = useMemo(() => {
    if (selectedKitType === 'all') return clubProducts;
    return clubProducts.filter(product => product.kitType === selectedKitType);
  }, [clubProducts, selectedKitType]);

  // Get unique kit types available for this club
  const availableKitTypes = useMemo(() => {
    const types = new Set(clubProducts.map(p => p.kitType));
    return Array.from(types);
  }, [clubProducts]);

  if (!club) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Club Not Found</h1>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the club you're looking for.
          </p>
          <Button asChild>
            <Link to="/clubs">Browse All Clubs</Link>
          </Button>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Clubs', href: '/clubs' },
    { label: club.league, href: `/leagues/${club.leagueSlug}` },
    { label: club.name }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[300px] md:h-[400px] flex items-center"
        style={{ 
          background: `linear-gradient(135deg, ${club.colors[0]} 0%, ${club.colors[1] || club.colors[0]} 100%)` 
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="mt-8 flex items-center gap-6">
            {club.logo && (
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full p-4 flex items-center justify-center">
                <img src={club.logo} alt={`${club.name} logo`} className="w-full h-full object-contain" />
              </div>
            )}
            
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{club.name}</h1>
              {club.nicknames && club.nicknames.length > 0 && (
                <p className="text-xl text-white/90 mb-2">{club.nicknames[0]}</p>
              )}
              <div className="flex flex-wrap gap-4 text-sm">
                {club.stadium && (
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {club.stadium}
                  </span>
                )}
                {club.founded && (
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Est. {club.founded}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Trophy className="h-4 w-4" />
                  {club.league}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Club Description */}
      {club.description && (
        <div className="bg-card py-8">
          <div className="container mx-auto px-4">
            <p className="text-lg text-muted-foreground max-w-4xl">
              {club.description}
            </p>
          </div>
        </div>
      )}

      {/* Products Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              {club.name} Shirts & Kits
            </h2>
            <p className="text-muted-foreground">
              {clubProducts.length} product{clubProducts.length !== 1 ? 's' : ''} available
            </p>
          </div>
        </div>

        {/* Kit Type Tabs */}
        <Tabs value={selectedKitType} onValueChange={setSelectedKitType} className="mb-8">
          <TabsList className="flex-wrap h-auto">
            <TabsTrigger value="all">
              All ({clubProducts.length})
            </TabsTrigger>
            {availableKitTypes.map(kitType => {
              const count = clubProducts.filter(p => p.kitType === kitType).length;
              return (
                <TabsTrigger key={kitType} value={kitType}>
                  {kitType} ({count})
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="relative">
                {product.featured && (
                  <div className="absolute top-3 right-3 z-10">
                    <Badge className="bg-primary">Featured</Badge>
                  </div>
                )}
                {product.format === 'Player Issue' && (
                  <div className="absolute top-3 left-3 z-10">
                    <Badge variant="secondary">Player Issue</Badge>
                  </div>
                )}
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg mb-4">
              No {selectedKitType !== 'all' ? selectedKitType.toLowerCase() : ''} shirts available for {club.name} at the moment.
            </p>
            <Button variant="outline" onClick={() => setSelectedKitType('all')}>
              View All Products
            </Button>
          </div>
        )}
      </div>

      {/* Related Clubs */}
      <div className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">More {club.league} Clubs</h2>
          <p className="text-muted-foreground mb-4">
            Explore shirts from other clubs in the {club.league}
          </p>
          <Button asChild>
            <Link to={`/leagues/${club.leagueSlug}`}>
              View All {club.league} Clubs →
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ClubPage;

