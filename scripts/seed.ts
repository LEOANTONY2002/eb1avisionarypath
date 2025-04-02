import mongoose from "mongoose";
import Blog from "../app/models/Blog";
import Testimonial from "../app/models/Testimonial";

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://eb1avisionarypath:EB!AVP@cluster.ma8wjbs.mongodb.net/eb1a";

export default async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    // Clear existing data
    await Blog.deleteMany({});
    await Testimonial.deleteMany({});

    // Sample blog posts
    const blogPosts = [
      {
        title: "Understanding the EB1A Visa Requirements",
        slug: "understanding-eb1a-visa-requirements",
        content: `
          <h2>What is an EB1A Visa?</h2>
          <p>The EB1A visa is designed for individuals who can demonstrate extraordinary ability in their field. This category is particularly attractive because it doesn't require a job offer or labor certification.</p>
          
          <h2>Key Requirements</h2>
          <ul>
            <li>Evidence of original scientific, scholarly, artistic, athletic, or business-related contributions</li>
            <li>Membership in associations that require outstanding achievements</li>
            <li>Published material about you in professional or major trade publications</li>
            <li>Service as a judge of others' work</li>
            <li>Original scientific, scholarly, artistic, athletic, or business-related contributions</li>
          </ul>
        `,
        excerpt:
          "Learn about the key requirements and eligibility criteria for the EB1A visa category.",
        author: "Dr. Sarah Johnson",
        image: "/blog/eb1a-requirements.jpg",
        category: "EB1A",
        tags: ["EB1A", "Visa Requirements", "Immigration"],
        metaDescription:
          "Comprehensive guide to EB1A visa requirements and eligibility criteria for extraordinary ability immigrants.",
        metaKeywords: [
          "EB1A visa",
          "extraordinary ability",
          "immigration requirements",
          "US visa",
          "green card",
        ],
      },
      {
        title: "O1A Visa: A Path for Extraordinary Professionals",
        slug: "o1a-visa-path-extraordinary-professionals",
        content: `
          <h2>Introduction to O1A Visa</h2>
          <p>The O1A visa is designed for individuals with extraordinary ability in business, science, education, or athletics. This visa category offers a unique opportunity for professionals to work in the United States.</p>
          
          <h2>Eligibility Criteria</h2>
          <ul>
            <li>Extraordinary ability in your field</li>
            <li>Evidence of sustained national or international acclaim</li>
            <li>Recognition for achievements and significant contributions</li>
            <li>Original scientific, scholarly, or business-related contributions</li>
          </ul>
        `,
        excerpt:
          "Discover how the O1A visa can be your gateway to working in the United States as an extraordinary professional.",
        author: "Michael Chen",
        image: "/blog/o1a-visa.jpg",
        category: "O1A",
        tags: ["O1A", "Work Visa", "Professional Immigration"],
        metaDescription:
          "Complete guide to O1A visa requirements and application process for extraordinary professionals.",
        metaKeywords: [
          "O1A visa",
          "extraordinary ability",
          "work visa",
          "US immigration",
          "professional visa",
        ],
      },
      {
        title: "EB2 NIW: National Interest Waiver Guide",
        slug: "eb2-niw-national-interest-waiver-guide",
        content: `
          <h2>Understanding EB2 NIW</h2>
          <p>The EB2 National Interest Waiver (NIW) allows certain professionals to bypass the labor certification requirement if their work is in the national interest of the United States.</p>
          
          <h2>Key Requirements</h2>
          <ul>
            <li>Advanced degree or exceptional ability</li>
            <li>Work in an area of substantial intrinsic merit</li>
            <li>National scope of proposed endeavor</li>
            <li>Benefit to the United States</li>
          </ul>
        `,
        excerpt:
          "A comprehensive guide to the EB2 National Interest Waiver process and requirements.",
        author: "Dr. Emily Rodriguez",
        image: "/blog/eb2-niw.jpg",
        category: "EB2 NIW",
        tags: ["EB2 NIW", "National Interest Waiver", "Immigration"],
        metaDescription:
          "Detailed guide to EB2 National Interest Waiver requirements and application process.",
        metaKeywords: [
          "EB2 NIW",
          "national interest waiver",
          "immigration",
          "US visa",
          "green card",
        ],
      },
    ];

    // Sample testimonials
    const testimonials = [
      {
        name: "Dr. Rajesh Patel",
        position: "Senior Research Scientist",
        company: "Tech Innovations Inc.",
        testimonial:
          "EB1A Visionary Path helped me navigate the complex EB1A visa process. Their expertise and attention to detail made all the difference in my successful application.",
        image: "/testimonials/rajesh-patel.jpg",
        visaType: "EB1A",
        rating: 5,
      },
      {
        name: "Maria Garcia",
        position: "Professional Athlete",
        company: "Sports Excellence",
        testimonial:
          "The team at EB1A Visionary Path provided exceptional guidance throughout my O1A visa application. Their knowledge of immigration law and dedication to client success is outstanding.",
        image: "/testimonials/maria-garcia.jpg",
        visaType: "O1A",
        rating: 5,
      },
      {
        name: "Dr. James Wilson",
        position: "Medical Researcher",
        company: "Healthcare Innovations",
        testimonial:
          "Thanks to EB1A Visionary Path, I successfully obtained my EB2 NIW visa. Their expertise in immigration law and commitment to client success is truly remarkable.",
        image: "/testimonials/james-wilson.jpg",
        visaType: "EB2 NIW",
        rating: 5,
      },
      {
        name: "Dr. Li Wei",
        position: "AI Research Lead",
        company: "Future Tech Solutions",
        testimonial:
          "The EB1A Visionary Path team's deep understanding of the EB1A requirements and their strategic approach to presenting my case was invaluable. I'm grateful for their support.",
        image: "/testimonials/li-wei.jpg",
        visaType: "EB1A",
        rating: 5,
      },
      {
        name: "Sofia Rodriguez",
        position: "Professional Dancer",
        company: "Global Dance Academy",
        testimonial:
          "As an artist applying for the O1A visa, I needed specialized guidance. EB1A Visionary Path provided exactly that, helping me showcase my achievements effectively.",
        image: "/testimonials/sofia-rodriguez.jpg",
        visaType: "O1A",
        rating: 5,
      },
      {
        name: "Dr. Ahmed Hassan",
        position: "Environmental Scientist",
        company: "Green Earth Research",
        testimonial:
          "The EB2 NIW process seemed daunting, but EB1A Visionary Path made it manageable. Their expertise in immigration law and scientific fields was crucial to my success.",
        image: "/testimonials/ahmed-hassan.jpg",
        visaType: "EB2 NIW",
        rating: 5,
      },
      {
        name: "Dr. Elena Petrova",
        position: "Quantum Computing Expert",
        company: "Quantum Tech Labs",
        testimonial:
          "EB1A Visionary Path helped me present my research contributions effectively for the EB1A visa. Their attention to detail and understanding of academic achievements was exceptional.",
        image: "/testimonials/elena-petrova.jpg",
        visaType: "EB1A",
        rating: 5,
      },
      {
        name: "Carlos Mendoza",
        position: "Professional Coach",
        company: "Elite Sports Academy",
        testimonial:
          "The O1A visa process for sports professionals is unique, but EB1A Visionary Path handled it perfectly. They understood my achievements and presented them effectively.",
        image: "/testimonials/carlos-mendoza.jpg",
        visaType: "O1A",
        rating: 5,
      },
      {
        name: "Dr. Yuki Tanaka",
        position: "Biotechnology Researcher",
        company: "BioTech Solutions",
        testimonial:
          "EB1A Visionary Path' expertise in the EB2 NIW category was crucial for my application. They helped me demonstrate how my research benefits the United States.",
        image: "/testimonials/yuki-tanaka.jpg",
        visaType: "EB2 NIW",
        rating: 5,
      },
      {
        name: "Dr. Marcus Schmidt",
        position: "Space Technology Expert",
        company: "Space Innovations Corp",
        testimonial:
          "The EB1A Visionary Path team's understanding of both immigration law and scientific achievements was invaluable. They helped me present my case effectively.",
        image: "/testimonials/marcus-schmidt.jpg",
        visaType: "EB1A",
        rating: 5,
      },
    ];

    // Insert sample data
    await Blog.insertMany(blogPosts);
    await Testimonial.insertMany(testimonials);

    console.log("Sample data inserted successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase();
