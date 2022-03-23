import Link from "next/link"

const styles = {
  wrapList: ``,
  list: ``,
  item: ``,
}

const Suggestion = () => {
  return (
    <div className={styles.wrapList}>
        <ul className={styles.list}>
          <li className={styles.item}><span>01. </span> <Link href="/detail/54">Xập xình ngày cưới - Ngọc Phụng</Link> </li>
          <li className={styles.item}><span>02. </span> <Link href="/detail/56">Xập xình ngày cưới - Ngọc Phụng</Link> </li>
        </ul>
    </div>
  )
}

export default Suggestion
