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
        name: "Siva S",
        position: "Senior Software Designer",
        company: "Adobe",
        title: "Professionalism And Clarity",
        testimonial:
          "I was truly impressed by the professionalism and clarity the EB1A Visionary Path team brought to my case. Their step-by-step assistance made the entire journey smooth and stress-free. I highly recommend them to anyone pursuing an EB1A visa",
        visaType: "EB1A",
      },
      {
        name: "Nallasamy",
        position: "Software Engineer",
        company: "Meta",
        title: "Dedication to Client Success",
        testimonial:
          "The team at EB1A Visionary Path provided exceptional guidance throughout my O1A visa application. Their knowledge of immigration law and dedication to client success is outstanding.",
        visaType: "O1A",
      },
      {
        name: "Sai M",
        position: "Technical Writer",
        company: "Amazon",
        title: "Expertise in Immigration",
        testimonial:
          "Thanks to EB1A Visionary Path, I successfully obtained my EB2 NIW visa. Their expertise in immigration law and commitment to client success is truly remarkable.",
        visaType: "EB2 NIW",
      },
      {
        name: "Nandakumar",
        position: "AI Research Lead",
        company: "Xoriant",
        title: "Profound Strategic Approach",
        testimonial:
          "The EB1A Visionary Path team's deep understanding of the EB1A requirements and their strategic approach to presenting my case was invaluable. I'm grateful for their support.",
        visaType: "EB1A",
      },
      {
        name: "Prasad M",
        position: "Senior Accountant",
        company: "Citibank",
        title: "Exceeded My Expectations",
        testimonial:
          "EB1A Visionary Path exceeded my expectations with their personalised support and in-depth understanding of the EB1A process. Their strategic guidance and timely communication played a key role in the successful approval of my petition.",
        visaType: "EB1A",
      },
      {
        name: "Amit T",
        position: "Assistant Manager",
        company: "Santander Bank",
        title: "Game Changer",
        testimonial:
          "Working with EB1A Visionary Path was a game-changer. Their team not only provided expert advice but also crafted a compelling case that highlighted my qualifications perfectly. I'm thankful for their dedication and support throughout the process.",
        visaType: "EB1A",
      },
    ];

    // Insert sample data
    await Blog.insertMany(blogPosts);
    await Testimonial.insertMany(testimonials);

    console.log("Sample data inserted successfully");
    // process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    // process.exit(1);
  }
}

seedDatabase();
