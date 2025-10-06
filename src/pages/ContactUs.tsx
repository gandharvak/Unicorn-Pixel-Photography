import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import { address, email, mapsEmbed, phone1, phone2 } from "@/data";
import emailjs from "emailjs-com";

const serviceId = import.meta.env.VITE_SERVICE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

const ContactUs = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return;

    // Trimmed values
    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const message = formData.message.trim();

    // ===== Validation =====
    if (!name || !email || !phone || !message) {
      toast({
        title: "All fields are required.",
        description: "Please fill out the entire form before submitting.",
        variant: "destructive"
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email format.",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // Phone number validation (example: at least 8-10 digits)
    const pattern = /^(?:\+91[\-\s]?|0)?[6-9]\d{9}$/;
    if (!pattern.test(phone)) {
      toast({
        title: "Invalid phone number.",
        description: "Please enter a valid phone number.",
        variant: "destructive"
      });
      return;
    }

    // ===== Submit Form =====
    setLoading(true);

    emailjs.send(
      serviceId,
      "template_bmvjzqr",
      formData,
      publicKey
    )
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch(() => {
        toast({
          title: "Failed to send message.",
          description: "Please try again later.",
          variant: "destructive"
        });
      })
      .finally(() => {
        setLoading(false); // Reset loading state
      });

    // fetch('https://unicorn-pixel-photography-backend.onrender.com/api/contact-us', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ name, email, phone, message })
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     if (data.success) {
    //       toast({
    //         title: "Message Sent!",
    //         description: "Thank you for contacting us. We'll get back to you soon.",
    //       });
    //       setFormData({ name: "", email: "", phone: "", message: "" }); // reset form
    //     } else {
    //       toast({
    //         title: "Failed to send message.",
    //         description: "Please try again later.",
    //         variant: "destructive"
    //       });
    //     }
    //   })
    //   .catch(err => {
    //     console.error('Error sending contact message:', err);
    //     toast({
    //       title: "Something went wrong.",
    //       description: "We couldn't send your message. Please try again.",
    //       variant: "destructive"
    //     });
    //   })
    //   .finally(() => {
    //     setLoading(false); // Reset loading state
    //   });
  };


  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-20">
        <section className="py-20 px-4">
          <div className=" mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-8 animate-fade-in">
                Contact Us
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <Card>
                  <CardContent className="space-y-6 py-4">
                    <div className="flex items-start space-x-4 overflow-hidden">
                      <Mail className="h-6 w-6 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <a
                          href={`mailto:${email}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <p className="  font-semibold text-foreground">Phone</p>
                        <div className="space-y-1">
                          <a
                            href={`tel:${phone1}`}
                            className="text-muted-foreground hover:text-primary transition-colors block"
                          >
                            {phone1}
                          </a>
                          <a
                            href={`tel:${phone2}`}
                            className="  text-muted-foreground hover:text-primary transition-colors block"
                          >
                            {phone2}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <p className="text-muted-foreground">
                          {address}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Google Maps */}
                <Card>
                  <CardContent className="p-0">
                    <div className="aspect-video w-full">
                      <iframe
                        src={mapsEmbed}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-playfair text-2xl text-foreground">
                      Have questions? Get in touch!
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="  font-semibold">
                          Name
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="  font-semibold">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="  font-semibold">
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="  font-semibold">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                          rows={4}
                          placeholder="Tell us about your project or ask any questions..."
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={loading}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </Button>

                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;