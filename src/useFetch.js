const LOREM = `In a fast-paced, ever-evolving world, the art of stealth has taken on a modern twist. Embracing the spirit of ancient ninjas, we can unleash our inner warriors using a combination of traditional techniques and cutting-edge tactics. 🥷🔥

🌙 Stealth in the shadows: Just as ninjas moved silently through the night, blending into darkness, today's modern warriors adapt to their surroundings. With the help of technology, we navigate the virtual realm, employing encryption and anonymous browsing to maintain our covert status.

💨 Swift as the wind: Emojis like 🏃‍♀️ and 🏃 are our digital shuriken, enabling quick and efficient communication while maintaining a low profile. Our online presence is strategic, with social media used sparingly and only to convey essential messages.

📸 Master of disguise: The modern ninja embraces the art of camouflage. We don different digital identities, utilizing VPNs and proxy servers to hide our true locations. Through clever manipulation of privacy settings, we become invisible to the prying eyes of data harvesters.

👁️‍🗨️ Enhanced perception:  Just as ninjas honed their senses, we sharpen our digital awareness. We analyze metadata, detect phishing attempts, and employ robust cybersecurity measures to keep our virtual environments secure.

🤝 Unity and collaboration: Modern ninjas recognize the power of teamwork. We form tight-knit communities, sharing knowledge and skills to stay one step ahead of adversaries. Encrypted messaging platforms and forums become our modern-day ninja clans.

🧠 Adaptability: The art of stealth is not stagnant; it evolves with the times. Modern ninjas embrace new technologies, staying ahead of potential threats while maintaining the core principles of stealth and secrecy.

In a world where information is power, the modern ninja skillfully weaves through the digital landscape, leaving no trace behind. By embracing the art of stealth and employing modern techniques, we become the guardians of our online identities. So, unleash your inner ninja, embrace the shadows, and let the modern age of stealth begin! 🥷💻✨`

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
    id: "50",
    title: "The Stealthy Path to Success",
    body: "Mastering the art of ninjutsu requires dedication and disciplined training. To embark on this path, begin by honing your physical fitness. Embrace strength and flexibility exercises to develop the agility necessary for swift movements. Train your mind to be calm and focused, sharpening your awareness of your surroundings. Embody the ninja emoji 🥷💪, symbolizing power and determination. Practice stealth techniques and improve your stealthy footwork. Explore the principles of camouflage and deception. Remember, true mastery comes with patience and persistence. With each step, you'll inch closer to unlocking the secrets of the ancient ninja warriors.",
    author: "Kenji",
    creationDate: new Date("2023-06-09"),
  }, {
    id: "5",
    title: "Echoes of the Shinobi",
    body: `The legacy of the shinobi is not just hidden in shadows but woven into the fabric of our digital age. The principles of stealth, cunning, and wisdom guide us through complex challenges. 🥷🌌

    🌐 Digital Shadows: Like the shinobi who moved unseen, we navigate the digital world with caution, masking our digital footprints to protect our privacy and data from unseen threats.
    
    🚀 Agile and Adaptive: Our actions are swift and purposeful, akin to the shuriken's flight. In business and personal growth, being agile allows us to adapt and overcome swiftly.
    
    🎭 Faces of Anonymity: In the realm of online interactions, we adopt multiple personas, each serving a purpose in our quest for knowledge and connection, much like the masks worn by the shinobi of old.
    
    🔍 Keen Insight: The shinobi's greatest weapon was not the sword but their mind. Today, we sharpen our minds with continuous learning, critical thinking, and embracing diverse perspectives.
    
    💡 Illuminate the Shadows: While the shinobi operated in darkness, we seek to bring light to the shadowy corners of the internet, advocating for transparency, security, and ethics.
    
    Let's embrace the way of the shinobi, applying ancient wisdom to modern challenges, moving with purpose and integrity in an ever-connected world. 🥷💡`,
    author: "Miyako",
    creationDate: new Date("2023-06-08"),
  },
  {
    id: "6",
    title: "Shadows and Software: The Ninja's Way",
    body: `In today's digital landscape, the ninja's way informs our approach to technology and security. By adopting the stealth and cunning of the ninja, we protect our digital domains. 🥷💾

    🔐 Privacy as a Principle: Just as a ninja values the shadow, we prioritize our digital privacy, employing advanced encryption and secure communication methods to guard our information.
    
    🖥️ Hacking as Ninjutsu: Ethical hacking can be likened to the missions of ninjas, using our skills to protect and inform, ensuring the safety of digital infrastructures.
    
    🌍 Global Connectivity: Our network is our village. Like ninjas forming alliances, we connect across continents, sharing knowledge and safeguarding each other against threats.
    
    📱 Technology as a Tool: For the modern ninja, technology is a sword wielded with precision. We utilize the latest advancements to enhance our capabilities, always mindful of their power.
    
    Embracing the shadowy art of the ninja, we navigate the digital age with confidence and skill, protecting our communities and information with the stealth and wisdom of the ancients. 🥷🌐`,
    author: "Jiro",
    creationDate: new Date("2023-06-07"),
  },
  {
    id: "7",
    title: "The Silent Guardians: Modern-Day Ninjas",
    body: `In the bustling noise of our daily lives, the principles of the ninja remind us of the power of silence, strategy, and subtlety. 🥷🍃

    🌿 Blending with Nature: Just as ninjas blended with their natural surroundings, we learn to harmonize our lives with the environment, promoting sustainability and mindfulness.
    
    🛡️ Protecting the Innocent: Today's ninjas are the unseen guardians, cybersecurity experts who shield our data and digital lives from malicious forces.
    
    📖 Wisdom Through Silence: In a world of constant noise, adopting the ninja's silent contemplation helps us gain deeper insights and clarity in our decisions.
    
    💬 Silent Communication: Utilizing non-verbal cues and digital encryption, we communicate securely, ensuring our messages remain confidential and protected.
    
    The modern-day ninja moves unseen, a silent guardian in a chaotic world, embodying the virtues of patience, precision, and protection in every action. 🥷🌌`,
    author: "Sora",
    creationDate: new Date("2023-06-06"),
  }
];

const useFetch = () => {
  console.log("using function useFETCH {blogs}", blogs);
  return blogs;
};
const postData = async (newBlog) => {
  blogs = [...blogs, newBlog];
  console.log("🚀 POSTED~ file: useFetch.js:28 ~ postData ~ blogs:", blogs);
};
const deleteData = (id) => {
  blogs = blogs.filter((element) => element.id !== id);
  console.log("🚀 DELETED ~ file: useFetch.js:32 ~ deleteData ~ blogs:", blogs);
};

export default useFetch;
export { useFetch, postData, deleteData };
