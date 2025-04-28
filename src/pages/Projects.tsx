
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'Data Scraping Application',
      description: 'Built the Frontend and connected it wiht the Backend on this application which allows users to scrape data from websites by inputting a URL, selecting one of the three scraping options, and retrieving data output.',
      tags: ['Typescript with React', 'Tailwind CSS', 'Web Development'],
      link: 'https://github.com/AliRasikh/data-scraping-application',
      image: '/placeholder.svg'
    },
    {
      title: 'Homework Automation Project',
      description: 'Contributed to an automation project by designing and implementing various Python exercises to sustainably boost participants’ learning progress.',
      tags: ['Python', 'Github Actions', 'Github Classroom'],
      link: '#',
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="page-transition">
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-center">
          {t('projects.title')}
        </h1>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full">
              {/* <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div> */}
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                    {t('projects.view')} <ExternalLink size={14} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
