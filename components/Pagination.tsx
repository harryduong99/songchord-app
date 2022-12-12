
const styles = {
  pani: `bg-violet-500 hover:bg-violet-600 cursor-pointer focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white mr-3`,
  simplePagi: `d-flex text-center p-4 mt-4`
}
const Pagination = () => {
  return (
    <div className={styles.simplePagi}>
      <span className={styles.pani}>Previous</span>
      <span className={styles.pani}>Next</span>
    </div>
  )
}

export default Pagination
