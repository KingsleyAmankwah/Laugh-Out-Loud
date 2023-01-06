import Head from "next/head";
import Image from "next/image";
import Message from "../components/Message";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Link from "next/link";
import Spinner from "../components/Spinner";

export default function Home() {
  const [allPosts, setAllPosts] = useState([]);
  const [Loading, setLoading] = useState(false);

  const getPosts = async () => {
    setLoading(true);
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAllPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    });

    return unsubscribe;
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (Loading) return <Spinner />;

  return (
    <>
      <Head>
        <title>LOL😂</title>
        <meta
          name="description"
          content="Memes app built with React(NextJS) and Firebase"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="my-12 text-lg font-medium">
          <h2>See what other people are saying</h2>

          {allPosts.map((post) => (
            <Message key={post.id} {...post}>
              <Link href={{ pathname: `/${post.id}`, query: { ...post } }}>
                <button>
                  {post.comments?.length > 0 ? post.comments?.length : 0}{" "}
                  comments
                </button>
              </Link>
            </Message>
          ))}
        </div>
      </main>
    </>
  );
}
