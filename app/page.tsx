import Link from "next/link";
import styles from "./page.module.css";
// GitHub Pages basePath 대응 (예: /portfolio)

const isProd = process.env.NODE_ENV === "production";


export default function Home() {

    return (
        <main className={styles.container}>
            <header className={styles.hero}>
                <h1 className={styles.title}>3D Character Artist / Tech (Rigging)</h1>
                <p className={styles.sub}>>
                    Unity · UE5 | Character Modeling · Retopo · Rigging · Game-ready Pipeline
                </p>

                <div className={styles.badges}>
                    <a
                        className={styles.pill} 
                        href="https://www.youtube.com/@%EC%82%AC%ED%88%AC%ED%99%94"
                        target="_blank"
                        rel="noreferrer"
                    >
                        YouTube
                    </a>

                    <a
                        className={styles.pill} 
                        href="https://www.sooplive.co.kr/station/staynight647"
                        target="_blank"
                        rel="noreferrer"
                    >
                        SOOP
                    </a>

                    <a
                        className={styles.pill} 
                        href="https://github.com/Dongkit96"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                </div>
            </header>

            <section style={{ marginBottom: 48 }}>
                <h2 className={styles.sectionTitle}>Portfolio</h2>

                <div
                    className={styles.grid}
                >
                    {[
                        { slug: "warrior", title: "Warrior Character (Blender Render)", desc: "Modeling / Shading / Lighting / Render" },
                        { slug: "topology", title: "Game-ready Topology", desc: "Clean quad flow / deformation friendly" },
                        { slug: "rigging", title: "Rigging + Skinning", desc: "Auto-Rig Pro / weight paint / facial setup" },
                    ].map((item) => (
                        <Link
                            key={item.slug}
                            href={`/projects/${item.slug}/`}  // 핵심: 슬래시로 끝
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <div
                                className={styles.card}
                            >
                                <h3 style={{ margin: 0, fontSize: 18 }}>{item.title}</h3>
                                <p style={{ marginTop: 8, opacity: 0.75 }}>{item.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

          
            <section>
                <h2 className={styles.cardTitle}>Contact</h2>
                <p className={styles.cardDesc}>
                    Email: <b>saynight647@gmail.com</b>
                </p>
            </section>
        </main>
    );
}
