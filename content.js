function handleAds() {
  // skip ads
  const skipButtons = document.querySelectorAll(".ytp-skip-ad-button")
  skipButtons.forEach((btn) => {
    if (btn.style.display !== "none") {
      btn.click()
      console.log("[AdBlock] Đã click nút bỏ qua quảng cáo.", btn)
    }
  })
  if (skipButtons.length > 0) {
    setTimeout(() => {
      // remove skip buttons after 1 second
      skipButtons.forEach((btn) => {
        if (btn.style.display !== "none") {
          btn.click()
          console.log(
            "[AdBlock] Đã click nút bỏ qua quảng cáo sau 1 giây.",
            btn
          )
        }
      })
    }, 500)
  }

  // Remove overlay ads
  const overlays = document.querySelectorAll(".ytp-ad-overlay-container")
  overlays.forEach((el) => el.remove())

  // tua nhanh ads
  const ad = document.querySelector(".ad-showing")
  const video = document.querySelector("video")
  if (video && video.duration && isFinite(video.duration) && ad) {
    video.currentTime = video.duration
    console.log("[AdBlock] Tua hết quảng cáo.")
  }
}

const observer = new MutationObserver(() => {
  handleAds()
})

observer.observe(document.body, {
  childList: true,
  subtree: true,
})

console.log("[AdBlock] Đang theo dõi quảng cáo...")
