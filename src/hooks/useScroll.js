import { ref, onMounted, onUnmounted } from "vue"
import { throttle } from "underscore"  //节流



export default function useScroll(elRef) {
    let el = window

    const isReachBottom = ref(false)
    const clientHeight =ref(0)
    const scrollTop =ref(0)
    const scrollHeight =ref(0)

    //节流
    const scrollListener = throttle(() => {
        if(el === window) {
            clientHeight.value = document.documentElement.clientHeight
            scrollTop.value = document.documentElement.scrollTop
            scrollHeight.value = document.documentElement.scrollHeight
        } else {
            clientHeight.value = el.clientHeight
            scrollTop.value = el.scrollTop
            scrollHeight.value = el.scrollHeight
        }
        if(clientHeight.value + scrollTop.value >= scrollHeight.value) {
           isReachBottom.value = true          
        }
    }, 100)
    
   
    onMounted(() => {
        
        if (elRef) el = elRef.value;
        el.addEventListener("scroll", scrollListener)
      })
      
      onUnmounted(() => {
        el.removeEventListener("scroll", scrollListener)
      })

    return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}