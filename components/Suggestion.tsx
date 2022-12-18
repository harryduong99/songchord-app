import Link from "next/link"
import { useEffect, useState } from "react";

const styles = {
  wrapList: `mt-4 bg-white p-4 flex`,
  list: ``,
  item: `mb-1`,
  left: `basis-1/2 p-2`,
  right: `basis-1/2 p-2`,
  title: `font-medium text-xl mb-1`,
  a: `hover:text-blue-600`
}

const Suggestion = (props: any) => {

  const renderSuggestionAuthor = props.songsAuthor.map((song: any) => {
    return (<li key={song._id} className={styles.item}><span> &#9839; </span> <a className={styles.a} href={`/detail/${song.slug}`}>{song.title}</a> </li>)
  });

  const renderSuggestionCategory = props.songsCategory.map((song: any) => {
    return (<li key={song._id} className={styles.item}><span> &#9839; </span> <a className={styles.a} href={`/detail/${song.slug}`}>{song.title}</a> </li>)
  });
  return (
    <div className={styles.wrapList}>
      <div className={styles.left}>
        <h2 className={styles.title}>Bài hát cùng tác giả</h2>
        <ul className={styles.list}>
          {renderSuggestionAuthor}
        </ul>
      </div>
      <div className={styles.right}>
      <h2 className={styles.title}>Bài hát cùng thể loại</h2>
        <ul className={styles.list}>
        {renderSuggestionCategory}
        </ul>
      </div>

    </div>
  )
}

export default Suggestion
