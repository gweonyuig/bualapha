"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

interface BlogPost {
  id: string;
  title: string;
  create_at: string;
  contents: string;
}

export default function Home() {
  const getdata = async () => {
    const response = await fetch("http://211.206.34.111:9302/api");
    const data = await response.json();
    console.log(data);
    return data;
  };

  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getdata();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setPosts([]);
      }
    };

    fetchData();
  }, []);

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
            {posts.map((post) => (
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
                  {post.create_at}
                </time>
                <p style={{ color: "#dddddd" }}>{post.contents}</p>
                <Link
                  href={`/posts/${post.id}`}
                  style={{
                    display: "inline-block",
                    marginTop: "1rem",
                    color: "#4dabf7",
                    textDecoration: "none",
                  }}
                >
                  더 읽r기 →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
