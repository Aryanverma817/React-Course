import React from 'react'
import Card from './Component/Card'


const App = () => {

const arr = [
  {
    "id": 1,
    "name": "Aryan Verma",
    "position": "Full Stack Developer",
    "description": "Passionate about building scalable web applications and modern digital experiences.",
    "skills": ["React", "Java", "Tailwind CSS"],
    "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
  },
  {
    "id": 2,
    "name": "Rahul Sharma",
    "position": "Java Developer",
    "description": "Focused on building secure backend systems and enterprise-level applications.",
    "skills": ["Java", "Spring Boot", "Hibernate"],
    "image": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400"
  },
  {
    "id": 3,
    "name": "Priya Singh",
    "position": "AI Developer",
    "description": "Building intelligent applications using machine learning and artificial intelligence.",
    "skills": ["Python", "TensorFlow", "OpenAI"],
    "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400"
  },
  {
    "id": 4,
    "name": "Aditya Kumar",
    "position": "Frontend Developer",
    "description": "Creating beautiful, responsive and user-friendly web interfaces.",
    "skills": ["HTML", "CSS", "React"],
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
  },
  {
    "id": 5,
    "name": "Neha Gupta",
    "position": "UI/UX Designer",
    "description": "Designing intuitive digital experiences with a focus on usability and creativity.",
    "skills": ["Figma", "Adobe XD", "Prototyping"],
    "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400"
  },
  {
    "id": 6,
    "name": "Karan Malhotra",
    "position": "Backend Developer",
    "description": "Developing robust APIs and scalable server-side applications.",
    "skills": ["Node.js", "Express", "MongoDB"],
    "image": "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400"
  },
  {
    "id": 7,
    "name": "Ananya Mehta",
    "position": "Data Scientist",
    "description": "Turning complex datasets into meaningful insights and business solutions.",
    "skills": ["Python", "Pandas", "SQL"],
    "image": "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400"
  },
  {
    "id": 8,
    "name": "Rohit Verma",
    "position": "DevOps Engineer",
    "description": "Automating deployments and building reliable cloud infrastructure.",
    "skills": ["AWS", "Docker", "Kubernetes"],
    "image": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400"
  },
  {
    "id": 9,
    "name": "Sneha Kapoor",
    "position": "Mobile App Developer",
    "description": "Building smooth and engaging mobile experiences for Android and iOS.",
    "skills": ["React Native", "JavaScript", "Firebase"],
    "image": "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400"
  },
  {
    "id": 10,
    "name": "Vikram Patel",
    "position": "Python Developer",
    "description": "Developing automation tools, backend services and Python-based applications.",
    "skills": ["Python", "Django", "PostgreSQL"],
    "image": "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400"
  }
]

  return (
    <div className='parent'>
  {arr.map(function(elem){
return <Card key={elem.id} Skills={elem.skills} Description={elem.description} Name={elem.name} Image={elem.image} Position={elem.position} />
  })}
   </div>
  )


}

export default App