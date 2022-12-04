import Link from "next/link"

const style = {
  card: ``,
  contentCard: `border border-gray-400 lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal`,
  title: `text-gray-900 font-bold text-xl mb-2`,
  description: `text-gray-700 text-base`,
  moreInfo: `flex items-center`,
  author: `text-gray-900 leading-none mb-1`,
  category: `text-gray-600`
}
const SongCard = (song: any) => {
  console.log(song);
  const href = `/detail/${song._id}`;
  return (
    <div key={song.id} className={style.card}>
      <div className={style.contentCard}>
        <div className="mb-3">
          <Link href={href}>
            <div className={style.title}><a href={href}>{song.title}</a></div>
          </Link>
          <p className={style.description} dangerouslySetInnerHTML={{__html: song.content.slice(0, 70) + '...'}}></p>
        </div>
        <div className={style.moreInfo}>
          <div className="text-sm">
            <p className={style.author}>Tác giả: <a href=""><span> {song.author} </span></a></p>
            <p className={style.category}>Thể loại: <a href=""><span> {song.category} </span></a> </p>
          </div>
        </div>
      </div>
    </div>
  )
}
  
export default SongCard
  