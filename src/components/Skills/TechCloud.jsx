import { useEffect, useRef } from 'react'
import TagCloud from 'TagCloud'
import styles from './Skills.module.css'

const mySkills = [
    'React', 'Next.js', 'Node.js', 'TypeScript',
    'Tailwind', 'Express', 'PostgreSQL', 'Supabase',
    'MongoDB', 'Git', 'Vercel', 'REST APIs',
    'JWT', 'Framer', 'AI Agents', 'LLMs',
    'System Design', 'Automation', 'JavaScript', 'Vite'
]

const TechCloud = () => {
    const containerRef = useRef(null)

    useEffect(() => {
        if (containerRef.current) {
            // Container must be a direct DOM element for TagCloud
            const container = containerRef.current

            // Cleanup previous instance if strict mode causes double render
            container.innerHTML = ''

            TagCloud(container, mySkills, {
                radius: 300,
                maxSpeed: 'fast',
                initSpeed: 'normal',
                direction: 135,
                keep: true,
                useContainerInlineStyles: false,
                containerClass: 'tagcloud',
                itemClass: 'tagcloud-item'
            })
        }
    }, [])

    return (
        <div className={styles.cloudWrapper}>
            <div ref={containerRef} className={styles.cloudContainer}></div>
        </div>
    )
}

export default TechCloud
