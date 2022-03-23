
const style = {
  card: ``,
  contentCard: `border border-gray-400 lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal`,
  title: `text-gray-900 font-bold text-xl mb-2`,
  description: `text-gray-700 text-base`,
  moreInfo: `flex items-center`,
  author: `text-gray-900 leading-none mb-1`,
  category: `text-gray-600`
}
const SongCard = () => {
  return (
    <div className={style.card}>
      <div className={style.contentCard}>
        <div className="mb-3">
          <a href="#" className={style.title}>Best Mountain Trails 2020</a>
          <p className={style.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque</p>
        </div>
        <div className={style.moreInfo}>
          <div className="text-sm">
            <p className={style.author}>Tác giả: <a href=""><span> Harry </span></a></p>
            <p className={style.category}>Thể loại: <a href=""><span> Trữ tình </span></a> </p>
          </div>
        </div>
      </div>
    </div>
  )
}
  
export default SongCard
  