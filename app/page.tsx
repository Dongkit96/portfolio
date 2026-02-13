import Link from "next/link";

// GitHub Pages basePath 대응 (예: /portfolio)
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
//const BASE_PATH = process.env.NODE_ENV === "production" ? "/portfolio" : "";;
const isProd = process.env.NODE_ENV === "production";


export default function Home() {

    return (
        <main style={{ minHeight: "100vh", padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
            <header style={{ marginBottom: 48 }}>
                <h1 style={{ fontSize: 44, margin: 0 }}>3D Character Artist / Tech (Rigging)</h1>
                <p style={{ fontSize: 18, opacity: 0.8, marginTop: 12 }}>
                    Unity · UE5 | Character Modeling · Retopo · Rigging · Game-ready Pipeline
                </p>

                <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
                    <a
                        href="https://www.youtube.com/@%EC%82%AC%ED%88%AC%ED%99%94"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            padding: "10px 14px",
                            borderRadius: 10,
                            border: "1px solid #333",
                            textDecoration: "none",
                            color: "white",
                        }}
                    >
                        YouTube
                    </a>

                    <a
                        href="https://www.sooplive.co.kr/station/staynight647"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            padding: "10px 14px",
                            borderRadius: 10,
                            border: "1px solid #333",
                            textDecoration: "none",
                            color: "white",
                        }}
                    >
                        SOOP
                    </a>

                    <a
                        href="https://github.com/Dongkit96"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            padding: "10px 14px",
                            borderRadius: 10,
                            border: "1px solid #333",
                            textDecoration: "none",
                            color: "white",
                        }}
                    >
                        GitHub
                    </a>
                </div>
            </header>

            <section style={{ marginBottom: 48 }}>
                <h2 style={{ fontSize: 24, marginBottom: 14 }}>Portfolio</h2>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                        gap: 16,
                    }}
                >
                    {[
                        { slug: "warrior", title: "Warrior Character (Blender Render)", desc: "Modeling / Shading / Lighting / Render" },
                        { slug: "topology", title: "Game-ready Topology", desc: "Clean quad flow / deformation friendly" },
                        { slug: "rigging", title: "Rigging + Skinning", desc: "Auto-Rig Pro / weight paint / facial setup" },
                    ].map((item) => (
                        <Link
                            key={item.slug}
                            //href={/projects/${item.slug}/}
                            href={`${BASE_PATH}/projects/${item.slug}.html`}
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <div
                                style={{
                                    border: "1px solid #222",
                                    borderRadius: 14,
                                    padding: 18,
                                    background: "rgba(255,255,255,0.02)",
                                }}
                            >
                                <h3 style={{ margin: 0, fontSize: 18 }}>{item.title}</h3>
                                <p style={{ marginTop: 8, opacity: 0.75 }}>{item.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section>
                <h2 style={{ fontSize: 24, marginBottom: 14 }}>Contact</h2>
                <p style={{ opacity: 0.8 }}>
                    Email: <b>saynight647@gmail.com</b>
                </p>
            </section>
        </main>
    );
}
