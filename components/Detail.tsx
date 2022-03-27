
const styles = {
  wrapInfo: `flex flex-row`,
  infoChild: `mr-2`,
  title: `text-4xl font-bold mb-5`,
  content: `mt-5 leading-7`,
}
const Detail = (props: any) => {
  return (
    <div>
        <h1 className={styles.title}>{props.song.name}</h1>
        <div className={styles.wrapInfo}>
          <div className={styles.infoChild}><span>Sáng tác:</span> Hary Duong <span> | </span></div>
          <div className={styles.infoChild}>Nhạc vàng <span> | </span></div>
          <div className={styles.infoChild}>Điệu: Cha Cha Cha</div>
        </div>
        
        <div className={styles.content}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, dolore. Numquam temporibus fugiat unde, dolores eaque quod beatae nihil similique! Laboriosam iusto perspiciatis in molestias officia dolorem magnam, maxime consectetur.</p>
        </div>
    </div>
  )
}

export default Detail
  