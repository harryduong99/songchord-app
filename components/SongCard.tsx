import Link from "next/link"

const style = {
  card: ``,
  contentCard: `border border-gray-400 lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal h-full`,
  title: `text-gray-900 font-bold text-xl mb-2`,
  description: `text-gray-700 text-base`,
  moreInfo: `flex items-center`,
  author: `text-gray-900 leading-none mb-1`,
  category: `text-gray-600`,
  a: `hover:text-blue-600`

}
const SongCard = (song: any) => {
  const href = `/detail/${song.slug}`;
  return (
    <div key={song._id} className={style.card}>
      <div className={style.contentCard}>
        <div className="mb-3">
          <a className={style.a} href={href}>
            <div className={style.title}><a href={href}>{song.title}</a></div>
          </a>
          <p className={style.description} dangerouslySetInnerHTML={{__html: song.content.slice(0, 70) + '...'}}></p>
        </div>
        <div className={style.moreInfo}>
          <div className="text-sm">
            <p className={style.author}>Tác giả: <span> {song.author} </span></p>
            <p className={style.category}>Thể loại: <span> {song.category} </span></p>
          </div>
        </div>
      </div>
    </div>
  )
}
  
export default SongCard
  