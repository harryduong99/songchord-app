
const style = {
  card: `w-full lg:max-w-full lg:flex`,
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
          <div className={style.title}>Best Mountain Trails 2020</div>
          <p className={style.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        </div>
        <div className={style.moreInfo}>
          <div className="text-sm">
            <p className={style.author}>Tác giả: <span> Harry </span></p>
            <p className={style.category}>Thể loại: <span> Trữ tình </span> </p>
          </div>
        </div>
      </div>
    </div>
  )
}
  
export default SongCard
  