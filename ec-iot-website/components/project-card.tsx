"use client"

import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  image: string
  repoLink?: string
  demoLink?: string
  ongoing?: boolean
}
export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  repoLink,
  demoLink,
  ongoing = false,
}: ProjectCardProps) {
  const [showVideo, setShowVideo] = useState(false)
  return (
    <div className="group bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-200 hover:shadow-lg">
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={300}
          height={200}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {ongoing && <Badge className="absolute top-2 right-2 bg-amber-600 hover:bg-amber-700">Ongoing</Badge>}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mb-4">{description}</p>
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          {repoLink && (
            <Button asChild variant="outline" size="sm" className="flex-1">
              <Link href={repoLink as string} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Github className="h-4 w-4 mr-2" />
                Repository
              </Link>
            </Button>
          )}
          {demoLink && (
            <>
              <Button asChild size="sm" className="flex-1">
                <button
                  type="button"
                  onClick={() => setShowVideo(true)}
                  className="flex items-center w-full h-4"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </button>
              </Button>
              {showVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
                  <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 max-w-2xl w-full">
                    <button
                      className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-red-500"
                      onClick={() => setShowVideo(false)}
                      aria-label="Close video"
                    >
                      ×
                    </button>
                    <video
                      src={demoLink}
                      controls
                      autoPlay
                      className="w-full h-96 rounded"
                    />
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
