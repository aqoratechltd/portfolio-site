"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { team } from "@/lib/team"
import { Linkedin, Github, Twitter } from "lucide-react"

export function TeamSection() {
  const displayTeam = team.slice(0, 4) // Founder + 3

  return (
    <section className="py-24 bg-secondary border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16 gap-4 md:gap-8">
          <div className="max-w-2xl">
            <span className="text-accent text-sm font-bold tracking-widest uppercase mb-2 block">The Engine</span>
            <h2 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-foreground">
              Built by Builders.
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              We are a collective of senior engineers, designers, and strategists obsessed with shipping high-quality software.
            </p>
          </div>
          <Link 
            href="/about"
            className="text-white hover:text-accent font-medium text-sm transition-colors uppercase tracking-wider hidden md:block"
          >
            Meet the Full Team →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {displayTeam.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-colors duration-300"
            >
              <div className="relative w-full aspect-square bg-background overflow-hidden">
                {/* Fallback pattern */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://transparenttextures.com/patterns/cubes.png')]" />
                {member.avatar && (
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    unoptimized
                  />
                )}
                
                {/* Social Links overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-end gap-3 z-20">
                  {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent"><Linkedin className="w-5 h-5" /></a>}
                  {member.github && <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent"><Github className="w-5 h-5" /></a>}
                  {member.twitter && <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent"><Twitter className="w-5 h-5" /></a>}
                </div>
              </div>

              <div className="p-6 relative z-10 bg-card">
                <h3 className="font-syne font-bold text-xl text-white mb-1 group-hover:text-accent transition-colors">
                  {member.name}
                </h3>
                <p className="text-text-muted text-sm mb-4">{member.role}</p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.slice(0, 3).map(skill => (
                    <span key={skill} className="text-xs text-text-secondary bg-secondary px-2 py-1 rounded border border-border">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
          <Link 
            href="/about"
            className="text-white hover:text-accent font-medium text-sm transition-colors uppercase tracking-wider"
          >
            Meet the Full Team →
          </Link>
        </div>

      </div>
    </section>
  )
}
