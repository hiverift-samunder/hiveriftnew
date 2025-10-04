import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { SEO } from "../SEO";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    industry: "",
    timeline: "",
    message: "",
  });

  const [showThankYou, setShowThankYou] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowThankYou(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Thank You Page
  if (showThankYou) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="p-12">
              <CardContent>
                <div className="mb-8">
                  <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h1 className="text-4xl font-bold mb-4 text-green-600">
                    Thank You!
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Your message has been successfully submitted. Our team will
                    review your inquiry and get back to you within 24 hours.
                  </p>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-2">
                    Need Immediate Support?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    For urgent inquiries or immediate assistance, please call
                    our support line:
                  </p>
                  <div className="flex items-center justify-center gap-2 text-primary font-bold text-lg">
                    <Phone className="h-5 w-5" />
                    <span>8814930229</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button
                    onClick={() => setShowThankYou(false)}
                    variant="outline"
                    className="w-full"
                  >
                    Submit Another Inquiry
                  </Button>
                  <Button onClick={() => navigate("/")} className="w-full">
                    Return to Home
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      primary: "+91 8814930229",
      secondary: "Service 24*7",
      action: "Call Now",
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      primary: "info@hiverift.com",
      secondary: "We'll respond within 24 hours",
      action: "Send Email",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "Live Chat",
      primary: "Available 24/7",
      secondary: "Instant support for quick questions",
      action: "Start Chat",
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Schedule Meeting",
      primary: "Book a consultation",
      secondary: "30-minute free discovery call",
      action: "Book Now",
    },
  ];

const offices = [
  {
    city: "New Delhi",
    address: "New Rohtak Rd, Ratan Nagar, Karol Bagh",
    zipcode: "New Delhi, Delhi, 110005",
    phone: "+91 8814930229, 011 71367194",
    hours: "Service 24*7",
  },
  {
    city: "Cambridge",
    address: "265 Freure Drive",
    zipcode: "Cambridge, ON, N1S 0C1",

  },
];


  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope and complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our consultation.",
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer:
        "Yes! We offer various maintenance and support packages to keep your project running smoothly. This includes updates, security patches, and technical support.",
    },
    {
      question: "Can you work with our existing team?",
      answer:
        "Absolutely! We frequently collaborate with internal teams and can adapt our workflow to integrate seamlessly with your existing processes and tools.",
    },
    {
      question: "What's included in your free consultation?",
      answer:
        "Our free consultation includes a review of your requirements, discussion of possible solutions, timeline estimation, and a detailed proposal with transparent pricing.",
    },
  ];

  return (
    <div className="py-20">
      <SEO
        title="Thank You | HiveRift Technologies"
        description="Thank you for contacting HiveRift Technologies. Our team will review your message and get back to you within 24 hours."
        keywords="thank you, contact confirmation, HiveRift support"
        url="https://hiverift.com/"
      />
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? We're here to help you every step
            of the way. Choose the best way to connect with our team.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="mx-auto mb-4 bg-primary/10 p-3 rounded-lg w-fit">
                  {method.icon}
                </div>
                <CardTitle className="text-lg">{method.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-2">{method.primary}</p>
                <p className="text-muted-foreground text-sm mb-4">
                  {method.secondary}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    if (method.action === "Book Now") {
                      navigate("/booking");
                    }
                  }}
                >
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form & Info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24
                hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block mb-2">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block mb-2">
                      Company *
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service" className="block mb-2">
                      Service Interested In
                    </label>
                    <Select
                      onValueChange={(value) =>
                        setFormData({ ...formData, service: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">
                          Web Development
                        </SelectItem>
                        <SelectItem value="mobile-app">
                          Mobile App Development
                        </SelectItem>
                        <SelectItem value="ui-ux-design">
                          UI/UX Design
                        </SelectItem>
                        <SelectItem value="consulting">
                          Business Consulting
                        </SelectItem>
                        <SelectItem value="digital-marketing">
                          Digital Marketing
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="industry" className="block mb-2">
                      Industry
                    </label>
                    <Select
                      onValueChange={(value) =>
                        setFormData({ ...formData, industry: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block mb-2">
                    Project Timeline
                  </label>
                  <Select
                    onValueChange={(value) =>
                      setFormData({ ...formData, timeline: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="When do you need this completed?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP</SelectItem>
                      <SelectItem value="1-month">Within 1 month</SelectItem>
                      <SelectItem value="3-months">Within 3 months</SelectItem>
                      <SelectItem value="6-months">Within 6 months</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground mb-8">
                Whether you have a specific project in mind or just want to
                explore possibilities, we're here to help. Our team of experts
                is ready to discuss your needs and provide tailored solutions.
              </p>
            </div>

            {/* Office Locations */}
      <div>
  <h4 className="font-semibold mb-4">Our Offices</h4>
  <div className="space-y-4">
    {offices.map((office, index) => (
      <Card key={index} className="p-4">
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
          <div>
            <h5 className="font-semibold">{office.city}</h5>
            <p className="text-sm text-muted-foreground">{office.address}</p>
            <p className="text-sm text-muted-foreground">{office.zipcode}</p>

            {/* Phone section only if phone exists */}
            {office.phone && (
              <div className="flex items-center gap-1 mt-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">{office.phone}</span>
              </div>
            )}

            {/* Hours section only if hours exist */}
            {office.hours && (
              <div className="flex items-center gap-1 mt-1">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">{office.hours}</span>
              </div>
            )}
          </div>
        </div>
      </Card>
    ))}
  </div>
</div>


            {/* FAQ Section */}
            <div>
              <h4 className="font-semibold mb-4">Frequently Asked Questions</h4>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="p-4">
                    <h5 className="font-semibold mb-2">{faq.question}</h5>
                    <p className="text-sm text-muted-foreground">
                      {faq.answer}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold mb-2">Need Urgent Support?</h3>
          <p className="text-muted-foreground mb-4">
            For urgent inquiries or immediate assistance, please call our
            support line.
          </p>
          <Button variant="destructive">011 71367194</Button>
        </div>
      </div>
    </div>
  );
}
