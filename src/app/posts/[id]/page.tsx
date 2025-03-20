"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../../page.module.css";

// Sample blog post data (in a real app, this would come from a database or API)
const blogPostsData = [
  {
    id: "1",
    title: "React Hooks 이해하기",
    date: "2023-10-15",
    content: `
      # React Hooks 이해하기

      React Hooks는 함수형 컴포넌트에서 상태와 다른 React 기능을 사용할 수 있게 해주는 기능입니다.

      ## useState
      
      useState는 가장 기본적인 Hook으로, 함수형 컴포넌트에서 상태를 관리할 수 있게 해줍니다.

      \`\`\`jsx
      import React, { useState } from 'react';

      function Counter() {
        const [count, setCount] = useState(0);
        
        return (
          <div>
            <p>현재 카운트: {count}</p>
            <button onClick={() => setCount(count + 1)}>증가</button>
          </div>
        );
      }
      \`\`\`

      ## useEffect

      useEffect Hook은 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있습니다.

      \`\`\`jsx
      import React, { useState, useEffect } from 'react';

      function Example() {
        const [count, setCount] = useState(0);

        useEffect(() => {
          document.title = \`클릭 횟수: \${count}\`;
        }, [count]); // count가 변경될 때만 실행

        return (
          <div>
            <p>버튼을 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count + 1)}>클릭</button>
          </div>
        );
      }
      \`\`\`

      ## 커스텀 Hooks

      자신만의 Hooks를 만들어 상태 관련 로직을 재사용할 수 있습니다.

      \`\`\`jsx
      function useWindowWidth() {
        const [width, setWidth] = useState(window.innerWidth);
        
        useEffect(() => {
          const handleResize = () => setWidth(window.innerWidth);
          window.addEventListener('resize', handleResize);
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
        
        return width;
      }
      \`\`\`
    `,
  },
  {
    id: "2",
    title: "React 컴포넌트 생명주기",
    date: "2023-10-10",
    content: `
      # React 컴포넌트 생명주기

      React 컴포넌트는 생성(mounting), 업데이트(updating), 제거(unmounting)의 생명주기를 가집니다.

      ## 생성 단계 (Mounting)

      컴포넌트가 DOM에 처음 렌더링될 때 실행되는 단계입니다.

      - constructor(): 컴포넌트가 초기화될 때 호출
      - render(): JSX를 반환
      - componentDidMount(): 컴포넌트가 DOM에 마운트된 후 호출

      ## 업데이트 단계 (Updating)

      props나 state가 변경되어 컴포넌트가 다시 렌더링될 때 실행되는 단계입니다.

      - shouldComponentUpdate(): 컴포넌트가 업데이트될지 결정
      - render(): 변경된 내용으로 다시 렌더링
      - componentDidUpdate(): 업데이트가 완료된 후 호출

      ## 제거 단계 (Unmounting)

      컴포넌트가 DOM에서 제거될 때 실행되는 단계입니다.

      - componentWillUnmount(): 컴포넌트가 제거되기 직전에 호출

      ## 함수형 컴포넌트에서의 생명주기

      Hooks로 생명주기 기능을 대체할 수 있습니다.

      \`\`\`jsx
      import React, { useState, useEffect } from 'react';

      function LifecycleExample() {
        const [count, setCount] = useState(0);

        // componentDidMount와 componentDidUpdate를 합친 효과
        useEffect(() => {
          console.log('컴포넌트가 마운트되었거나 업데이트되었습니다.');

          // componentWillUnmount
          return () => {
            console.log('컴포넌트가 언마운트됩니다.');
          };
        });

        return (
          <div>
            <p>카운트: {count}</p>
            <button onClick={() => setCount(count + 1)}>증가</button>
          </div>
        );
      }
      \`\`\`
    `,
  },
  {
    id: "3",
    title: "상태 관리 라이브러리 비교",
    date: "2023-10-05",
    content: `
      # 상태 관리 라이브러리 비교

      React 애플리케이션에서 상태 관리는 매우 중요합니다. 여러 상태 관리 라이브러리들의 특징을 비교해 보겠습니다.

      ## Redux

      가장 널리 사용되는 상태 관리 라이브러리로, 예측 가능한 상태 관리를 제공합니다.

      ### 장점
      - 예측 가능한 상태 관리
      - 시간 여행 디버깅
      - 미들웨어를 통한 확장성
      - 큰 커뮤니티와 생태계

      ### 단점
      - 보일러플레이트 코드가 많음
      - 러닝 커브가 높음
      - 작은 애플리케이션에서는 과도할 수 있음

      ## Context API

      React 내장 기능으로, 컴포넌트 트리 전체에 데이터를 제공합니다.

      ### 장점
      - React에 내장되어 있음
      - 추가 라이브러리 불필요
      - 설정이 간단함

      ### 단점
      - 성능 최적화가 어려울 수 있음
      - 복잡한 상태 관리에는 제한적
      - 상태 업데이트 로직이 분산될 수 있음

      ## Recoil

      Facebook에서 만든 실험적인 상태 관리 라이브러리입니다.

      ### 장점
      - React에 최적화됨
      - 비동기 데이터 흐름 지원
      - 상태 파생이 쉬움
      - 코드 분할 지원

      ### 단점
      - 아직 실험적인 단계
      - 작은 커뮤니티
      - 러닝 커브가 있음

      ## Zustand

      간단하고 가벼운 상태 관리 라이브러리입니다.

      ### 장점
      - 매우 간단한 API
      - 최소한의 보일러플레이트
      - 좋은 성능
      - TypeScript 지원이 우수함

      ### 단점
      - Redux에 비해 기능이 제한적
      - 미들웨어 지원이 제한적
      - 작은 커뮤니티

      \`\`\`jsx
      // Redux 예제
      const counterReducer = (state = { count: 0 }, action) => {
        switch (action.type) {
          case 'INCREMENT':
            return { ...state, count: state.count + 1 };
          default:
            return state;
        }
      };

      // Context API 예제
      const CountContext = React.createContext(0);

      function CountProvider({ children }) {
        const [count, setCount] = useState(0);
        return (
          <CountContext.Provider value={{ count, setCount }}>
            {children}
          </CountContext.Provider>
        );
      }
      \`\`\`
    `,
  },
];

