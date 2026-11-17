import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript / TypeScript",
  "React & Next.js",
  "Tailwind CSS",
  "Node.js & Express",
  "MySQL / Oracle",
  "Git & GitHub",
  "REST APIs & GraphQL",
  "Shadcn UI",
];

export default function About() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground mt-1">
          A bit about my background, passion, and technical skillset.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Story</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
          
             Hi! I'm Joey G. Parado, a second-year Bachelor of Science in Information Technology (BSIT) student with a passion for technology and web development
                     <p>
           
          </p>
           My goal is to become a skilled Full-Stack Developer capable of building complete, innovative, and efficient software solutions. I'm always eager to learn, embrace new challenges, and grow as an IT professional.
          <p>
            I am currently learning both Frontend and Backend Development, exploring how to build responsive, user-friendly websites alongside functional, end-to-end web applications. Through continuous practice, exploring new technologies, and creating personal projects, I am actively honing my programming skills and gaining hands-on experience.
          </p>
        </CardContent>
      </Card>
    
      <Card>
        <CardHeader>
          <CardTitle>Skills & Technologies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}