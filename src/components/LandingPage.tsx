import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Truck, 
  Package, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MessageSquare, 
  ChevronRight, 
  Search, 
  Calculator, 
  Globe, 
  Star, 
  Menu, 
  X,
  Send,
  AlertCircle,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Tracking', href: '#tracking' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-primary rounded-xl opacity-50"
            />
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-black text-xl shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              M
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-foreground text-background rounded-md flex items-center justify-center font-bold text-xs border-2 border-background">
              M
            </div>
          </div>
          <div className="flex flex-col -gap-1">
            <span className="text-xl font-black tracking-tighter leading-none group-hover:text-primary transition-colors">M&M</span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-50 leading-none">Logistics</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
          <Button size="sm" className="rounded-full px-6">Get a Quote</Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className="text-lg font-medium hover:text-primary transition-colors">
                    {link.name}
                  </a>
                ))}
                <Button className="w-full rounded-full">Get a Quote</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-primary/5 rounded-bl-[100px]" />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4 py-1 px-4 text-primary font-semibold">
              E-commerce Logistics Specialist
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
              Fast, Reliable Delivery for Your <span className="text-primary">E-commerce</span> Business
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              M&M Logistics provides end-to-end shipping solutions tailored for online retailers. 
              From warehouse to doorstep, we ensure your customers get their orders on time, every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="rounded-full px-8 gap-2">
                Start Shipping <ChevronRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                View Pricing
              </Button>
            </div>
            
            {/* Quick Tracking */}
            <div id="tracking" className="bg-card border rounded-2xl p-6 shadow-lg max-w-md">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Search className="w-4 h-4 text-primary" /> Track Your Shipment
              </h3>
              <div className="flex gap-2">
                <Input placeholder="Enter Tracking Number (e.g. MM-123456)" className="rounded-full" />
                <Button className="rounded-full px-6">Track</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Real-time updates for every mile of the journey.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-background">
              <img 
                src="https://picsum.photos/seed/logistics/800/600" 
                alt="Logistics" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Stats */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 z-20 bg-background p-4 rounded-2xl shadow-xl border flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Delivery Rate</p>
                <p className="font-bold">99.9% Success</p>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 z-20 bg-background p-4 rounded-2xl shadow-xl border flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Avg. Delivery</p>
                <p className="font-bold">24-48 Hours</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Last-Mile Delivery",
      description: "Efficient and friendly delivery directly to your customer's doorstep with real-time tracking."
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Warehousing & Fulfillment",
      description: "Secure storage and professional packing services to streamline your e-commerce operations."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "International Shipping",
      description: "Expand your reach globally with our reliable cross-border logistics and customs handling."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Cargo Insurance",
      description: "Peace of mind with comprehensive insurance coverage for all your valuable shipments."
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Logistics Solutions</h2>
          <p className="text-muted-foreground">
            We offer a wide range of services designed to help e-commerce businesses grow and succeed in a competitive market.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-card p-8 rounded-2xl border shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CalculatorSection = () => {
  const [weight, setWeight] = useState(1);
  const [distance, setDistance] = useState(10);
  const [cost, setCost] = useState(0);

  useEffect(() => {
    // Simple mock calculation
    const basePrice = 5;
    const weightFactor = weight * 1.5;
    const distanceFactor = distance * 0.2;
    setCost(basePrice + weightFactor + distanceFactor);
  }, [weight, distance]);

  return (
    <section id="calculator" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Estimate Your Shipping Cost</h2>
            <p className="text-muted-foreground mb-8">
              Transparency is key. Use our interactive calculator to get an instant estimate for your delivery. 
              No hidden fees, just straightforward pricing.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Real-time Quotes</h4>
                  <p className="text-sm text-muted-foreground">Get instant pricing based on current market rates.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Volume Discounts</h4>
                  <p className="text-sm text-muted-foreground">Special rates available for high-volume e-commerce partners.</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="shadow-xl border-2 border-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-primary" /> Shipment Calculator
              </CardTitle>
              <CardDescription>Fill in the details to see estimated costs.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Package Weight (kg)</Label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" 
                    min="1" 
                    max="50" 
                    value={weight} 
                    onChange={(e) => setWeight(parseInt(e.target.value))}
                    className="flex-1 accent-primary"
                  />
                  <span className="font-bold w-12 text-right">{weight}kg</span>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Delivery Distance (km)</Label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" 
                    min="1" 
                    max="500" 
                    value={distance} 
                    onChange={(e) => setDistance(parseInt(e.target.value))}
                    className="flex-1 accent-primary"
                  />
                  <span className="font-bold w-12 text-right">{distance}km</span>
                </div>
              </div>
              <Separator />
              <div className="flex justify-between items-center p-4 bg-primary/5 rounded-xl">
                <span className="font-medium">Estimated Total:</span>
                <span className="text-3xl font-bold text-primary">${cost.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full rounded-full py-6 text-lg">Book Shipment Now</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      title: "Real-time Tracking",
      desc: "State-of-the-art GPS tracking for every single package.",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      title: "24/7 Support",
      desc: "Our dedicated team is always here to help you and your customers.",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: "Secure Handling",
      desc: "Advanced security protocols to ensure package safety.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Flexible Scheduling",
      desc: "Pickups and deliveries that work around your business hours.",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-white rounded-full" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Why E-commerce Leaders Choose M&M Logistics
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    {f.icon}
                  </div>
                  <h4 className="text-xl font-bold">{f.title}</h4>
                  <p className="text-primary-foreground/70 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://picsum.photos/seed/warehouse/800/800" 
                alt="Warehouse" 
                className="w-full aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white text-primary p-8 rounded-3xl shadow-2xl hidden md:block">
              <p className="text-4xl font-bold mb-1">10M+</p>
              <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Packages Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CEO, TrendyThreads",
      content: "M&M Logistics transformed our shipping process. Our customer satisfaction scores skyrocketed after we switched to their last-mile delivery.",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      name: "Michael Chen",
      role: "Founder, TechGizmo",
      content: "The real-time tracking is a game changer. Our customers love knowing exactly where their orders are. Highly recommended!",
      avatar: "https://i.pravatar.cc/150?u=michael"
    },
    {
      name: "Emma Rodriguez",
      role: "Operations Manager, EcoHome",
      content: "Reliable, professional, and friendly. They handle our fragile items with extreme care. The best logistics partner we've had.",
      avatar: "https://i.pravatar.cc/150?u=emma"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Trusted by 500+ Companies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-none shadow-md">
              <CardHeader>
                <div className="flex gap-1 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="italic text-muted-foreground">"{t.content}"</p>
              </CardHeader>
              <CardFooter className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={t.avatar} />
                  <AvatarFallback>{t.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const CoverageMap = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Global Reach, Local Expertise</h2>
          <p className="text-muted-foreground">
            We deliver to over 150 countries with a network of 5,000+ local delivery partners.
          </p>
        </div>
        <div className="relative bg-primary/5 rounded-[40px] p-8 md:p-16 border overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Globe className="w-full h-full text-primary" strokeWidth={0.5} />
          </div>
          <div className="relative z-10 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-background/60 backdrop-blur-sm rounded-3xl border shadow-sm">
              <p className="text-4xl font-bold text-primary mb-2">150+</p>
              <p className="font-medium">Countries Covered</p>
            </div>
            <div className="p-8 bg-background/60 backdrop-blur-sm rounded-3xl border shadow-sm">
              <p className="text-4xl font-bold text-primary mb-2">5,000+</p>
              <p className="font-medium">Delivery Partners</p>
            </div>
            <div className="p-8 bg-background/60 backdrop-blur-sm rounded-3xl border shadow-sm">
              <p className="text-4xl font-bold text-primary mb-2">24/7</p>
              <p className="font-medium">Global Monitoring</p>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <Button size="lg" className="rounded-full px-10">Check Coverage in Your Area</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactAndComplaints = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              Have questions about our services or need a custom quote? Our team is ready to assist you.
            </p>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Partnership Inquiry" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" />
              </div>
              <Button className="w-full rounded-full py-6">Send Message</Button>
            </form>
            
            <div className="mt-12 grid sm:grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold">Call Us</p>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold">Email Us</p>
                  <p className="text-sm text-muted-foreground">hello@mmlogistics.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Complaints & FAQ */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Support & Feedback</h2>
            <Tabs defaultValue="faq" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="faq">Common Questions</TabsTrigger>
                <TabsTrigger value="complaints">File a Complaint</TabsTrigger>
              </TabsList>
              <TabsContent value="faq">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How long does international shipping take?</AccordionTrigger>
                    <AccordionContent>
                      Typically 5-10 business days depending on the destination and customs processing.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Do you offer same-day delivery?</AccordionTrigger>
                    <AccordionContent>
                      Yes, same-day delivery is available in major metropolitan areas for orders placed before 10 AM.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What happens if a package is lost?</AccordionTrigger>
                    <AccordionContent>
                      All our shipments are insured. If a package is confirmed lost, we provide full reimbursement or a replacement shipment.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Can I change the delivery address?</AccordionTrigger>
                    <AccordionContent>
                      Yes, you can update the delivery address through our tracking portal as long as the package hasn't reached the final delivery hub.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              <TabsContent value="complaints">
                <Card className="border-destructive/20 bg-destructive/5">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-destructive" /> Complaint Submission
                    </CardTitle>
                    <CardDescription>We take your feedback seriously. Please let us know what went wrong.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="tracking-id">Tracking ID</Label>
                      <Input id="tracking-id" placeholder="MM-XXXXXX" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="complaint-type">Issue Type</Label>
                      <select className="w-full p-2 rounded-md border bg-background text-sm">
                        <option>Delayed Delivery</option>
                        <option>Damaged Package</option>
                        <option>Incorrect Address</option>
                        <option>Driver Behavior</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="complaint-desc">Details</Label>
                      <Textarea id="complaint-desc" placeholder="Please describe the issue in detail..." />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="destructive" className="w-full rounded-full">Submit Complaint</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-background border-t pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-black text-xl">
                M
              </div>
              <span className="text-xl font-black tracking-tighter">M&M Logistics</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering e-commerce businesses with world-class logistics solutions. 
              Reliable, fast, and customer-focused delivery services across the globe.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
                <Globe className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
                <Mail className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
                <Phone className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Last-Mile Delivery</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Warehousing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Fulfillment</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Freight</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">Get the latest logistics insights and offers.</p>
            <div className="flex gap-2">
              <Input placeholder="Email Address" className="rounded-full" />
              <Button size="icon" className="rounded-full shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="flex flex-col md:row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2026 M&M Logistics. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hello! I am M&M Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', text: input }]);
    setInput('');
    
    // Mock bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: "Thanks for your message! One of our agents will be with you shortly. In the meantime, you can track your package using the 'Tracking' section on our homepage." 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-card border shadow-2xl rounded-2xl w-80 sm:w-96 mb-4 overflow-hidden flex flex-col h-[500px]"
          >
            <div className="bg-primary p-4 text-primary-foreground flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-sm">M&M Support</p>
                  <p className="text-[10px] opacity-80 uppercase tracking-widest">Online</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-primary-foreground hover:bg-white/10">
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      m.role === 'user' 
                        ? 'bg-primary text-primary-foreground rounded-tr-none' 
                        : 'bg-muted text-foreground rounded-tl-none'
                    }`}>
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="p-4 border-t flex gap-2">
              <Input 
                placeholder="Type your message..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                className="rounded-full"
              />
              <Button size="icon" onClick={handleSend} className="rounded-full shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Button 
        size="lg" 
        className="w-14 h-14 rounded-full shadow-2xl p-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </Button>
    </div>
  );
};

// --- Main Page ---

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <CalculatorSection />
        <CoverageMap />
        <Testimonials />
        <ContactAndComplaints />
        
        {/* Final CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="bg-primary rounded-[40px] p-12 md:p-20 text-center text-primary-foreground relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Ready to Optimize Your Logistics?</h2>
              <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto relative z-10">
                Join thousands of e-commerce businesses that trust M&M Logistics for their shipping needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <Button size="lg" variant="secondary" className="rounded-full px-10 py-7 text-lg font-bold">
                  Get Started Now
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-10 py-7 text-lg font-bold border-white/30 hover:bg-white/10">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}
