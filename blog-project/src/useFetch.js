var blogs = [
  {
    id: "1",
    title: "The Art of Stealth",
    body: `In a fast-paced, ever-evolving world, the art of stealth has taken on a modern twist. Embracing the spirit of ancient ninjas, we can unleash our inner warriors using a combination of traditional techniques and cutting-edge tactics. 🥷🔥

    🌙 Stealth in the shadows: Just as ninjas moved silently through the night, blending into darkness, today's modern warriors adapt to their surroundings. With the help of technology, we navigate the virtual realm, employing encryption and anonymous browsing to maintain our covert status.
    
    💨 Swift as the wind: Emojis like 🏃‍♀️ and 🏃 are our digital shuriken, enabling quick and efficient communication while maintaining a low profile. Our online presence is strategic, with social media used sparingly and only to convey essential messages.
    
    📸 Master of disguise: The modern ninja embraces the art of camouflage. We don different digital identities, utilizing VPNs and proxy servers to hide our true locations. Through clever manipulation of privacy settings, we become invisible to the prying eyes of data harvesters.
    
    👁️‍🗨️ Enhanced perception:  Just as ninjas honed their senses, we sharpen our digital awareness. We analyze metadata, detect phishing attempts, and employ robust cybersecurity measures to keep our virtual environments secure.
    
    🤝 Unity and collaboration: Modern ninjas recognize the power of teamwork. We form tight-knit communities, sharing knowledge and skills to stay one step ahead of adversaries. Encrypted messaging platforms and forums become our modern-day ninja clans.
    
    🧠 Adaptability: The art of stealth is not stagnant; it evolves with the times. Modern ninjas embrace new technologies, staying ahead of potential threats while maintaining the core principles of stealth and secrecy.
    
    In a world where information is power, the modern ninja skillfully weaves through the digital landscape, leaving no trace behind. By embracing the art of stealth and employing modern techniques, we become the guardians of our online identities. So, unleash your inner ninja, embrace the shadows, and let the modern age of stealth begin! 🥷💻✨`,
    author: "Hanzo",
    creationDate: new Date("2023-06-13"),
  },
  {
    id: "2",
    title: "Mastering the Shuriken",
    body: `The shuriken, a traditional throwing star used by ancient ninjas, symbolizes precision, accuracy, and unwavering focus. In the modern world, mastering the art of the shuriken takes on new dimensions, transcending physical boundaries to encompass various aspects of life. Let's explore how we can harness the spirit of the shuriken in our daily pursuits. 🔥🌟

    🔹 Aiming for targets: Just as the ninja aimed their shuriken at specific points, we set clear goals in our personal and professional lives. We identify our targets, breaking them down into achievable steps, and unleash our focus to hit the bullseye of success. 🎯🏆
    
    🔹 Sharp mental acuity: Like a razor-sharp blade, our minds need constant honing. We engage in activities that sharpen our cognitive abilities, such as puzzles, meditation, and continuous learning. By nurturing a keen intellect, we enhance our problem-solving skills and adaptability.
    
    🔹 Adapting to different contexts: Ninjas could wield shuriken in various situations, adjusting their techniques as needed. Similarly, we must be adaptable in the face of changing circumstances. We cultivate flexibility and resilience, ensuring our skills are effective in any environment.
    
    🔹 Cultivating discipline: Mastery of the shuriken requires discipline and practice. We establish consistent routines, dedicating time to refine our craft, whether it be in physical fitness, professional development, or personal growth. Through disciplined habits, we sharpen our abilities.
    
    🔹 Embracing precision in communication: Just as the shuriken hit their targets with precision, we aim for clear and effective communication. We choose our words thoughtfully, ensuring our messages convey our intended meaning. Active listening and empathy become our guiding principles.
    
    🔹 Achieving balance: The shuriken exemplifies balance and harmony. In our pursuit of mastery, we strive for equilibrium in all aspects of life. We prioritize self-care, maintain healthy relationships, and find synergy between work and leisure.
    
    🔹 Sharing the art: The true mastery of the shuriken lies not in hoarding knowledge but in passing it on. We become mentors, helping others unlock their potential. By sharing our skills and wisdom, we perpetuate the legacy of the shuriken.
    
    As modern warriors, we can learn from the timeless symbolism of the shuriken. By embracing precision, cultivating focus, and adapting to new contexts, we unleash our true potential. Let us grasp the shuriken of life, empowering ourselves to hit the mark of excellence in all that we do! 🥷🌟💫`,
    author: "Kasumi",
    creationDate: new Date("2023-06-12"),
  },
  {
    id: "3",
    title: "The Way of the Ninja",
    body: "Ninjas, the mysterious warriors of old, continue to captivate our imaginations even in the modern world. Their stealthy techniques and disciplined mindset hold valuable lessons for us today. The way of the ninja teaches us the importance of adaptability, agility, and resilience. By embracing these qualities, we can navigate the challenges of our fast-paced lives with grace and precision. Just like the ninja emoji 🥷, we must learn to blend into our surroundings, strike with precision, and persevere in the face of adversity. The path of the ninja is not just a historical legacy; it is a timeless philosophy for achieving success.",
    author: "Ryu",
    creationDate: new Date("2023-06-11"),
  },
  {
    id: "4",
    title: "Ninjutsu Training Tips",
    body: "Mastering the art of ninjutsu requires dedication and disciplined training. To embark on this path, begin by honing your physical fitness. Embrace strength and flexibility exercises to develop the agility necessary for swift movements. Train your mind to be calm and focused, sharpening your awareness of your surroundings. Embody the ninja emoji 🥷💪, symbolizing power and determination. Practice stealth techniques and improve your stealthy footwork. Explore the principles of camouflage and deception. Remember, true mastery comes with patience and persistence. With each step, you'll inch closer to unlocking the secrets of the ancient ninja warriors.",
    author: "Ayame",
    creationDate: new Date("2023-06-10"),
  },
  {
    id: "5",
    title: "The Stealthy Path to Success",
    body: "Mastering the art of ninjutsu requires dedication and disciplined training. To embark on this path, begin by honing your physical fitness. Embrace strength and flexibility exercises to develop the agility necessary for swift movements. Train your mind to be calm and focused, sharpening your awareness of your surroundings. Embody the ninja emoji 🥷💪, symbolizing power and determination. Practice stealth techniques and improve your stealthy footwork. Explore the principles of camouflage and deception. Remember, true mastery comes with patience and persistence. With each step, you'll inch closer to unlocking the secrets of the ancient ninja warriors.",
    author: "Kenji",
    creationDate: new Date("2023-06-09"),
  },
];

const useFetch = () => {
  console.log("using function useFETCH {blogs}", blogs);
  return blogs;
};
const postData = (newBlog) => {
  blogs = [...blogs, newBlog];
  console.log("🚀 POSTED~ file: useFetch.js:28 ~ postData ~ blogs:", blogs);
};
const deleteData = (id) => {
  blogs = blogs.filter((element) => element.id !== id);
  console.log("🚀 DELETED ~ file: useFetch.js:32 ~ deleteData ~ blogs:", blogs);
};

export default useFetch;
export { useFetch, postData, deleteData };
