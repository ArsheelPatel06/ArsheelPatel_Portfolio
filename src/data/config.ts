const config = {
  title: "Arsheel Patel | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Arsheel Patel, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work. Let's build something amazing together!",
    short:
      "Discover the portfolio of Arsheel Patel, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Arsheel Patel",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "AirSense",
    "LifeLens",
    "DeepCheck",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Arsheel Patel",
  email: "arsheel@example.com",
  site: "https://arsheelpatel.me",

  // for github stars button
  githubUsername: "ArsheelPatel06",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/arsheelpatel",
    linkedin: "https://www.linkedin.com/in/arsheelpatel/",
    instagram: "https://www.instagram.com/arsheelpatel",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/ArsheelPatel06",
  },
};
export { config };
