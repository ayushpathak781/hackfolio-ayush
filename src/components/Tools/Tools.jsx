import { motion } from 'framer-motion'
import styles from './Tools.module.css'

// Tool icons (using inline SVGs for common security/dev tools)
const tools = [
    { name: 'React', color: '#61dafb' },
    { name: 'Next.js', color: '#ffffff' },
    { name: 'Node.js', color: '#339933' },
    { name: 'TypeScript', color: '#3178c6' },
    { name: 'Tailwind', color: '#06b6d4' },
    { name: 'PostgreSQL', color: '#336791' },
    { name: 'Supabase', color: '#3ecf8e' },
    { name: 'MongoDB', color: '#47a248' },
    { name: 'Git', color: '#f05032' },
    { name: 'VS Code', color: '#007acc' },
    { name: 'Vercel', color: '#ffffff' },
    { name: 'Postman', color: '#ff6c37' },
]

const Tools = () => {
    return (
        <section className={styles.toolsSection}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.label}>CLICK & DRAG</span>
                    <h2 className={styles.title}>
                        My tools to play around with<br />and create magic!
                    </h2>
                </div>

                <div className={styles.toolsArea}>
                    {tools.map((tool, index) => (
                        <motion.div
                            key={tool.name}
                            className={styles.toolBubble}
                            drag
                            dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
                            dragElastic={0.2}
                            whileHover={{ scale: 1.1 }}
                            whileDrag={{ scale: 1.2, zIndex: 100 }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            style={{
                                background: tool.color,
                            }}
                        >
                            <span className={styles.toolName}>{tool.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Tools
