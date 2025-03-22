"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";

const getdata = async () => {
  const response = await fetch("http://192.168.45.157:9302/api");
  const data = await response.json();
  console.log(data);
  return data;
};

// Sample blog post data (in a real app, this would come from a database or API)

interface BlogPost {
  id: string;
  title: string;
  create_at: string;
  contents: string;
}

export default function BlogPost() {
  const [blogPostsData, setBlogPostsData] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getdata();
        setBlogPostsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
        setBlogPostsData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <p>로딩 중...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <h1>{error}</h1>
        <button onClick={() => router.push("/")} className={styles.backButton}>
          홈으로 돌아가기
        </button>
      </div>
    );
  }

  const post = blogPostsData.find((post) => String(post.id) === id);

  if (post) {
    return (
      <div className={styles.page}>
        <header>
          <Link href="/" className={styles.backLink}>
            {"<"} 홈으로 돌아가기
          </Link>
        </header>
        <main>
          <h1 className={styles.postTitle}>{post.title}</h1>
          <p className={styles.postDate}>{post.create_at}</p>
          <p className={styles.postContent}>{post.contents}</p>
        </main>
      </div>
    );

    if (!post) {
      return (
        <div className={styles.notFoundContainer}>
          <h1>포스트를 찾을 수 없습니다</h1>
          <button
            onClick={() => router.push("/")}
            className={styles.backButton}
          >
            홈으로 돌아가기
          </button>
        </div>
      );
    }
  }
}
// Rest of your code remains the same...
