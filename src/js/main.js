// 获取随机颜色按钮
const btnColor = document.querySelector(".btncolor")
// 获取颜色区域
const bgColor = document.querySelector(".main")
// 获取颜色文字
const textColor = document.querySelector(".colortext")


// 定义函数获取随机颜色
function sjColor() {
  const color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
  let str = ""
  for (let i = 1; i <= 6; i++) {
    str += color[Math.floor(Math.random() * color.length)]
    if (i == 6) {
      return str
    }
  }
}

btnColor.addEventListener("click", () => {
  let color = `#${sjColor()}`
  textColor.innerHTML = color
  bgColor.style.backgroundColor = color
})