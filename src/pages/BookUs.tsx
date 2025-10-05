import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const BookUs = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    groomName: "",
    brideName: "",
    phoneNumber: "",
    eventStartDate: "",
    eventEndDate: "",
    events: [] as string[],
    budget: "",
    location: "",
    services: [] as string[],
    message: ""
  });

  const handleEventChange = (event: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        events: [...prev.events, event]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        events: prev.events.filter(e => e !== event)
      }));
    }
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        services: [...prev.services, service]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        services: prev.services.filter(s => s !== service)
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent double submission
    if (loading) return;

    const {
      groomName,
      brideName,
      phoneNumber,
      eventStartDate,
      eventEndDate,
      events,
      budget,
      location,
      services,
      message,
    } = formData;

    // ===== Validation =====

    // Trimmed values
    if (
      !groomName.trim() ||
      !brideName.trim() ||
      !phoneNumber.trim() ||
      !eventStartDate ||
      !eventEndDate ||
      !budget.trim() ||
      !location.trim() ||
      !message.trim()
    ) {
      toast({
        title: "Missing required fields",
        description: "Please fill out all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    // Validate phone number (8–13 digits)
    const pattern = /^(?:\+91[\-\s]?|0)?[6-9]\d{9}$/;
    if (!pattern.test(phoneNumber)) {
      toast({
        title: "Invalid phone number.",
        description: "Please enter a valid phone number.",
        variant: "destructive"
      });
      return;
    }

    // Validate date format (optional: check if startDate < endDate)
    const start = new Date(eventStartDate);
    const end = new Date(eventEndDate);
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      toast({
        title: "Invalid date format",
        description: "Please enter valid event dates.",
        variant: "destructive",
      });
      return;
    }

    if (start > end) {
      toast({
        title: "Invalid event dates",
        description: "Start date cannot be after end date.",
        variant: "destructive",
      });
      return;
    }

    // Validate multi-selects
    if (events.length === 0) {
      toast({
        title: "No events selected",
        description: "Please select at least one event.",
        variant: "destructive",
      });
      return;
    }

    if (services.length === 0) {
      toast({
        title: "No services selected",
        description: "Please select at least one service.",
        variant: "destructive",
      });
      return;
    }

    // ===== Submit Form =====
    setLoading(true);

    fetch("https://unicorn-pixel-photography-backend.onrender.com/api/book-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast({
            title: "Enquiry Submitted!",
            description: "Thank you for your enquiry. We'll get back to you within 48 hours.",
          });

          // Reset form
          setFormData({
            groomName: "",
            brideName: "",
            phoneNumber: "",
            eventStartDate: "",
            eventEndDate: "",
            events: [],
            budget: "",
            location: "",
            services: [],
            message: "",
          });
        } else {
          toast({
            title: "Failed to send booking request!",
            description: "Please try again.",
            variant: "destructive",
          });
        }
      })
      .catch((err) => {
        console.error("Error sending booking request:", err);
        toast({
          title: "An error occurred.",
          description: "Could not send the form. Try again later.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setLoading(false); // Reset loading state
      });
  };


  const eventOptions = ["Haldi", "Mehendi", "Sangeet", "Wedding", "Reception", "Engagement", "Other"];
  const serviceOptions = ["Photography", "Films", "Both"];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-20">
        {/* Header Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-8 animate-fade-in">
              Let's Create Something Beautiful Together
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>

            <div className="space-y-6 text-left max-w-3xl mx-auto">
              <p className="  text-lg text-muted-foreground leading-relaxed">
                Book your special wedding day with Team Unicorn Pixel Photography!
              </p>
              <p className="  text-lg text-muted-foreground leading-relaxed">
                Let us turn your beautiful moments into timeless memories. From candid emotions to cinematic magic, we capture it all with heart and creativity. Lock in your date now and let's make your big day unforgettable!
              </p>
              <p className="  text-lg text-muted-foreground leading-relaxed">
                Kindly complete the form below with as much detail as possible to help us prepare an accurate quote for you. We aim to respond within 48 hours.
              </p>
              <p className="  text-lg text-muted-foreground leading-relaxed">
                If you don't hear from us within that time, or if your request is urgent, please feel free to call us directly at the number provided below.
              </p>
              <p className="  text-lg font-semibold text-primary">
                We're happy to assist you!
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl">
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-3xl text-center text-foreground">
                  Wedding Enquiry Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="groomName" className="  font-semibold">
                        Groom Name
                      </Label>
                      <Input
                        id="groomName"
                        value={formData.groomName}
                        onChange={(e) => setFormData(prev => ({ ...prev, groomName: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="brideName" className="  font-semibold">
                        Bride Name
                      </Label>
                      <Input
                        id="brideName"
                        value={formData.brideName}
                        onChange={(e) => setFormData(prev => ({ ...prev, brideName: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber" className="  font-semibold">
                      Phone Number
                    </Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="eventStartDate" className="  font-semibold">
                        Event Start Date
                      </Label>
                      <Input
                        id="eventStartDate"
                        type="date"
                        value={formData.eventStartDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, eventStartDate: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventEndDate" className="  font-semibold">
                        Event End Date
                      </Label>
                      <Input
                        id="eventEndDate"
                        type="date"
                        value={formData.eventEndDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, eventEndDate: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="  font-semibold">
                      Select Your Events (Tick all that apply)
                    </Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {eventOptions.map((event) => (
                        <div key={event} className="flex items-center space-x-2">
                          <Checkbox
                            id={event}
                            checked={formData.events.includes(event)}
                            onCheckedChange={(checked) => handleEventChange(event, checked as boolean)}
                          />
                          <Label htmlFor={event} className="  text-sm">
                            {event}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget" className="  font-semibold">
                      Your Estimate Budget for Event
                    </Label>
                    <Input
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                      placeholder="e.g., ₹2,00,000 - ₹3,00,000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="  font-semibold">
                      Location of Event
                    </Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className="  font-semibold">
                      What service are you looking for?
                    </Label>
                    <div className="flex flex-wrap gap-4">
                      {serviceOptions.map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <Checkbox
                            id={service}
                            checked={formData.services.includes(service)}
                            onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                          />
                          <Label htmlFor={service} className=" ">
                            {service}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="  font-semibold">
                      Tell us more about your wedding thoughts
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      rows={4}
                      placeholder="Share your vision, preferences, or any special requests..."
                    />
                  </div>

                  <div className="pt-6">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={loading}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    >
                      {loading ? "Sending..." : "Submit Enquiry"}
                    </Button>

                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BookUs;