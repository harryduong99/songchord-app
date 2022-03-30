
const styles = {
  wrapInfo: `flex flex-row`,
  infoChild: `mr-2`,
  title: `text-4xl font-bold mb-5`,
  content: `mt-5 leading-7`,
}
const Detail = (props: any) => {
  return (
    <div>
        <h1 className={styles.title}>{props.song.title}</h1>
        <div className={styles.wrapInfo}>
          <div className={styles.infoChild}><span>Sáng tác:</span> {props.song.author} <span> | </span></div>
          <div className={styles.infoChild}>Nhạc vàng <span> | </span></div>
          <div className={styles.infoChild}>Điệu: {props.song.category}</div>
        </div>
        
        <div className={styles.content}>
          <p>{props.song.content}</p>
        </div>
    </div>
  )
}

export default Detail
  