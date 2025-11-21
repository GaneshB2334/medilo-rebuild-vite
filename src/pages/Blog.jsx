import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
      title: "Understanding Heart Health: Prevention Tips",
      excerpt: "Learn essential tips for maintaining a healthy heart and preventing cardiovascular diseases.",
      date: "March 15, 2024",
      author: "Dr. Sarah Johnson"
    },
    {
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      title: "The Importance of Regular Health Checkups",
      excerpt: "Discover why routine medical examinations are crucial for early disease detection.",
      date: "March 12, 2024",
      author: "Dr. Michael Chen"
    },
    {
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=400&h=300&fit=crop",
      title: "Mental Health Awareness in Modern Medicine",
      excerpt: "Exploring the growing importance of mental health care in comprehensive wellness.",
      date: "March 10, 2024",
      author: "Dr. Emily Roberts"
    },
    {
      image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=400&h=300&fit=crop",
      title: "Nutrition and Its Impact on Overall Health",
      excerpt: "How proper nutrition plays a vital role in disease prevention and health maintenance.",
      date: "March 8, 2024",
      author: "Dr. David Martinez"
    },
    {
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=300&fit=crop",
      title: "Advances in Minimally Invasive Surgery",
      excerpt: "Latest innovations in surgical techniques that reduce recovery time and complications.",
      date: "March 5, 2024",
      author: "Dr. Lisa Anderson"
    },
    {
      image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&h=300&fit=crop",
      title: "Pediatric Care: Supporting Child Development",
      excerpt: "Essential guidelines for ensuring optimal health and development in children.",
      date: "March 3, 2024",
      author: "Dr. James Wilson"
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[hsl(var(--medical-blue-light))] to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Medical Blog & News</h1>
            <p className="text-xl text-muted-foreground">
              Stay informed with the latest healthcare insights, medical news, and wellness tips from our experts
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 hover:text-[hsl(var(--medical-blue))] cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--medical-blue-light))] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest health tips and medical news delivered to your inbox
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-input"
              />
              <button className="bg-[hsl(var(--medical-blue))] text-white px-6 py-3 rounded-lg hover:bg-[hsl(var(--medical-accent))] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
