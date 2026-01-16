import { Link } from "react-router-dom";
import { getFeaturedCollections, getAllCollections } from "@/data/collections";
import Breadcrumb from "@/components/common/Breadcrumb";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CollectionsIndex = () => {
  const featuredCollections = getFeaturedCollections();
  const otherCollections = getAllCollections().filter(c => !c.featured);

  const breadcrumbItems = [
    { label: 'Collections' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Football Shirt Collections
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Browse our curated collections of football shirts. From vintage classics to modern player versions, find exactly what you're looking for.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Collections */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCollections.map(collection => (
              <Link key={collection.id} to={`/collections/${collection.slug}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  {collection.heroImage && (
                    <div className="w-full h-48 bg-secondary relative overflow-hidden">
                      <img 
                        src={collection.heroImage} 
                        alt={collection.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      {collection.icon && (
                        <div className="absolute bottom-4 left-4 text-4xl">
                          {collection.icon}
                        </div>
                      )}
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="group-hover:text-primary transition-colors text-xl">
                        {collection.icon && !collection.heroImage && (
                          <span className="mr-2">{collection.icon}</span>
                        )}
                        {collection.name}
                      </CardTitle>
                      <Badge variant="secondary">Featured</Badge>
                    </div>
                    <CardDescription className="line-clamp-3">
                      {collection.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-primary font-medium group-hover:underline">
                      Browse Collection →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Other Collections */}
        {otherCollections.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8">More Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherCollections.map(collection => (
                <Link key={collection.id} to={`/collections/${collection.slug}`}>
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors flex items-center gap-2">
                        {collection.icon && (
                          <span className="text-2xl">{collection.icon}</span>
                        )}
                        <span className="text-base">{collection.name}</span>
                      </CardTitle>
                      <CardDescription className="line-clamp-2 text-sm">
                        {collection.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionsIndex;

