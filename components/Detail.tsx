
const styles = {
  wrapInfo: `flex flex-row`,
  infoChild: `mr-2`,
  title: `text-4xl font-bold mb-5`,
  content: `mt-5 leading-7`,
}
const Detail = (props: any) => {
  return (
    <div>
        <h1 className={styles.title}>{props.title}</h1>
        <div className={styles.wrapInfo}>
          <div className={styles.infoChild}><span>Sáng tác:</span> <b>{props.author}</b><span> | </span></div>
          <div className={styles.infoChild}>Thể loại: <b>{props.category}</b></div>
        </div>
        
        <div className={styles.content}>
          <p dangerouslySetInnerHTML={{__html: props.content}}></p>
        </div>
    </div>
  )
}

export default Detail
  