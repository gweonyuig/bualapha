"use client";

import styles from "./page.module.css";

export default function Home() {
  const getdata = async () => {
    const response = await fetch("http://192.168.45.157:9302/");
    const data = await response.json();
    console.log(data);
  };

  const blogPosts = [
    {
      id: 1,
      title: "React Hooks 이해하기",
      date: "2023-10-15",
      excerpt: "useState와 useEffect의 기본 사용법과 활용 예제를 알아봅시다.",
    },
    {
      id: 2,
      title: "React 컴포넌트 생명주기",
      date: "2023-10-10",
      excerpt:
        "React 컴포넌트의 생명주기와 각 단계에서 할 수 있는 작업들에 대해 정리했습니다.",
    },
    {
      id: 3,
      title: "상태 관리 라이브러리 비교",
      date: "2023-10-05",
      excerpt:
        "Redux, Context API, Recoil 등 다양한 상태 관리 라이브러리의 장단점을 비교합니다.",
    },
  ];

  return (
    <div
      className={styles.page}
      style={{
        backgroundColor: "#121212",
        color: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <main className={styles.main} style={{ padding: "2rem" }}>
        <header style={{ marginBottom: "3rem", textAlign: "center" }}>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            React 학습 블로그
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#aaaaaa" }}>
            React를 공부하면서 배운 내용들을 정리하는 공간입니다.
          </p>
        </header>

        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.8rem",
              marginBottom: "1.5rem",
              borderBottom: "1px solid #333",
              paddingBottom: "0.5rem",
            }}
          >
            최근 포스트
          </h2>
          <div>
            {blogPosts.map((post) => (
              <article
                key={post.id}
                style={{
                  marginBottom: "2rem",
                  padding: "1.5rem",
                  borderRadius: "8px",
                  backgroundColor: "#1e1e1e",
                  transition: "transform 0.2s",
                  cursor: "pointer",
                }}
              >
                <h3 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>
                  {post.title}
                </h3>
                <time
                  style={{
                    color: "#888888",
                    fontSize: "0.9rem",
                    display: "block",
                    marginBottom: "1rem",
                  }}
                >
                  {post.date}
                </time>
                <p style={{ color: "#dddddd" }}>{post.excerpt}</p>
                <a
                  href={`/posts/${post.id}`}
                  style={{
                    display: "inline-block",
                    marginTop: "1rem",
                    color: "#4dabf7",
                    textDecoration: "none",
                  }}
                >
                  더 읽기 →
                </a>
              </article>
            ))}
          </div>
        </section>
        <div>
          <button onClick={getdata}>데이터 가져오기</button>
        </div>
      </main>
    </div>
  );
}
