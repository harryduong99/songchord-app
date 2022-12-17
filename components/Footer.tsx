
const styles = {
  footer: `flex h-24 w-full items-center justify-center border-t mt-5 flex-col flex-wrap`,
  bottom: `mt-2`,
}
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>Powered by HopAmXua</div>
      <div className={styles.bottom}>
        <span>Hợp âm xưa | Hợp âm đơn giản | Hợp âm đàn guitar</span>
      </div>
    </footer>
  )
}

export default Footer
