import Link from "next/link";

export const dynamic = "force-static";

const PROJECTS: Record<
    string,
    {
        title: string;
        subtitle: string;
        role: string[];
        tools: string[];
        description: string;
        media: { label: string; url: string }[];
    }
> = {
    warrior: {
        title: "Warrior Character",
        subtitle: "Blender Render / Game-ready Character",
        role: ["Character Modeling", "Shading", "Lighting", "Render"],
        tools: ["Blender", "ZBrush", "Substance Painter"],
        description:
            "게임용 캐릭터를 기준으로 하이폴리 → 리토폴로지 → UV → 텍스처 → 렌더까지 전체 파이프라인을 진행한 작업입니다.",
        media: [
            { label: "Render Image", url: "images/warrior_01.jpg" },
            { label: "Wireframe", url: "images/warrior_wire.jpg" },
        ],
    },
    topology: {
        title: "Game-ready Topology",
        subtitle: "Clean quad flow / deformation friendly",
        role: ["Retopology", "Optimization", "Deformation check"],
        tools: ["Blender", "ZBrush"],
        description:
            "애니메이션 변형을 고려한 쿼드 기반 토폴로지 설계와 관절/얼굴 영역 변형 테스트를 포함합니다.",
        media: [{ label: "Topology Preview", url: "images/topology_01.jpg" }],
    },
    rigging: {
        title: "Rigging + Skinning",
        subtitle: "Auto-Rig Pro / Weight paint / Facial setup",
        role: ["Rigging", "Skinning", "Facial setup"],
        tools: ["Blender", "Auto-Rig Pro"],
        description:
            "게임 엔진(Unity/UE5) 연동을 고려하여 본 구조, 웨이트 페인팅, 기본 페이셜 세팅까지 진행했습니다.",
        media: [{ label: "Rigging Preview", url: "images/rig_01.jpg" }],
    },
};

export async function generateStaticParams() {
    return Object.keys(PROJECTS).map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const project = PROJECTS[slug];

    if (!project) {
        return (
            <main style={{ maxWidth: 980, margin: "0 auto", padding: "56px 20px" }}>
                <h1 style={{ fontSize: 28, marginBottom: 12 }}>Project not found</h1>
                <p style={{ opacity: 0.75, marginBottom: 18 }}>
                    존재하지 않는 프로젝트입니다: <b>{String(slug)}</b>
                </p>
                <Link href="/" style={{ textDecoration: "underline" }}>
                    ← Home으로 돌아가기
                </Link>
            </main>
        );
    }

    return (
        <main style={{ maxWidth: 980, margin: "0 auto", padding: "56px 20px" }}>
            <Link href="/" style={{ textDecoration: "underline", opacity: 0.85 }}>
                ← Back
            </Link>

            <header style={{ marginTop: 18, marginBottom: 28 }}>
                <h1 style={{ fontSize: 38, margin: 0 }}>{project.title}</h1>
                <p style={{ marginTop: 10, opacity: 0.8 }}>{project.subtitle}</p>
            </header>
            <section style={{ marginBottom: 28 }}>
                <h2 style={{ fontSize: 20, marginBottom: 10 }}>Overview</h2>
                <p style={{ lineHeight: 1.7, opacity: 0.85 }}>{project.description}</p>
            </section>

            <section style={{ marginBottom: 28 }}>
                <h2 style={{ fontSize: 20, marginBottom: 10 }}>Role</h2>
                <ul style={{ margin: 0, paddingLeft: 18, opacity: 0.9 }}>
                    {project.role.map((x) => (
                        <li key={x} style={{ marginBottom: 6 }}>
                            {x}
                        </li>
                    ))}
                </ul>
            </section>

            <section style={{ marginBottom: 28 }}>
                <h2 style={{ fontSize: 20, marginBottom: 10 }}>Tools</h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    {project.tools.map((x) => (
                        <span
                            key={x}
                            style={{
                                border: "1px solid #222",
                                padding: "8px 10px",
                                borderRadius: 999,
                                background: "rgba(255,255,255,0.02)",
                                fontSize: 14,
                                opacity: 0.95,
                            }}
                        >
                            {x}
                        </span>
                    ))}
                </div>
            </section>

            <section style={{ marginBottom: 10 }}>
                <h2 style={{ fontSize: 20, marginBottom: 10 }}>Media</h2>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                        gap: 14,
                    }}
                >
                    {project.media.map((m) => {
                        const src = m.url; // 핵심: basePath 붙이기
                        return (
                            <div
                                key={m.url}
                                style={{
                                    border: "1px solid #222",
                                    borderRadius: 14,
                                    padding: 14,
                                    background: "rgba(255,255,255,0.02)",
                                }}
                            >
                                <div style={{ fontSize: 14, opacity: 0.8, marginBottom: 10 }}>
                                    {m.label}
                                </div>

                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={src}
                                    alt={m.label}
                                    style={{
                                        width: "100%",
                                        height: 180,
                                        objectFit: "cover",
                                        borderRadius: 12,
                                        border: "1px solid #1a1a1a",
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}