export default function BlogPost() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const post = blogPostsData.find((post) => post.id === id);

  if (!post) {
    return (
      <div
        style={{
          backgroundColor: "#121212",
          color: "#ffffff",
          minHeight: "100vh",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>포스트를 찾을 수 없습니다</h1>
        <button
          onClick={() => router.push("/")}
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            backgroundColor: "#4dabf7",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          홈으로 돌아가기
        </button>
      </div>
    );
  }

  // Convert markdown-like content to HTML (simple version)
  const formatContent = (content: string) => {
    let formatted = content
      .replace(/^#{1}\s+(.+)$/gm, '<h1 class="post-h1">$1</h1>')
      .replace(/^#{2}\s+(.+)$/gm, '<h2 class="post-h2">$1</h2>')
      .replace(/^#{3}\s+(.+)$/gm, '<h3 class="post-h3">$1</h3>')
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(
        /```jsx([\s\S]*?)```/g,
        '<pre class="code-block"><code>$1</code></pre>'
      )
      .replace(/`(.+?)`/g, '<code class="inline-code">$1</code>')
      .split("\n")
      .map((line) => {
        if (line.match(/^<h|^<pre|^<code|^<strong|^<em/)) {
          return line;
        }
        if (line.trim() === "") {
          return "<br />";
        }
        return `<p>${line}</p>`;
      })
      .join("");

    return formatted;
  };

  return (
    <div
      style={{
        backgroundColor: "#121212",
        color: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          backgroundColor: "#1e1e1e",
          padding: "1rem 2rem",
          borderBottom: "1px solid #333",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#4dabf7",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            fontSize: "1rem",
          }}
        >
          ← 블로그 홈으로
        </Link>
      </header>

      <main
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "2rem",
        }}
      >
        <article>
          <header style={{ marginBottom: "2rem" }}>
            <h1
              style={{
                fontSize: "2.5rem",
                marginBottom: "0.5rem",
              }}
            >
              {post.title}
            </h1>
            <time
              style={{
                color: "#888888",
                fontSize: "0.9rem",
                display: "block",
              }}
            >
              {post.date}
            </time>
          </header>

          <div
            className="post-content"
            style={{ lineHeight: "1.7" }}
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />
        </article>
      </main>

      <style jsx global>{`
        .post-h1 {
          font-size: 2rem;
          margin: 2rem 0 1rem;
          border-bottom: 1px solid #333;
          padding-bottom: 0.5rem;
        }
        .post-h2 {
          font-size: 1.7rem;
          margin: 1.8rem 0 1rem;
          color: #e0e0e0;
        }
        .post-h3 {
          font-size: 1.4rem;
          margin: 1.5rem 0 1rem;
          color: #d0d0d0;
        }
        .code-block {
          background-color: #2d2d2d;
          border-radius: 5px;
          padding: 1rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }
        .inline-code {
          background-color: #2d2d2d;
          padding: 0.2rem 0.4rem;
          border-radius: 3px;
          font-family: monospace;
        }
        p {
          margin: 1rem 0;
        }
      `}</style>
    </div>
  );
}
